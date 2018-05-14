import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPosts } from "../actions/postActions";

class Postboard extends Component {
  componentWillMount() {
    console.log("Postboard mounted");
    this.props.getAllPosts();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps ", nextProps);
    if (nextProps.newPost) {
      this.props.componentAliasForPostsArray.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.componentAliasForPostsArray.map(post => (
      <div key={post._id} className="post">
        <h4 className="post-title">{post.title}</h4>
        <div className="post-text">{post.content}</div>
        <div className="post-date">
          <strong>Added: </strong> <span>{post.date}</span>
        </div>
      </div>
    ));
    return (
      <div className="container">
        <div className="row">
          <div className="columns six">
            <h3>Recent posts</h3>
          </div>
        </div>
        <div className="row recent-posts">{postItems}</div>
      </div>
    );
  }
}

Postboard.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  componentAliasForPostsArray: PropTypes.array.isRequired
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    componentAliasForPostsArray: state.rootReducerAliasForPostReducer.items,
    newPost: state.rootReducerAliasForPostReducer.newPost.data
  };
};
export default connect(mapStateToProps, { getAllPosts })(Postboard);
