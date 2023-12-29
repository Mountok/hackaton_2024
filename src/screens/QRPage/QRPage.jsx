import React, { useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import Footer from '../../assets/components/Footer/Footer';
import MainTitle from '../../assets/components/MainTitle/MainTitle';
import { Link, useLocation } from 'react-router-dom';

import './qrPageStyle.css'

const QRPage = () => {
  const location = useLocation();
    const [armorId,setArmorId] = useState()

    useEffect(()=>{
        let restaurantId = location.search.split('=')[1];
        setArmorId(restaurantId)
    },[]);
    console.log(armorId)
  return (
    <div className="wrapper">
    <div className='qr_block'>
          <div style={{ height: "auto", margin: "0 auto", maxWidth:300, width: "100%" }}>
          <QRCode
          size={526}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`http://10.1.1.100:5173/qr_info?id=${armorId}`}
          viewBox={`0 0 256 256`}
          />
        </div>
    </div>
        



        <Footer />
    </div>

  )
}

export default QRPage