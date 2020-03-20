import { REGISTER_SUCESS } from "../action/Types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case REGISTER_SUCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
