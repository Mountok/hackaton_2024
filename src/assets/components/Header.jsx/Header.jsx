import React, { useState } from 'react'
import './HeaderStyle.css'
import { FaCircleUser } from "react-icons/fa6";
import { TbShoppingCartStar } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = ({username}) => {
  const [userImage,setUserImage] = useState(localStorage.getItem('swipe_user_image'))
  return (
    <header className="header">
        <div className="profile_card">
          <Link className='profile_icons' to='/profile' >
            <img src={`http://10.1.1.100:5000/${userImage}`} alt="" />
          {/* <FaCircleUser className='profile_icons'/> */}
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