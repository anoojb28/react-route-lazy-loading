import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import { Route, Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      var posts = response.data.slice(0, 4);
      var updatedPosts = posts.map((post) => {
        return { ...post, author: "Anooj" };
      });
      this.setState({ posts: updatedPosts });
    });
  }
  postSelectHandler(id) {
    this.props.history.push("/posts/" + id);
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => {
              this.postSelectHandler(post.id);
            }}
          ></Post>
        </Link>
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
