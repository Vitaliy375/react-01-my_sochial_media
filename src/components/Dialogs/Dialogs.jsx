import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.DialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Саша</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Валя</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Таня</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Коля</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Женя</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Ваня</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/7">Зоя</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/8">Вита</NavLink>
        </div>
      </div>
      <div className={s.masseges}>
        <div className={s.massege}>Красиво жить не запретишь!</div>
        <div className={s.massege}>Красиво </div>
        <div className={s.massege}>Красиво жить </div>
        <div className={s.massege}>Красиво жить не </div>
        <div className={s.massege}>запретишь!</div>
        <div className={s.massege}>не запретишь!</div>
        <div className={s.massege}>жить не запретишь!</div>
        <div className={s.massege}>Красиво жить не запретишь!</div>
        <div className={s.massege}>жить Красиво не запретишь!</div>
      </div>
    </div>
  )
}

export default Dialogs
