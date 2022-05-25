import React from 'react'
import n_b from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={n_b.nav}>
			<div className={`${n_b.item} ${n_b.active}`}>
				<a>Profile</a>
			</div>
			<div className={n_b.item}>
				<a>Masseges</a>
			</div>
			<div className={n_b.item}>
				<a>News</a>
			</div>
			<div className={n_b.item}>
				<a>Music</a>
			</div>
			<div className={n_b.item}>
				<a>Setting</a>
			</div>
		</nav>
	)
}

export default Navbar
