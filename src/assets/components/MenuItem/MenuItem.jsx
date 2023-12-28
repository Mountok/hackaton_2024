import React from "react";
import { IoAddCircle } from "react-icons/io5";
import "./MenuItemStyle.css";
const MenuItem = ({ title, price, image, id, menu_id }) => {

  const handleClick = () => {
    
    console.log({
      menu_id: menu_id,
      id: id,
    })
  }
  return (
    <section className="menu_item">
      <div className="preview">
        <div className="menu_image">
          <img src={`http://localhost:5000/${image}`} alt="" />
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
