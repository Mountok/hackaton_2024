import React from 'react'
import './MainTitleStyle.css'
const MainTitle = ({title}) => {
  return (
    <div className='main_title'>
        <p>{title}</p>
    </div>
  )
}

export default MainTitle