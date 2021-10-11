import { AUTH_LOGAUT, AUTH_SUCCESS } from "../action/actionTypes";

const initialState = {
  isAuthentificated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthentificated: true,
      };
    case AUTH_LOGAUT:
      return {
        ...state,
        isAuthentificated: false,
      };
    default:
      return state;
  }
}
