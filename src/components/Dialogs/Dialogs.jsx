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
  let dialogs = [
    { id: '1', name: 'Саша' },
    { id: '2', name: 'Валя' },
    { id: '3', name: 'Таня' },
    { id: '4', name: 'Коля' },
    { id: '5', name: 'Женя' },
    { id: '6', name: 'Ваня' },
    { id: '7', name: 'Зоя' },
    { id: '8', name: 'Вита' },
  ]

  let masseges = [
    { text: 'Красиво жить не запретишь!' },
    { text: 'Красиво не запретишь!' },
    { text: 'Красиво жить запретишь!' },
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let massegesElements = masseges.map(m => <Massege text={m.text} />)

  return (
    <div className={s.dialogs}>
      <div className={s.DialogsItems}>{dialogsElements}</div>
      <div className={s.masseges}>{massegesElements}</div>
    </div>
  )
}

export default Dialogs
