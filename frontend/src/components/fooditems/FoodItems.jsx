import React, { useReducer, useState,useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, image, price, description }) => {

    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)    

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="itemiamge" />

                {
                    !cartItems[id] ? <button className='add' onClick={()=>addToCart(id)}>Add</button>  :
                        <div className='food-item-counter'>
                            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img  onClick={()=>addToCart(id)}
                            src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>

                <p className='food-item-description'>{description}</p>
                <p className="food-item-price">${price}</p>

            </div>

        </div>


    )
}

export default FoodItem
