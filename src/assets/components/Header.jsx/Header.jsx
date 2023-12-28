import React from 'react'
import './HeaderStyle.css'
const Header = ({username}) => {
  return (
    <header className="header">
        <div className="profile_card">
            <div className="profile_logo"></div>
            <p>{username}</p>
        </div>

        
    </header>
  )
}

export default Header