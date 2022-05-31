import React from "react"
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
  return (
    <div>
      <div className={s.img}>
        <img src="https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div className={s.profile}>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
