import React from 'react'
import Etap1Table from './Etap1Table'
import classes from "../Styles.module.scss"
import GoBack from '../../GoBack/GoBack'
const Etap1 = (props) => {

  return (
    <div className={classes.EtapContainer}>
        <GoBack />
        <Etap1Table is1 IOR={props.IOR1} setIOR={props.setIOR1} />
        <Etap1Table is2 IOR={props.IOR2} setIOR={props.setIOR2}/>
    </div>
  )
}

export default Etap1
