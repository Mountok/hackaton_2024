import {React, useEffect} from 'react'
import './FooterStyle.css'
import {SlBasket} from 'react-icons/sl'
import {AiOutlineHome, AiOutlineProfile, AiOutlineSetting} from 'react-icons/ai'
import { useLocation, Link } from 'react-router-dom';


const Footer = () => {
    const location = useLocation();
  return (
    <footer className='footer'>
        <Link to='/basket'> 
            <SlBasket className={(location.pathname==='/basket')?'ico active':'ico'} />
        </Link>

        <Link to='/settings'>
            <AiOutlineSetting  className={(location.pathname==='/settings')?'ico active':'ico'} />
        </Link>
        
        <Link to='/home'>
            <AiOutlineHome className={(location.pathname==='/home')?'ico active':'ico'}/>
        </Link>

        <Link to='/profile'>
            <AiOutlineProfile className={(location.pathname==='/profile')?'ico active':'ico'}/>
        </Link>

    </footer>   
  )
}

export default Footer