export const SET_USER = "SET_USER";

export const setAuthUser = (userId, isAuthenticated, accessToken) => ({
  type: SET_USER,
  payload: {
    userId,
    isAuthenticated,
    accessToken
  }
});
