import React, { useEffect, useState } from 'react'
import Header from '../../assets/components/Header.jsx/Header'
import Footer from '../../assets/components/Footer/Footer'

const BasketPage = () => {
    const [currentBasket, setCurrentBasket] = useState([]);

    useEffect(()=>{
        setCurrentBasket(localStorage.getItem('swipe_user_basket'))
    },[])

    console.log(currentBasket)
  return (
    <div className="wrapper">
      <Header username='корзина'/>

        <main className="backet_main">
        
        </main>

      <Footer/>
    </div>
  )
}

export default BasketPage