import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import "./MenuItemStyle.css";
const MenuItem = ({ title, price, image, id }) => {
  return (
    <section className="menu_item">
      <div className="preview">
        <div className="menu_image">
          <img src={`http://localhost:5000/${image}`} alt="" />
        </div>
        <p>{title}</p>
      </div>
      <div className="info">
        <p><span>{price}</span>₽</p>
        <CiSquarePlus className="add_to_baket_btn"/>
      </div>
    </section>
  );
};

export default MenuItem;
