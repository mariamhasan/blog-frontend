import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <React.Fragment>
      <div className="author-card card">
        <div className="image-container">
          <img
            className="author-img"
            src={require("./images/Mariam_Hasan.jpg")}
          ></img>
        </div>
        <span> Ahmed samy</span>
        <span>
          <a>Follow</a>
        </span>
        <p>11 Followers</p>
        <p>20 Following</p>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            src={require("./images/javascript.jpg")}
            alt="Avatar"
            style={{ width: "100%" }}
          />
        </div>
        <div className="article-author-container">
          <div className="article-container">
            <h4>
              <NavLink className="nav-link" to="/article">
                <h3 style={{ color: "black" }}>Article Title</h3>
              </NavLink>
            </h4>
            <p className="article-desc">
              Article description
              hfewgfhsweedhdjejefwnijefjfjfbhrnbghfgrhrfbhgbrffghrgb
            </p>
          </div>
          <div className="author-Container">
            <div className="image-container">
              <img
                className="author-img"
                src={require("./images/Mariam_Hasan.jpg")}
              ></img>
            </div>
            <div className="author-data">
              <div className="author-name" style={{ color: "black" }}>
                Author Name
              </div>
            </div>
            {/* <time className="article-desc"> June 9,2019</time> */}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img
            src={require("./images/javascript.jpg")}
            alt="Avatar"
            style={{ width: "100%" }}
          />
        </div>
        <div className="article-author-container">
          <div className="article-container">
            <h4>
              <NavLink className="nav-link" to="/profile">
                <h3 style={{ color: "black" }}>Article Title</h3>
              </NavLink>
            </h4>
            <p className="article-desc">
              Article description
              hfewgfhsweedhdjejefwnijefjfjfbhrnbghfgrhrfbhgbrffghrgb
            </p>
          </div>
          <div className="author-Container">
            <div className="image-container">
              <img
                className="author-img"
                src={require("./images/Mariam_Hasan.jpg")}
              ></img>
            </div>
            <div className="author-data">
              <div className="author-name" style={{ color: "black" }}>
                Author Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
