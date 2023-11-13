import React, { useState } from 'react';
import './Productview.css'; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Productview = () => {
  const [selectedPrice, setSelectedPrice] = useState('$19.99');
  const [quantity, setQuantity] = useState(1);

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    // Add your logic to add the product to the cart
    console.log('Product added to cart:', {
      selectedPrice,
      quantity,
    });
  };

  return (
    <div>
      <Navbar/>
  
    <div className="product-view-container">
      <div className="product-details">
        <img src="https://m.media-amazon.com/images/I/5196eeIHMYL._AC_UF1000,1000_QL80_.jpg" alt="Product" className="product-image" />
        <div className="product-info">
          <h1 className='Product-Name'>Gift Card</h1>
          <p>Unlock exclusive savings and surprises with our Gift Card Coupons – your ticket to a world of discounts and delights!</p>
        </div>
      </div>

      <div className="price-selection">
        <h3 className='Price-Select-heading'>Choose Price</h3>
        <form>
          <label htmlFor="priceSelection">Select a Price:</label>
   
          <select id="priceSelection" onChange={handlePriceChange} value={selectedPrice}>
            <option value="$19.99">$19.99</option>
            <option value="$29.99">$29.99</option>
            <option value="$39.99">$39.99</option>
          </select>

        </form>
        <h2 id="selectedPrice">Selected Price: {selectedPrice}</h2>

        <div className="quantity-selection">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      <div className='addtocartsection'>
        <Link to="/Cart">
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
          </Link>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Productview;
