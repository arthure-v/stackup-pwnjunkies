import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import RegisterForm from './Register';
import Components from "./Components"
import Navbar from './Navbar';
import Footer from './Footer';

function LoginForm() {
  return (
    <div>
      
        <Navbar />
        <div>

        <form className='Login-Form'>
          <h3>Login</h3>

          <label className='Login-Label' htmlFor="Email">Email</label>
          <input className="Login-Input" type="text" placeholder="Email" id="Email" />

          <label className='Login-Label' htmlFor="password">Password</label>
          <input className="Login-Input" type="password" placeholder="Password" id="password" />
          <Link to="/">
            <button className="Login-Register-Button">Log In</button>
          </Link>
          <Link to="/Register">
            <button className="Login-Register-Button">
              Register
            </button>
          </Link>
        </form>
        </div>
        <footer className="footer-login">
      <div className="footer-down">
        <p>&copy; 2023 Giftex. All rights reserved.</p>
      </div>
    </footer>
        
      </div>
    

   
  
  );
}

export default LoginForm;
