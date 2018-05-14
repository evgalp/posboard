import { GET_ALL_POSTS } from "../actions/types";

const initialState = {
  newPost: {
    title: "",
    text: ""
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
    default:
      return state;
  }
}
