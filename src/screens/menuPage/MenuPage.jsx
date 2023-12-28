import React, { useEffect, useState } from 'react'
import Footer from '../../assets/components/Footer/Footer';
import Header from '../../assets/components/Header.jsx/Header';
import { useLocation } from 'react-router-dom';
import MenuItem from '../../assets/components/MenuItem/MenuItem';
import './menuPageStyle.css';

import axios from 'axios';

const MenuPage = () => {

   
    // const [restaurantId,setRestaurantId] = useState(0);
    
    const [menuList, setMenuList] = useState([]);
    const location = useLocation();
    

    useEffect(()=>{
        let restaurantId = location.search.split('=')[1];
        console.log(restaurantId)
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000/api/menu?menu_id=${restaurantId}`);
          setMenuList(res.data)
        }
        fetchData()

    },[])
    console.log(menuList)
  return (
    <div className="wrapper">
      <Header username='Dashuev I'/>

        <main className="menu_main">
            {
                (menuList.length == 0)? (
                    <p>Загрузка меню</p>
                ) : (
                    menuList.map(el => 
                        (<MenuItem key={el.id} title={el.title} 
                        price={el.price}
                        id={el.rest_id}
                        image={el.img}/>)
                    )
                )
            }
            
        </main>

      <Footer/>
    </div>
  )
}

export default MenuPage