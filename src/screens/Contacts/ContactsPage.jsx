import React from 'react'
import Footer from '../../assets/components/Footer/Footer'
import './ContactsStyle.css'
const ContactsPage = () => {
  return (
    <div className="wrapper">
        <div className="contacts_main">
            <div className="faq">
                <div className="faq_title">Связаться с поддержкой</div>
                <div className="faq_btn">
                    <button>Позвонить</button>
                    <button>Написать в чат</button>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default ContactsPage