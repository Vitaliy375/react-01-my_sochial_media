import React from 'react'
import mp from './Post.module.css'

const Post = () => {
	return (
		<div className={mp.item}>
			<img src='https://cspromogame.ru//storage/upload_images/avatars/4169.jpg' />
			Post 1
			<div>
				<span>like</span>
			</div>
			<div>
				<span>dislike</span>
			</div>
		</div>
	)
}

export default Post
