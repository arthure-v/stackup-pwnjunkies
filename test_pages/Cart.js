import React from 'react'
import "./Cart.css";
import Navbar from './Navbar';
import{ useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    // Add more items as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar/>
      <div className='Cart-Section'>
      <h1 className="Yourcartname">Your Cart</h1>
      <div className="List1">
        <h3 className="bold">Items</h3>
        <h3 className="bold">Price</h3>
        <h3 className="bold">Quantity</h3>
        <h3 className="bold">Total</h3>
      </div>
      {cartItems.map((item) => (
        <div className="List2" key={item.id}>
          <h4 className="bold">{item.name}</h4>
          <h3 className="bold">${item.price}</h3>
          <div className='Quantity-adjust'><h3 className="bold"><button className='Quantity-Button'>-</button>{item.quantity}<button className='Quantity-Button'>+</button></h3></div>
          <h3 className="bold">${item.price * item.quantity}</h3> 
        </div>
      ))}
      <div className="Cart-button-section">
      <Link to="">  <button className='Cart-button'>Proceed to Checkout</button> </Link> 
      <Link to="/Home">  <button className='Cart-button'>Buy More</button> </Link>
      </div>
      <div className="Cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
      
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
