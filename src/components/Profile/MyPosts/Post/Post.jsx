import React from 'react'
import mp from './Post.module.css'

const Post = props => {
	return (
		<div className={mp.item}>
			<img src='https://cspromogame.ru//storage/upload_images/avatars/4169.jpg' />
			{props.massage}
			<div>
				<span>like:{props.likesCount}</span>
			</div>
			<div>
				<span>dislike:{props.dislikesCount}</span>
			</div>
		</div>
	)
}

export default Post
