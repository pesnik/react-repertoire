import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: this.state.title,
      body: this.state.body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="body"></label>
            <br />
            <textarea
              name="body"
              id=""
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
