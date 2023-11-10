import React from 'react'
import Components from './Components';
import "./Cart.css";
import Hline from './Hline';
import{ useState } from 'react';

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
      <Components/>
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
          <h3 className="bold">{item.quantity}</h3>
          <h3 className="bold">${item.price * item.quantity}</h3>
        </div>
      ))}
      <div className="cart-button">
        <button>Proceed to Checkout</button>
        <button>Buy More</button>
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default Cart;
