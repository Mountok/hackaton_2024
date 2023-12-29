import React from "react";
import { IoAddCircle } from "react-icons/io5";
import "./MenuItemStyle.css";
const MenuItem = ({ title, price, image, id, menu_id }) => {

  const handleClick = () => {
    const basket = JSON.parse(localStorage.getItem('swipe_user_basket'));

    const item = {
        id,
        menu_id,
        image,
        price,
        title
    };
    basket.push(item);
    localStorage.setItem('swipe_user_basket',JSON.stringify(basket))
    console.log(basket);
    
  }
  return (
    <section className="menu_item">
      <div className="preview">
        <div className="menu_image">
          <img src={`http://10.1.1.100:5000/${image}`} alt="" />
        </div>
        <p>{title}</p>
      </div>
      <div className="info">
        <div onClick={handleClick}  className="add_to_baket_btn">
          <p><span>{price}</span>₽</p>
          <IoAddCircle className="baket_btn"/>  
        </div>
        
      </div>
    </section>
  );
};

export default MenuItem;
