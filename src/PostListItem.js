import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.onShowPost = this.onShowPost.bind(this);
  }

  onShowPost() {
    window.location.pathname = `/posts/${this.props.post._id}`;
  }

  renderTags(tags) {
    return tags.map(tag => (
      <span style={{ "margin-right": "10px" }} className="tag-span">
        {tag}
      </span>
    ));
  }

  state = {};
  render() {
    const { post } = this.props;
    return (
      <React.Fragment key={post._id}>
        <div className="cards-wrapper">
          <div className="card-grid-space">
            <a
              className="card"
              style={{ backgroundImage: "url(./images/javascript.jpg)" }}
            >
              <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <NavLink to="/post">
                  <button onClick={this.onShowPost}>Show</button>
                </NavLink>

                <div className="tags">
                  <div className="tag">{this.renderTags(post.tags)}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostListItem;
