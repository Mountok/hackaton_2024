import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import './qrPageStyle.css'


const QRInfo = () => {
    const [currentArmor, setCurrentArmor] = useState([])
    const location = useLocation()
    useEffect(()=>{
        let armor_id = location.search.split('=')[1];
        const fetchData = async() => {
            const res = await axios.get(`http://10.1.1.100:5000/api/armor/one?id=${armor_id}`);
            setCurrentArmor(res.data)
        };
        fetchData()
    },[])
    console.log(currentArmor)
  return (
    <div className="qr_view">
        <p>Забронирован стол</p>

        <p>Заведение: <span>{currentArmor.restaurant}</span> </p>
        <p>Имя: <span>{currentArmor.owner}</span> </p> 
        <p>Почта: <span>{currentArmor.email}</span> </p>
        <p>Стол номер: <span>{currentArmor.place_number}</span> </p>
        <p>Дата: <span>{currentArmor.data}</span> , время <span>{currentArmor.time}</span> </p>
        <button onClick={()=>{alert('идет ремонт кнопки')}}>Подтвердить</button>
    </div>
  )
}

export default QRInfo