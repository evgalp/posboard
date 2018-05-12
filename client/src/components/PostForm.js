import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addPost } from "../action/postActions";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      postTitle: "",
      postContent: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // newPost - data to be sent in request; field must match req.body fields
    let newPost = {
      title: this.state.postTitle,
      content: this.state.postContent
    };

    this.props.addPost(newPost);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Add new post</h3>
        </div>
        <div className="row">
          <form onSubmit={this.onSubmit} className="twelve columns">
            <div className="row">
              <label htmlFor="post-title">Post title</label>
              <input
                name="postTitle"
                value={this.state.postTitle}
                onChange={this.onChange}
                id="post-title"
                className="u-full-width"
                type="text"
              />
            </div>
            <div className="row">
              <label htmlFor="post-content">Message</label>
              <textarea
                name="postContent"
                value={this.state.postContent}
                onChange={this.onChange}
                className="u-full-width"
                placeholder="Hello world..."
                id="post-content"
              />
            </div>
            <div className="row">
              <input className="button-primary four columns" type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  postData: PropTypes.object.isRequired
};

// is taken from combineReducers export default combineReducers({post:postReducer});

const mapStateToProps = state => ({
  postData: state.postData
});

export default connect(mapStateToProps, { addPost })(PostForm);
