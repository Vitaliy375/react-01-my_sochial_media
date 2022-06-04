import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = props => {
  let path = '/dialogs/' + props.id //
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div> // компонента
  )
}

const Massege = props => {
  //let path =
  return <div className={s.massege}>{props.text}</div>
}

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.DialogsItems}>
        <DialogItem name="Саша" id="1" />
        <DialogItem name="Валя" id="2" />
        <DialogItem name="Таня" id="3" />
        <DialogItem name="Коля" id="4" />
        <DialogItem name="Женя" id="5" />
        <DialogItem name="Ваня" id="6" />
        <DialogItem name="Зоя" id="7" />
        <DialogItem name="Вита" id="8" />
      </div>
      <div className={s.masseges}>
        <Massege text="Красиво жить не запретишь!" />
        <Massege text="Красиво" />
        <Massege text="Красиво жить" />
        <Massege text="Красиво жить не" />
        <Massege text="запретишь!" />
        <Massege text="не запретишь!" />
        <Massege text="жить не запретишь!" />
        <Massege text="жить Красиво не запретишь!" />
      </div>
    </div>
  )
}

export default Dialogs
