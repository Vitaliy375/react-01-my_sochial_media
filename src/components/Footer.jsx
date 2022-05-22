import React from 'react'
import './Footer.css'
import c_css from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={c_css.footer}>
			<button>
				<a>Menu</a>
			</button>
			<button>
				<a>Handoff</a>
			</button>
			<button>
				<a>No coments</a>
			</button>
		</footer>
	)
}

export default Footer
