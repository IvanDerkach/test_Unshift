import React from 'react';
import {Post} from "../Post/Post.jsx";
import "./MainSection.css";

export class MainSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postText: "",
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://bloggy-api.herokuapp.com/posts")
      .then((response) => {
        return response.json()
      }).then((loadedPosts) => {
      this.setState({posts: loadedPosts})
    });
  }



  render() {
    return (
      <div className="posts">
        {this.state.posts && this.state.posts.map((post, i) => {
          return (
            <Post
              key={i}
              title={post.title}
              body={post.body}
              />
          );
        })}
      </div>
    )
  }

}


