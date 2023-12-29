import React, { useState } from 'react'
import { PiQrCodeBold } from "react-icons/pi";
import './HistoryItemStyle.css'
import { Link } from 'react-router-dom';
const HistoryItem = ({restaurant,date,time,id}) => {
    const [qrurl,setqrurl] = useState(`/qr_generate?id=${id}`)
  return (
    <section className="hestory_item">
        <div className="heatory_item_info">
            <p>Бронирование в {restaurant}</p>
            <p>дата: {date} {time}</p>
        </div>
        <div className="qr">
            <Link to={qrurl}><PiQrCodeBold /></Link>
            
        </div>
    </section>
  )
}

export default HistoryItem