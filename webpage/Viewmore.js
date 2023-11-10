import React, { useState } from 'react';
import './Home.css'; 
import Components from './Components';
import { Link } from 'react-router-dom'
import LoginForm from './Login';
import ProfilePage from './Profile';
import InputBoxComponent from './Home';




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
      <Components/>
      
     
    
      <Link to="/Login">
      <ul>
      <li className='LogSig'>Login/Signup</li>
      </ul>
        
      </Link>
      
      
      <div className='Container3'>
        <div className='item'>
          <img src="shoe.jpg" className="shoe" alt="Shoe 1" />
          <p><b>Nike</b></p>
          <p>$22</p>
          <p>60% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe2.jpg" className="shoe" alt="Shoe 2" />
          <p><b>Reebok</b></p>
          <p>$15</p>
          <p>90% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe3.jpg" className="shoe" alt="Shoe 3" />
          <p><b>Adidas</b></p>
          <p>$20</p>
          <p>45% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe.jpg" className="shoe" alt="Shoe 1" />
          <p><b>Nike</b></p>
          <p>$22</p>
          <p>60% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe2.jpg" className="shoe" alt="Shoe 2" />
          <p><b>Reebok</b></p>
          <p>$15</p>
          <p>90% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe3.jpg" className="shoe" alt="Shoe 3" />
          <p><b>Adidas</b></p>
          <p>$20</p>
          <p>45% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe.jpg" className="shoe" alt="Shoe 1" />
          <p><b>Nike</b></p>
          <p>$22</p>
          <p>60% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe2.jpg" className="shoe" alt="Shoe 2" />
          <p><b>Reebok</b></p>
          <p>$15</p>
          <p>90% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe2.jpg" className="shoe" alt="Shoe 2" />
          <p><b>Reebok</b></p>
          <p>$15</p>
          <p>90% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe3.jpg" className="shoe" alt="Shoe 3" />
          <p><b>Adidas</b></p>
          <p>$20</p>
          <p>45% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe.jpg" className="shoe" alt="Shoe 1" />
          <p><b>Nike</b></p>
          <p>$22</p>
          <p>60% off</p>
          <button>Buy</button>
        </div>
        <div className='item'>
          <img src="shoe2.jpg" className="shoe" alt="Shoe 2" />
          <p><b>Reebok</b></p>
          <p>$15</p>
          <p>90% off</p>
          <button>Buy</button>
        </div>
        
      </div>
     
      
      

      <div className="searchBox3">

      <input
       className="searchInput3" type="text" name="" placeholder="Search"/>
      <button className="searchButton3" href="#">
      <i className="material-icons">
              GO
          </i>
      </button>
      </div>
   

    </div>




  );
}

export default Viewmore;
