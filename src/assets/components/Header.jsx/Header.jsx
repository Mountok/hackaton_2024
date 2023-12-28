import React from 'react'
import './HeaderStyle.css'
import { FaCircleUser } from "react-icons/fa6";

const Header = ({username}) => {
  return (
    <header className="header">
        <div className="profile_card">
          <FaCircleUser className='profile_icons'/>
        </div>

        
    </header>
  )
}

export default Header