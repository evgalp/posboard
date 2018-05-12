import { ADD_POST } from "./types";

export const addPost = postData => {
  return {
    type: ADD_POST,
    payload: postData
  };
};
