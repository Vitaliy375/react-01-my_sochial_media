import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let posts = [
    { id: 1, text: 'Hi, how are you?', likesCount: ' 15', dislikesCount: ' 3' },
    {
      id: 2,
      text: 'It`s my first post',
      likesCount: ' 20',
      dislikesCount: ' 2',
    },
  ]

  let postsElements = posts.map(p => (
    <Post
      massage={p.text}
      likesCount={p.likesCount}
      dislikesCount={p.dislikesCount}
    />
  ))

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
      {postsElements}
    </div>
  )
}

export default MyPosts
