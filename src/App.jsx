import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from './screens/loadingPage/loadingPage.jsx'
import HomePage from './screens/homePage/HomePage.jsx'
import SettingsPage from './screens/settingsPage/settingsPage.jsx'
import MenuPage from './screens/menuPage/menuPage.jsx'
import LoginPage from './screens/loginPage/LoginPage.jsx'
import QRPage from './screens/QRPage/QRPage.jsx'
import BasketPage from './screens/basketPage/BasketPage.jsx'
import ProfileMenu from './screens/profileMenu/profileMenu.jsx'
import RezervPage from './screens/rezervPage/RezervPage.jsx'
import QRInfo from './screens/QRPage/QRInfo.jsx'
import ContactsPage from './screens/Contacts/ContactsPage.jsx'

function App() {

  return (
    <Routes>
        <Route path='/' element={<LoadingPage/>}/>

        <Route path='/login' element={<LoginPage/>}/>

        <Route path='/home' element={<HomePage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/profile' element={<ProfileMenu/>} />
        <Route path='/qr_generate' element={<QRPage/>}/>
        <Route path='/qr_info' element={<QRInfo/>}/>
        <Route path='/rezerv' element={<RezervPage/>} />
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>


    </Routes>
  )
}

export default App
