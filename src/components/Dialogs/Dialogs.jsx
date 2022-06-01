import React from "react"
import s from "./Dialogs.module.css"

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.DialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Саша</div>
        <div className={s.dialog}>Валя</div>
        <div className={s.dialog}>Таня</div>
        <div className={s.dialog}>Коля</div>
        <div className={s.dialog}>Женя</div>
        <div className={s.dialog}>Ваня</div>
        <div className={s.dialog}>Зоя</div>
        <div className={s.dialog}>Вита</div>
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
