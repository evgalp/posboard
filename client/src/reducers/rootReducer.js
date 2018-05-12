// A rootReducer combines all other reducers together

import { combineReducers } from "redux";

// Import reducers
import postReducer from "./postReducer";

export default combineReducers({
  post: postReducer
});
