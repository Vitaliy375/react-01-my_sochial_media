import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  return (
    <div className={s.post}>
      <h3>My post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={s.posts}></div>
      <Post massage="Hi, how are you?" likesCount="15" dislikesCount="2" />
      <Post massage="It`s my first post" likesCount="20" dislikesCount="1" />
    </div>
  )
}

export default MyPosts
