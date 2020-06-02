export const CREATE_LIST = "CREATE_LIST";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CLEAR = "CLEAR";
export const LOAD_LIST = "LOAD_LIST";
export const SET_LIST = "SET_LIST";
export const SAVE_TEMP_LIST = "SAVE_TEMP_LIST";

export const createList = (override, user) => ({
  type: CREATE_LIST,
  payload: {
    override,
    user
  }
});

export const addProduct = (product, user) => ({
  type: ADD_PRODUCT,
  payload: {
    product,
    user
  }
});

export const deleteProduct = (productId, user) => ({
  type: DELETE_PRODUCT,
  payload: {
    productId,
    user
  }
});

export const clear = user => ({
  type: CLEAR,
  payload: {
    user
  }
});

export const loadShoppingList = user => ({
  type: LOAD_LIST,
  payload: {
    user
  }
});

export const setShoppingList = products => ({
  type: SET_LIST,
  payload: {
    products
  }
});

export const saveTempShoppingList = products => ({
  type: SAVE_TEMP_LIST,
  payload: {
    products
  }
});
