import {React, useEffect} from 'react'
import './FooterStyle.css'
import {SlBasket} from 'react-icons/sl'
import {AiOutlineHome, AiOutlineProfile, AiOutlineSetting} from 'react-icons/ai'

import {FaPizzaSlice, FaBasketShopping,FaMessage} from 'react-icons/fa6'
import {BsMegaphoneFill} from 'react-icons/bs'
import { useLocation, Link } from 'react-router-dom';


const Footer = () => {
    const location = useLocation();
  return (
    <footer className='footer'>
        <Link className={(location.pathname==='/basket')?'active_link':'link_btn'}   to='/basket'> 
            <FaBasketShopping className={(location.pathname==='/basket')?'ico active':'ico'} />
            Корзина
        </Link>

        
        <Link className={(location.pathname==='/home')?'active_link':'link_btn'}  to='/home'>
            <FaPizzaSlice className={(location.pathname==='/home')?'ico active':'ico'}/>
            Домой
        </Link>

        <Link className={(location.pathname==='/profile')?'active_link ':'link_btn'}  to='/profile'>
            <BsMegaphoneFill className={(location.pathname==='/profile')?'ico active':'ico'}/>
            Контакты
        </Link>

    </footer>   
  )
}

export default Footer