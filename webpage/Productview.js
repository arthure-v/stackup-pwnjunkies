import React, { useState } from 'react';
import './Productview.css'; // Make sure to import your CSS file

function ProductView() {
  const [selectedPrice, setSelectedPrice] = useState('$19.99');

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container1">
            <h3>Product View</h3>
            <img src="shoe3.jpg" alt="Product Image" />
            <div className="product-details">
              <h2 className="product-title">Product Name</h2>
              <p className="product-description">
                Product description goes here. You can provide details about the product.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container2">
            <h3>Select a Price</h3>
            <form>
              <label htmlFor="priceSelection">Select a Price:</label>
              <select id="priceSelection" onChange={handlePriceChange} value={selectedPrice}>
                <option value="$19.99">$19.99</option>
                <option value="$29.99">$29.99</option>
                <option value="$39.99">$39.99</option>
              </select>
            </form>
            <h2 id="selectedPrice">Selected Price: {selectedPrice}</h2>

            <button className="Addtocart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
