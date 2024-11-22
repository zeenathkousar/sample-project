import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Orders from './pages/Orders/Orders'
import Menu from './pages/Menu/Menu'
import Footer from './components/Footer/Footer'
import SigninPopup from './components/SigninPopup/SigninPopup'

const App = () => {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <>
      {showLogin ? <SigninPopup setShowlogin={setShowlogin} /> : <></>}

      <div className='appclass'>

        <Navbar setShowlogin={setShowlogin} showLogin={showLogin} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
        </Routes>

      </div>
      <Footer />

    </>
  )
}

export default App
