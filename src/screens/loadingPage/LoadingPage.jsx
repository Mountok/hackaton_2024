import React from 'react'
import './LoadingPageStyle.css'
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
    const navigate = useNavigate();
    
    setTimeout(()=>{
        navigate('/login')
    },3000)

  return (
    <div className="wrapper_loading">
        <div className="logo">
            <img width='100px'   src="/svgs/logo.svg" alt="" />
        </div>
        <div className="loading">
        <AiOutlineLoading className='load'/>
        </div>
    </div>
 )
}

export default LoadingPage