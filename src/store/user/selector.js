import { createSelector } from "reselect";

const userStore = state => state.user;

const getUser = createSelector(userStore, user => user);

export { getUser };
