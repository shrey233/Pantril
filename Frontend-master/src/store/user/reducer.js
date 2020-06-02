import { SET_USER } from "./actions";

const initialState = {
  userId: null,
  isAuthenticated: false,
  accessToken: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const { userId, isAuthenticated, accessToken } = action.payload;

      return { ...state, userId, isAuthenticated, accessToken };
    }

    default:
      return state;
  }
}
