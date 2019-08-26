import React from 'react';
import "./Post.css"

export class Post extends React.Component {
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

  // updatePostText = postText => {
  //   this.setState({
  //     postText: postText
  //   });
  // };


  render() {
    return (
      <div className='Post'>

        <div className='Post__title'>Title</div>
        {this.posts && this.posts.map((post, i) => {
          return <div className="Post__text">`${[i].body}`</div>
        })}

        <div className='Post__footer'>
          <button className='updateBtn' id="updateBtn">Update</button>

          <button>Comment</button>
          <button>Delete</button>
        </div>

      </div>
    )
  }
}
