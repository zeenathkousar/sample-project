import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navi=useNavigate();
  const { food_list, cartItems, removeFromCart,getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='cart'>
      <div className='cart-items'>
        <div >
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs.{item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
                  </div>
                  <hr />
                </div>

              )
            }





          })}


        </div>

        <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>{getTotalCartAmount()}</p>


            </div>
            <div className="cart-total-detials">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-total-details">
              <p><b>Total</b></p>
              <b>{getTotalCartAmount()+2}</b>


            </div>



          </div>

          <Link to='/orders'>
          <button>Proceed to Checkout</button>
          </Link>       

           </div>
      </div>

      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, please Enter it here</p>
          <div className='cart-promocode-input'>
              <input type="text" placeholder='Promocode' />
              <button>Submit</button>
          </div>
        </div>
        </div>
        <br />
        <hr />
      </div>
    </div>


  )
}

export default Cart
