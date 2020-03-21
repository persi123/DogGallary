import { REGISTER_SUCESS } from "./Types";
import Axios from "axios";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  //dispatch({ type: "USER_LOADING" });

  dispatch({
    type: "USER_LOADED"
  });
};

// register user
export const register = ({ name, email, password }) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });
  console.log(body);
  Axios.post("/api/user", body, config).then(res =>
    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data
    })
  );
};

//logoutAction
export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export const tokenConfig = getState => {
  //Get token from local storage
  const token = getState().auth.token;

  //Header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
