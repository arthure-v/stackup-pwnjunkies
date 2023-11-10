import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import RegisterForm from './Register';
import Components from "./Components"

/*function LoginForm() {
  const htmlContenti = `
    <div class="background">
   
    </div>
    <form>
      <h3>Login</h3>

      <label for="Email">Email</label>
      <input type="text" placeholder="Email" id="email">

      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password">

      <button class="LogReg">Log In</button>
      <Link to="/Register">
      <button class="LogReg">
      Register <i class="fas fa-user-plus"></i>
    </button>
      </Link>
      
    </form>
  `;

  return (
    <div>
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: htmlContenti }} />
    </div>
  );
}

export default LoginForm;
import React from 'react';
import Nav from './Nav';
import './Login.css';
import { Link } from 'react-router-dom';*/

function LoginForm() {
  return (
    <div>
      <Components />
      <div className="background"></div>
      <form>
        <h3>Login</h3>

        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Email" id="Email" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <Link to="/">
        <button className="LogReg">Log In</button>
        </Link>
        <Link to="/Register">
          <button className="LogReg">
            Register <i className="fas fa-user-plus"></i>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
