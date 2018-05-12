import { ADD_POST } from "../action/types";
import addPost from "../action/postActions";

const initialState = {
  postTitle: "",
  postText: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
