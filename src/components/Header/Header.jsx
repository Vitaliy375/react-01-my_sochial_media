import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3-Kgm4UxjGPB1pmG2CnRKKmNIHDi2SQh6w&usqp=CAU' />
      <p>Комфортные походы на любой вкус!</p>
    </header>
  )
}

export default Header
