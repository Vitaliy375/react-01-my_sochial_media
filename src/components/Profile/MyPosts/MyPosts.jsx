import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postsData = [
    { id: 1, text: 'Hi, how are you?', likesCount: '15', dislike: '3' },
    { id: 2, text: 'It`s my first post', likesCount: '20', dislike: '2' },
  ]

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
      <Post
        massage={postsData[0].text}
        likesCount={postsData[0].likesCount}
        dislike={postsData[0].dislike}
      />
      <Post
        massage={postsData[1].text}
        likesCount={postsData[1].likesCount}
        dislike={postsData[1].dislike}
      />
    </div>
  )
}

export default MyPosts
