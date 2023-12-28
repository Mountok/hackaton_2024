import React from 'react'
import './HeaderStyle.css'
import { FaCircleUser } from "react-icons/fa6";
import { TbShoppingCartStar } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = ({username}) => {
  return (
    <header className="header">
        <div className="profile_card">
          <Link to='/profile'>
          <FaCircleUser className='profile_icons'/>
          </Link>
        </div>

        <div className="rating">
          <p>100 <TbShoppingCartStar className='rating_start' /></p>
        </div>


        <div className="progress_bar"></div>
    </header>
  )
}

export default Header