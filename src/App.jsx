import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from './screens/loadingPage/loadingPage'
import HomePage from './screens/homePage/HomePage'
import SettingsPage from './screens/settingsPage/settingsPage'
import MenuPage from './screens/menuPage/menuPage'
import LoginPage from './screens/loginPage/LoginPage'
import QRPage from './screens/QRPage/QRPage'
import BasketPage from './screens/basketPage/BasketPage'
import ProfileMenu from './screens/profileMenu/profileMenu'
import RezervPage from './screens/rezervPage/RezervPage'
import QRInfo from './screens/QRPage/QRInfo'

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


    </Routes>
  )
}

export default App
