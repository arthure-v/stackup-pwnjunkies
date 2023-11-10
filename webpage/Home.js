import React, { useState } from 'react';
import './Home.css'; 
import Components from './Components';
import { Link } from 'react-router-dom'
import LoginForm from './Login';
import ProfilePage from './Profile';




function InputBoxComponent() {
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
        
      </div>
     <div className='Viewmore'>
     <Link to="/Login">
      
     <button type='button' id='Button11'>View more</button>
      </Link>
      
      </div>

      
   

    </div>




  );
}

export default InputBoxComponent;
