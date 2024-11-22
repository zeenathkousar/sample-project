import React from 'react'
import { useState } from 'react'
import './SigninPopup.css'
import { assets } from '../../assets/assets'

const SigninPopup = ({setShowlogin}) => {

    const [currState, setCurrstate] = useState('Sign Up')

    return (
        <div className='loginpopup'>
            <form action="" className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img className='crossicon' onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
                    <div className="login-popup-inputs">

                        {currState === 'Sign Up' ? <input type="text" placeholder='Your name' required /> : <></>}


                        <input type="email" name="email" id="email" placeholder='Your Email' required />
                        <input type="password" name="password" id="password" placeholder='password' required />

                        <button>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>

                        {currState === 'Login' ?
                         <p>Create a new account?
                            <span onClick={() => setCurrstate('Sign Up')}>click here</span></p> :
                            <p>Already have an account?
                                <span onClick={() => setCurrstate('Login')}>Login here</span></p>
                        }

                    </div>
                </div>


            </form>

        </div>
    )
}

export default SigninPopup
