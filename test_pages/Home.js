import React, { useState } from 'react';
import './Home.css';
import Components from './Components';
import { Link } from 'react-router-dom'
import LoginForm from './Login';
import ProfilePage from './Profile';
import Navbar from './Navbar';
import Footer from './Footer';




function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Do something with the inputValue, e.g., send it to an API or update the state.

  };

  return (
    <div>
      <Navbar />



      <div className='Container-Home'>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/5196eeIHMYL._AC_UF1000,1000_QL80_.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$22</p>
          <p>60% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307846668/JW/OI/RZ/70256004/valorant-gift-card-in-475-valorant-points.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$15</p>
          <p>90% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/5196eeIHMYL._AC_UF1000,1000_QL80_.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$20</p>
          <p>45% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307846668/JW/OI/RZ/70256004/valorant-gift-card-in-475-valorant-points.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$22</p>
          <p>60% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/5196eeIHMYL._AC_UF1000,1000_QL80_.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$15</p>
          <p>90% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307846668/JW/OI/RZ/70256004/valorant-gift-card-in-475-valorant-points.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$20</p>
          <p>45% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/5196eeIHMYL._AC_UF1000,1000_QL80_.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$22</p>
          <p>60% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>
        <div className='items'>
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307846668/JW/OI/RZ/70256004/valorant-gift-card-in-475-valorant-points.jpg" className="item" alt="Image" />
          <p><b>Gift-card</b></p>
          <p>$15</p>
          <p>90% off</p>
          <Link to="/Productview">
            <button className='Buy-Button'>Buy</button>
          </Link>
        </div>

      </div>
      <div className='Viewmore'>
        <Link to="/Viewmore">
          <button type='button' className='Viewmore-Button'>View more</button>
        </Link>

      </div>


    <Footer/>

    </div>




  );
}

export default Home;
