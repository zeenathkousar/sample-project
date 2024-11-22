import React, { useState,useContext} from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowlogin,showLogin}) => {
    const [Menuvar, setMenu] = useState('Home');
    const {getTotalCartAmount}=useContext(StoreContext);


    return (
        <div className='navbar'>
            <img id='logo' src={assets.logo} alt="logo1craving" />

            <ul className='navbar-menu'>

                <Link to='/' onClick={() => setMenu('Home')} className={Menuvar === 'Home' ? "active" : ""} >Home</Link>

                <a href='#ex-menu' onClick={() => setMenu('Menu')}
                    className={Menuvar === 'Menu' ? "active" : ""} >Menu</a>

                <a href='#app-download' onClick={() => setMenu('MobileApp')} className={Menuvar === 'MobileApp' ? "active" : ""}>MobileApp</a>


                <a href='#footer' onClick={() => setMenu('Contact')} className={Menuvar === 'Contact' ? "active" : ""}>Contact</a>

                {/* <li onClick={() => setMenu('Cart')} className={Menuvar === 'Cart' ? "active" : ""}>Cart</li> */}

            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />

                <div className="navbar-search-icon">
                  <Link to='/cart'>
                  <img src={assets.basket_icon} alt="basket icon" />
                  </Link>  
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}>

                    </div>

                </div>
                <button onClick={()=>setShowlogin(true)} >Sign in</button>
            </div>



        </div>
    )
}

export default Navbar
