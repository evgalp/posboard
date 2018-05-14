import axios from "axios";

import { GET_ALL_POSTS, ADD_POST } from "./types";

export const getAllPosts = () => dispatch => {
  console.log("getAllPosts action called");
  axios
    .get("/routes/posts/all")
    .then(res =>
      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const addPost = postDataForm => dispatch => {
  console.log(postDataForm);
  axios
    .post("/routes/posts/add", postDataForm)
    .then(postDataForm =>
      dispatch({
        type: ADD_POST,
        payload: postDataForm
      })
    )
    .catch(err => console.log(err));
};
