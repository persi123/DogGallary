import { combineReducers } from "redux";
import authReducer from "./authReducer";
import imageReducer from "./ImageLoadReducer";

export default combineReducers({
  auth: authReducer,
  image: imageReducer
});
