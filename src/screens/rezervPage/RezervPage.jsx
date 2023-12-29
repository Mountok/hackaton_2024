import React, { useEffect, useState } from 'react'
import './RezervPageStyle.css'
import Header from '../../assets/components/Header.jsx/Header'
import MainTitle from '../../assets/components/MainTitle/MainTitle'
import Footer from '../../assets/components/Footer/Footer'

import axios from 'axios'
import { useLocation } from 'react-router-dom'

const RezervPage = () => {
    const [currentRest,setCurrentRest] = useState([]);

    const location = useLocation();
    
    
    useEffect(()=>{
        let restaurantId = location.search.split('=')[1];
        const fetchData = async () => {
            const res = await axios.get(`http://10.1.1.100:5000/api/restaurant/rest?id=${restaurantId}`);
            setCurrentRest(res.data)
        }
        fetchData();
    },[])

  return (
    <div className="wrapper">
      <Header username='корзина'/>
    
    <main className="backet_main">
        <form className="rezerv-card">
          <div className="form-header">
            <h4 className="title">Бронирование в {currentRest.title}</h4>
          </div>
 
        <div className="form-body">
        <input type="text" className="card-number" placeholder="ФИО"/>
 
        <div className="date-field">
          <div className="month">
            <select name="Month">
            
            <option value="0">Кол. человек</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            </select>
        </div>
        <div className="year">
            <select name="Year">
            <option value="0">№ стола</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            </select>
            <select name="Time">
            <option value="0">Время</option>
            <option value="1">10:00</option>
            <option value="2">11:00</option>
            <option value="3">12:00</option>
            <option value="4">13:00</option>
            <option value="5">14:00</option>
            <option value="6">15:00</option>
            <option value="7">16:00</option>
            <option value="8">17:00</option>
            <option value="9">18:00</option>
            <option value="10">19:00</option>
            <option value="11">20:00</option>
            <option value="12">21:00</option>
            <option value="13">22:00</option>
            </select>
        </div>
        </div>
 
        <div className="card-verification">
        <div className="cvv-input">
            <input type="date"  />
        </div>
        <div className="details">
            <p>Выберите дату для бронирования</p>
        </div>
        </div>
 
        <button className="proceed-btn">Бронь</button>
        </div>
        </form>
    </main>


      <Footer/>
    </div>
  )
}

export default RezervPage