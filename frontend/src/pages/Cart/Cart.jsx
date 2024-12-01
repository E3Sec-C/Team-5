 dev2
import React,{useContext} from 'react'


import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'; 
import "./Cart.css"
 main

const Cart = () => {

    const{cartItems,food_list,removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                  if (cartItems[item._id] > 0) {
                      return (
                          <div key={item._id}>
                              <div className="cart-items-title cart-items-item">
                                  <img src={item.image} alt="" />
                                  <p>{item.name}</p>
                                  <p>${item.price}</p>
                                  <p>{cartItems[item._id]}</p>
                                  <p>${item.price * cartItems[item._id]}</p>
                                  <p onClick={() => removeFromCart(item._id)} className="cart-remove">Delete</p>
                              </div>
                              <hr />
                          </div>
                      );
                  }
                })}
              </div>
              <div className="cart-bottom">
                <div className="cart-total">
                  <h2>Cart Totals</h2>
                  <div>
                    <div className="cart-total-details">
                      <p>Subtotal</p>
                      <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                      <p>Delivery Fee</p>
                      <p>${2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                      <b>Total</b>
                      <p>${getTotalCartAmount()+2}</p>
                    </div>
                  </div>
                  <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="div-cart-promocode">
                    <div>
                        <p>If you have a promocode, enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Cart