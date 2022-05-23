import React from 'react'
import profile from './Profile.module.css'

const Profile = () => {
	return (
		<div className={profile.img}>
			<img src='https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
			<div>ava + description</div>
			<div className={profile.content}>
				My posts
				<div className={profile.item}>New post</div>
				<div className={profile.item}>Post 1</div>
				<div className={profile.item}>Post 2</div>
			</div>
		</div>
	)
}

export default Profile
