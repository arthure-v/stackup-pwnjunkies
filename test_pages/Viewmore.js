import React, { useState } from 'react';
import './Home.css'; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import LoginForm from './Login';
import ProfilePage from './Profile';
import Home from './Home';




function Viewmore() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Do something with the inputValue, e.g., send it to an API or update the state.
  
 };

  return (
    <div>
      
      <Navbar/>
      
      
      
      <div className='Container-Home'>
        <div className='items'>
          <img src="https://gamerxcodes.com/wp-content/uploads/2022/03/fortnite-2800-v-bucks-gift-card.jpg" className="item" alt="Shoe 1" />
          <p><b>Gift-card</b></p>
          <p>$22</p>
          <p>60% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/51pP3q5whJL.jpg" className="item" alt="Shoe 2" />
          <p><b>Gift-card</b></p>
          <p>$15</p>
          <p>90% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://gamerxcodes.com/wp-content/uploads/2022/03/fortnite-2800-v-bucks-gift-card.jpg" className="item" alt="Shoe 3" />
          <p><b>Gift-card</b></p>
          <p>$20</p>
          <p>45% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/51pP3q5whJL.jpg" className="item" alt="Shoe 1" />
          <p><b>Gift-card</b></p>
          <p>$22</p>
          <p>60% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://gamerxcodes.com/wp-content/uploads/2022/03/fortnite-2800-v-bucks-gift-card.jpg" className="item" alt="Shoe 2" />
          <p><b>Gift-card</b></p>
          <p>$15</p>
          <p>90% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/51pP3q5whJL.jpg" className="item" alt="Shoe 3" />
          <p><b>Gift-card</b></p>
          <p>$20</p>
          <p>45% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://gamerxcodes.com/wp-content/uploads/2022/03/fortnite-2800-v-bucks-gift-card.jpg" className="item" alt="Shoe 1" />
          <p><b>Gift-card</b></p>
          <p>$22</p>
          <p>60% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        <div className='items'>
          <img src="https://m.media-amazon.com/images/I/51pP3q5whJL.jpg" className="item" alt="Shoe 2" />
          <p><b>Gift-card</b></p>
          <p>$15</p>
          <p>90% off</p>
          <Link to="/Productview">
          <button className='Buy-Button'>Buy</button>
          </Link> 
        </div>
        
      </div>
      
    </div>




  );
}

export default Viewmore;
