import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      
      <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-text">GIFTEX</span>
          <img src="Giftex.png" alt="Logo" className="logo-image" />
        </Link>
        <div className="Search-Box">

      <input
       className="Search-Input" type="text" name="" placeholder="Search"/>
      <button className="Search-Button" href="#">
              Search
            
      </button>
      </div>
   

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Cart" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/Profile" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          </li>
        </ul>
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
