import React from 'react'
import './BasketItemStyle.css'
const BasketItem = ({ title, price, image, id, menu_id }) => {

  return (
    <section className="basket_item">
      <div className="preview">
        <div className="basket_image">
          <img src={`http://10.1.1.100:5000/${image}`} alt="" />
        </div>
      </div>
      <div className="info">
        <div>
        <p>{title}</p>
            <p><span>{price}</span>₽</p>
        </div>
        <div>
            <p>Удалить</p>
        </div>
        
      </div>
    </section>
  )
}

export default BasketItem