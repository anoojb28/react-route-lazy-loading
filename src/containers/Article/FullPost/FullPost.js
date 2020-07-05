import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    postLoaded: null,
  };
  componentWillMount() {
    this.loadData();
  }
  componentDidUpdate() {
    this.loadData();
  }
  loadData() {
    if (
      !this.state.postLoaded ||
      (this.state.postLoaded &&
        this.state.postLoaded.id !== +this.props.match.params.id)
    ) {
      if (this.props.match.params.id) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" +
              this.props.match.params.id
          )
          .then((response) => {
            this.setState({ postLoaded: response.data });
          });
      }
    }
  }
  deletePostHandler(id) {
    axios
      .delete(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.props.match.params.id
      )
      .then((response) => {
        console.log(response);
      });
  }
  render() {
    let post = <p className="selectPost">Please select a Post!</p>;
    if (this.props.id) {
      post = <p className="selectPost">Loading ..........!</p>;
    }
    if (this.state.postLoaded) {
      post = (
        <div className="FullPost">
          <h1>{this.state.postLoaded.title}</h1>
          <p>{this.state.postLoaded.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.deletePostHandler(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
