import React, { useState } from 'react';
import './Register.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    country: '',
    state: '',
    district: '',
    building_name: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div>
      <Navbar/>
    <div className="Register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-form">
          <label htmlFor="first_name">First Name:</label>
          <input className='Register-input'
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="last_name">Last Name:</label>
          <input className='Register-input'
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="email">Email:</label>
          <input className='Register-input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="password">Password:</label>
          <input className='Register-input'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input className='Register-input'
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="phone_number">Phone Number:</label>
          <input className='Register-input'
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="country">Country:</label>
          <input className='Register-input'
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="state">State:</label>
          <input className='Register-input'
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="district">District:</label>
          <input className='Register-input'
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="building_name">Building Name:</label>
          <input className='Register-input'
            type="text"
            id="building_name"
            name="building_name"
            value={formData.building_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="register-form">
          <label htmlFor="pincode">Pincode:</label>
          <input className='Register-input'
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
      <Link to="/Login">
        <div className="register-submit-form">
          <button className="Register-submit-button" type="submit">Register</button>
        </div>
                
      </Link> 
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default RegisterForm;




