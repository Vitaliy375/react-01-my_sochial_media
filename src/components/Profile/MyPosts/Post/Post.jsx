import React from 'react'
import mp from './Post.module.css'

const Post = props => {
	return (
		<div className={mp.item}>
			<img src='https://cspromogame.ru//storage/upload_images/avatars/4169.jpg' />
			{props.massage}
			<div>
				<span>like{props.likecount}</span>
			</div>
			<div>
				<span>dislike{props.dislikecount}</span>
			</div>
		</div>
	)
}

export default Post
