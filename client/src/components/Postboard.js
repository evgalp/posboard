import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPosts } from "../actions/postActions";

class Postboard extends Component {
  componentWillMount() {
    console.log("Postboard mounted");
    this.props.getAllPosts();
  }
  render() {
    const postItems = this.props.component_alias_posts.map(post => (
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
            <h2>Recent posts</h2>
          </div>
        </div>
        <div className="row recent-posts">{postItems}</div>
      </div>
    );
  }
}

Postboard.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  component_alias_posts: PropTypes.array.isRequired
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    component_alias_posts: state.root_reducer_alias_for_post_reducer.items
  };
};
export default connect(mapStateToProps, { getAllPosts })(Postboard);
