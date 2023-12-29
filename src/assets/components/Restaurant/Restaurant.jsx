import React from 'react';
import './RestaurantStyle.css';
import {Link} from 'react-router-dom'


const Restaurant = ({id,title,description,image}) => {
  const menulink = `/menu?id=${id}`
  const rezervlink = `/rezerv?id=${id}`
  return (
    <section className='restaurant'>
        <div className="image">
            <img src={image} alt="ooops" />
        </div>
        <div className="info">
            <p className='title'>{title}</p>
            {/* <p className='description'>{description}</p> */}
            <div>
            <Link className='button' to={menulink}>Открыть меню</Link>
            <Link className='button' to={rezervlink}> Бронь стола </Link>

            </div>
        </div>
    </section>
  )
}

export default Restaurant