import React from 'react'
import mp from './MyPosts.module.css'

const MyPosts = () => {
	return (
		<div>
			<textarea></textarea>
			<button>Add post</button>
			<div>New post</div>
			<div className={mp.posts}>
				<div className={mp.item}>
					<img src='https://cspromogame.ru//storage/upload_images/avatars/4169.jpg' />
					Post 1
				</div>
				<div className={mp.item}>Post 2</div>
				<div className={mp.item}>Post 3</div>
				<div className={mp.item}>Post 4</div>
			</div>
		</div>
	)
}

export default MyPosts
