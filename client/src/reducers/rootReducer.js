import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  root_reducer_alias_for_post_reducer: postReducer
});
