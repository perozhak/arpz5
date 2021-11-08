import React from 'react'
import Etap1Table from './Etap1Table'

const Etap1 = (props) => {

  return (
    <>
        <button type="button" className="btn btn-secondary" onClick={() => props.history.goBack()}>BACK</button>
        <Etap1Table is1 IOR={props.IOR1} setIOR={props.setIOR1} />
        <Etap1Table is2 IOR={props.IOR2} setIOR={props.setIOR2}/>
    </>
  )
}

export default Etap1
