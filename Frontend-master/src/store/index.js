import { combineReducers, createStore } from "redux";
import shoppingList from "./shopping-list/reducer";
import user from "./user/reducer";

export const rootReducer = combineReducers({ shoppingList, user });

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
