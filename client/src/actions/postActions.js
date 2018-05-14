import axios from "axios";

import { GET_ALL_POSTS } from "./types";

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
