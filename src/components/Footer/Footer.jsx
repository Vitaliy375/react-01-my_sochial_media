import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
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
