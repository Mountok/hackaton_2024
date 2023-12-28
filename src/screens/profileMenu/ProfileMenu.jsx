import React, { useEffect, useState } from 'react'
import Header from '../../assets/components/Header.jsx/Header'
import Footer from '../../assets/components/Footer/Footer'
import './profileMenuStyle.css'
import { TbShoppingCartStar } from "react-icons/tb";
import MainTitle from '../../assets/components/MainTitle/MainTitle';

const ProfileMenu = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    useEffect(()=>{
        setName(localStorage.getItem('swipe_user_name'));
        setEmail(localStorage.getItem('swipe_user_email'));
    })
  return (
    <div className="wrapper">
        <div className="profile_main">

        <div className="profile">
            <img className="profile-image" src="/userlogo.jpg" alt="Profile Image"/>
            <h1 className="profile-name">{name}</h1>
            <p className="profile-description">{email}</p>
            <p className='rating'> 100 <TbShoppingCartStar /></p>
        </div>
        
        <MainTitle title='Отслеживание'/>
        



        </div>
        <Footer />
    </div>
  )
}

export default ProfileMenu