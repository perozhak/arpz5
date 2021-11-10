import React from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../img/arrow-left.svg'

const GoBack = () => {

  const history = useHistory()

  return (
     <div onClick={() => history.push(`${process.env.PUBLIC_URL}/`)} style={{color: '#61dafb', cursor: 'pointer'}} className="fs-3 mx-2">
        <Arrow style={{color: '#61dafb', width: '30px', height: '30px'}}/> Назад
      </div>
  )
}

export default GoBack
