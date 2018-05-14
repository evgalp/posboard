import { GET_ALL_POSTS, ADD_POST } from "../actions/types";

const initialState = {
  newPost: {
    title: "",
    content: ""
  },
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      console.log("postReducer case GET_ALL_POSTS called");
      console.log("action.payload ", action.payload);

      return {
        ...state,
        items: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        newPost: action.payload
      };
    default:
      return state;
  }
}
