import React, { useEffect, useState } from 'react'
import Header from '../../assets/components/Header.jsx/Header'
import Footer from '../../assets/components/Footer/Footer'
import BasketItem from '../../assets/components/BasketItem/BasketItem';
import MainTitle from '../../assets/components/MainTitle/MainTitle';
import './BasketPageStyle.css'
const BasketPage = () => {
    const  [isCredit,setIdCredit] = useState(false)
    const [currentBasket, setCurrentBasket] = useState([]);
    const [payMoney,setPayMoney] = useState(0)

    useEffect(()=>{
        let summa = 0;
        setCurrentBasket(JSON.parse(localStorage.getItem('swipe_user_basket')))

        JSON.parse(localStorage.getItem('swipe_user_basket')).forEach(element => {
          summa+= Number(element.price);
        });
        setPayMoney(summa)
    },[localStorage.getItem('swipe_user_basket')])

    const deleteItem = () => {
      setCurrentBasket([]);
      localStorage.setItem('swipe_user_basket','[]');
      
    }

    console.log(currentBasket);
    console.log(payMoney)
  return (
    <div className="wrapper">
      <Header username='корзина'/>
      {(!isCredit) ? (
         <main className="backet_main">
         <MainTitle title='Корзина'/> 
         {(currentBasket.length!=0) ? ( <button onClick={deleteItem} className='delete_btn'>Очистить все</button> )
         : (null)}
         {(currentBasket.length != 0) ? (
           currentBasket.map((el,index) => 
             (<BasketItem key={index}
             title={el.title} 
             price={el.price}
             id={el.id}
             menu_id={el.menu_id}
             image={el.image}/>)
           )
         ) : (
           <p>Корзина пуста</p>
         )}

         <div className="basket_btn">
           <div onClick={()=>{setIdCredit(!isCredit)}} className="pay_btn">
             <p>Оплатить</p>
             <p>{payMoney}</p>
           </div>
           <div className="pay_send_btn">
             <p>Подарить</p>
           </div>
         </div>
       </main>
      ) : (
        <form className="credit-card">
          <div className="form-header">
            <h4 className="title">Оплата кредитной картой</h4>
          </div>
 
  <div className="form-body">
    <input type="text" className="card-number" placeholder="Card Number"/>
 
    <div className="date-field">
      <div className="month">
        <select name="Month">
          <option value="january">Январь</option>
          <option value="february">Февраль</option>
          <option value="march">Март</option>
          <option value="april">Апрель</option>
          <option value="may">Май</option>
          <option value="june">Июнь</option>
          <option value="july">Июль</option>
          <option value="august">Август</option>
          <option value="september">Сентябрь</option>
          <option value="october">Октябрь</option>
          <option value="november">Ноябрь</option>
          <option value="december">Декабрь</option>
        </select>
      </div>
      <div className="year">
        <select name="Year">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
 
    <div className="card-verification">
      <div className="cvv-input">
        <input type="text" placeholder="CVV" />
      </div>
      <div className="cvv-details">
        <p>На полосе для подписи обычно встречаются 3 или 4 цифры.</p>
      </div>
    </div>
 
    <button onClick={(e)=>{
      e.preventDefault()
      setIdCredit(!isCredit)
      }}  className="proceed-btn"><a href="#">Оплатить</a></button>
  </div>
</form>
      )}
       

      <Footer/>
    </div>
  )
}

export default BasketPage