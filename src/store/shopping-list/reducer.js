import {
  CREATE_LIST,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CLEAR,
  LOAD_LIST,
  SET_LIST,
  SAVE_TEMP_LIST
} from "./actions";
import axios from "axios";
import store from "../../store";
import { setShoppingList, createList } from "./actions";

const initialState = {
  products: [],
  loading: false,
  tempProducts: [],
  listCreated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST: {
      const { override, user } = action.payload;

      if (user.isAuthenticated && user.accessToken) {
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/shopping-list/create/`,
            {
              productIds:
                state.tempProducts.length > 0
                  ? state.tempProducts.map(p => p.id)
                  : state.products.map(p => p.id),
              override: override
            },
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`
              }
            }
          )
          .then(res => {})
          .catch(() => {});
      }

      var products = state.products;

      if (state.tempProducts.length > 0) {
        if (override) {
          // override products
          products = state.tempProducts;
        } else {
          // merge products
          state.tempProducts.forEach(tempItem => {
            var overlap = products.filter(
              product => product.id === tempItem.id
            );

            if (overlap.length === 0) {
              products.push(tempItem);
            }
          });
        }
      }

      return {
        ...state,
        products: products,
        listCreated: true,
        tempProducts: []
      };
    }

    case ADD_PRODUCT: {
      const { product, user } = action.payload;

      if (user.isAuthenticated && user.accessToken) {
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/shopping-list/add-item`,
            {
              productId: product.id
            },
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`
              }
            }
          )
          .then(res => {})
          .catch(() => {});
      }

      var addedProducts = state.products.filter(p => p.id === product.id);
      if (addedProducts.length === 0) {
        return { ...state, products: [...state.products, product] };
      }

      return state;
    }

    case DELETE_PRODUCT: {
      const { productId, user } = action.payload;

      if (user.isAuthenticated && user.accessToken) {
        axios
          .delete(
            `${process.env.REACT_APP_API_URL}/shopping-list/delete-item`,
            {
              data: {
                productId: productId
              },
              headers: {
                Authorization: `Bearer ${user.accessToken}`
              }
            }
          )
          .then(res => {})
          .catch(() => {});
      }

      var products = state.products.filter(p => p.id !== productId);

      return {
        ...state,
        products: products
      };
    }

    case CLEAR: {
      const { user } = action.payload;

      if (user.isAuthenticated && user.accessToken) {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/shopping-list/clear`, {
            data: {},
            headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
          })
          .then(res => {})
          .catch(() => {});
      }

      return initialState;
    }

    case LOAD_LIST: {
      const { user } = action.payload;

      if (user.isAuthenticated && user.accessToken) {
        axios
          .get(`${process.env.REACT_APP_API_URL}/shopping-list`, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
          })
          .then(res => {
            store.dispatch(setShoppingList(res.data, user));

            if (
              !state.listCreated &&
              user.isAuthenticated &&
              res.data.length === 0 &&
              state.tempProducts.length > 0
            ) {
              store.dispatch(createList(true, user));
            }
          })
          .catch(() => {});

        return { ...state, loading: true };
      }

      return state;
    }

    case SET_LIST: {
      const { products } = action.payload;

      return {
        ...state,
        products: products,
        loading: false,
        listCreated: state.tempProducts.length === 0
      };
    }

    case SAVE_TEMP_LIST: {
      const { products } = action.payload;

      return {
        ...state,
        tempProducts: products
      };
    }

    default:
      return state;
  }
}
