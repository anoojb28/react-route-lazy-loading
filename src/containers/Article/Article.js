import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import "./Article.css";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Article extends Component {
  state = { auth: true };
  render() {
    return (
      <div className="Article">
        <header>
          <ul>
            <li>
              <NavLink exact to="/posts/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true",
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>

        <Switch>
          {this.state.auth ? <Route path="/posts/" component={Posts} /> : null}
          <Route path="/new-post" component={AsyncNewPost} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Article;
