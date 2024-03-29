import React, { useEffect, useState } from 'react'
import Header from '../../assets/components/Header.jsx/Header'
import Footer from '../../assets/components/Footer/Footer'
import './profileMenuStyle.css'
import { TbShoppingCartStar } from "react-icons/tb";
import MainTitle from '../../assets/components/MainTitle/MainTitle';
import HistoryItem from '../../assets/components/HistoryItem/HistoryItem';
import axios from 'axios'
const ProfileMenu = () => {
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [email,setEmail] = useState('');
    const [armors, setArmors] = useState([])

    useEffect(()=>{

        setName(localStorage.getItem('swipe_user_name'));
        setEmail(localStorage.getItem('swipe_user_email'));
        setImage(localStorage.getItem('swipe_user_image'));

        const fetchData = async () => {
            const res  = await axios.get(`http://10.1.1.100:5000/api/armor/?email=${email}`);
            setArmors(res.data);
        }
        fetchData();

    })
  return (
    <div className="wrapper">
        <div className="profile_main">

        <div className="profile">
            <img width='100px' height='100px' className="profile-image" src={`http://10.1.1.100:5000/${image}`} alt="Profile Image"/>
            <h1 className="profile-name">{name}</h1>
            <p className="profile-description">{email}</p>
            <p className='rating'> 100 <TbShoppingCartStar /></p>
        </div>
        
        <MainTitle title='История'/>
            {(armors.length != 0)?(
                (armors.map((el) => (
                    <HistoryItem key={el.id} restaurant={el.restaurant} time={el.time} date={el.data} id={el.id}/>
                )))
            ):(
                <p>пусто</p>
            )}
        



        </div>
        <Footer />
    </div>
  )
}

export default ProfileMenu