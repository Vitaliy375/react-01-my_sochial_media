import React from 'react'
import mp from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
	debugger
	return (
		<div>
			<textarea></textarea>
			<button>Add post</button>

			<div className={mp.posts}></div>
			<Post massage='Hi, how are you?' likecount='15' dislikecount='2' />
			<Post massage='It`s my first post' likecount='20' dislikecount='1' />
		</div>
	)
}

export default MyPosts
