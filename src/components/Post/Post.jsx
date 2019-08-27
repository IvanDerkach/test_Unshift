import React from 'react';
import "./Post.css"
import {UpdateModal} from "../UpdateModal/UpdateModal.jsx";

export function Post(props) {
  return (
    <div className='Post'>

      <div className="Post__title">{props.title}</div>
      <div className="Post__text">{props.body}</div>
      <UpdateModal/>
      <div className='Post__footer'>

        <button>Comment</button>
        <button>Delete</button>
      </div>

    </div>
  )

}
