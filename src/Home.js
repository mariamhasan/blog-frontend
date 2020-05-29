import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PostListItem from "./PostListItem";
import "./styles.css";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const result = await axios.get("http://localhost:3001/posts/");
    this.setState({ posts: result.data });
  }

  renderList() {
    return this.state.posts.map(post => {
      return <PostListItem post={post} key={post._id}></PostListItem>;
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavLink to="/addBlog">
          <div className="addBlog-contaier">
            <img className="addBlog" src={require("./images/add.png")}></img>
          </div>
        </NavLink>
        {this.renderList()}
      </React.Fragment>
    );
  }
}

export default Home;
