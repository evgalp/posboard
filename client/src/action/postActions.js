import axios from "axios";

export const addPost = postData => dispatch => {
  axios
    .post("routes/posts/add", postData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
