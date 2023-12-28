import React from 'react';
import './RestaurantStyle.css';
import {Link} from 'react-router-dom'


const Restaurant = ({id,title,description,image}) => {
  const menulink = `/menu?id=${id}`
  return (
    <section className='restaurant'>
        <div className="image">
            <img src={image} alt="ooops" />
        </div>
        <div className="info">
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <Link className='button' to={menulink}>Открыть меню</Link>
        </div>
    </section>
  )
}

export default Restaurant