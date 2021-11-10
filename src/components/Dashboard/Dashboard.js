import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Dashboard.module.scss'

const Dashboard = (props) => {

  const history = useHistory()
  
  return (
    <div className={classes.Dashboard}>
      <h1 className="mb-4">Лабораторна робота з аналізу вимог програмного забезпечення №5</h1>
      <h2 className="my-4">Виконав: студент групи ПЗ-36 <b>Перожак Віталій</b></h2>
      <div className="container d-flex justify-content-between my-5">
        <button type="button" className="btn btn-info fs-4 py-2 px-3" onClick={() => history.push(`${process.env.PUBLIC_URL}/etap-1`)}>Ідентифікація ризиків</button>
        <button type="button" className="btn btn-info fs-4 py-2 px-3" onClick={() => history.push(`${process.env.PUBLIC_URL}/etap-2-1`)}>Аналіз ризиків</button>
        <button type="button" className="btn btn-info fs-4 py-2 px-3" onClick={() => history.push(`${process.env.PUBLIC_URL}/etap-3`)}>Усунення ризиків</button>
        <button type="button" className="btn btn-info fs-4 py-2 px-3" onClick={() => history.push(`${process.env.PUBLIC_URL}/etap-4-1`)}>Моніторинг ризиків</button>
      </div>
    </div>
  )
}

export default Dashboard
