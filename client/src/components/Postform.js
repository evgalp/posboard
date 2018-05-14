import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      content: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: this.state.title,
      content: this.state.content
    };

    this.props.addPost(newPost);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <div className="row">
              <h3>Add new post</h3>
            </div>
            <div className="row">
              <form className="twelve columns" onSubmit={this.onSubmit}>
                <div className="row">
                  <label htmlFor="post-title">Post title</label>
                  <input
                    name="title"
                    onChange={this.onChange}
                    id="post-title"
                    className="u-full-width"
                    type="text"
                  />
                </div>
                <div className="row">
                  <label htmlFor="post-content">Message</label>
                  <textarea
                    name="content"
                    onChange={this.onChange}
                    className="u-full-width"
                    placeholder="Hello world..."
                    id="post-content"
                  />
                </div>
                <div className="row">
                  <input
                    className="button-primary four columns"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Postform.propTypes = {
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
  return {
    post: state.newPost
  };
};

export default connect(mapStateToProps, { addPost })(Postform);
