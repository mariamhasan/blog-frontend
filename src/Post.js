import React, { Component } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
class Post extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    this.getPost();
  }

  async getPost() {
    try {
      const res = await axios.get(
        `http://localhost:3001/posts/${this.props.match.params.id}`
      );
      this.setState({ post: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  renderTags(tags) {
    return tags?.map(tag => (
      <span style={{ "margin-right": "10px" }} className="tag-span">
        {tag}
      </span>
    ));
  }

  renderPost() {
    return (
      <React.Fragment key={this.state.post._id}>
        <div>
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <p>By: {this.state.post.author}</p>
          <div className="tags">
            <div className="tag">{this.renderTags(this.state.post.tags)}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.renderPost()}</div>
      </React.Fragment>
    );
  }
}

export default Post;
