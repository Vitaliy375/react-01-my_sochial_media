import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.img}>
        <img src="https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div className={s.profile}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
