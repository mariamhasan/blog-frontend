import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./Register";
import Login from "./Login";
import Navbar from "./navbar";
import Home from "./Home";
import Profile from "./Profile";
import Article from "./Article";
import AddBlog from "./Addblog";
import Post from "./Post";
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/addBlog" component={AddBlog}></Route>
            <Route path="/article" component={Article}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/posts/:id" component={Post} Redirect={Home}></Route>
            <Route path="/posts" component={Home}></Route>
            <Route path="/" component={LandingPage}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
