import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
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

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <NavLink to="/posts">
            {" "}
            <span className="navbar-brand">Blogestra</span>
          </NavLink>

          <NavLink className="nav-link home" to="/posts">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <span className="nav-link">
                    Discover blogs <span className="sr-only">(current)</span>
                  </span>
                </li>
              </ul>
            </div>
          </NavLink>
          <div className="form-inline my-2 my-lg-0 searchinput">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            {/* <i className="fas fa-search" /> */}

            {/* <FontAwesomeIcon icon={fa - search} /> */}
          </div>
          <NavLink className="nav-link login" to="/login">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Log in
            </button>
          </NavLink>
          <NavLink className="nav-link signup" to="/register">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Sign up
            </button>
          </NavLink>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
