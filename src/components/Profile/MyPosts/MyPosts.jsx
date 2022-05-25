import React from 'react'
import mp from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div>
			<textarea></textarea>
			<button>Add post</button>

			<div className={mp.posts}></div>
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default MyPosts
