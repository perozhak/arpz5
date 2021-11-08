import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Dashboard.module.scss'

const Dashboard = (props) => {

  const history = useHistory()
  
  return (
    <div className={classes.Dashboard}>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-primary" onClick={() => history.push("/etap-1")}>Етап 1</button>
        <button type="button" className="btn btn-primary" onClick={() => history.push("/etap-2-1")}>Етап 2</button>
        <button type="button" className="btn btn-primary" onClick={() => history.push("/etap-3")}>Етап 3</button>
        <button type="button" className="btn btn-primary" onClick={() => history.push("/etap-4-1")}>Етап 4</button>
      </div>
    </div>
  )
}

export default Dashboard
