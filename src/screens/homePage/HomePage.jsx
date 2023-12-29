import React, { useEffect, useState } from 'react'
import './HomePageStyle.css';
import Footer from '../../assets/components/Footer/Footer';
import Header from '../../assets/components/Header.jsx/Header';
import Restaurant from '../../assets/components/Restaurant/Restaurant.JSX';
import axios from 'axios'
import MainTitle from '../../assets/components/MainTitle/MainTitle';

const HomePage = () => {

  const [restaurants,setRestaurants] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const res = await axios.get('http://10.1.1.100:5000/api/restaurant/');
        setRestaurants(res.data)
      } catch (error) {
        console.log(error)
      }  
    }
    fetchData();
    
  },[])

  console.log(restaurants)

  return (
    <div className="wrapper">
      <Header username='Dashuev I'/>

        <main className="home_main">
            <MainTitle title='Рестораны'/>

            {(restaurants.length != 0) ?
            (
              restaurants.map((el) => (
                <Restaurant key={el.id}
                id={el.id}
                title={el.title}
                description={el.description}
                image={`http://10.1.1.100:5000/${el.img}`}
                />
              ))
            ) :
            (
              <p>Загрузка</p>
            )}

            
        </main>

      <Footer/>
    </div>
  )
}

export default HomePage