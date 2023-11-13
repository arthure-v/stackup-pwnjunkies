import React from 'react'
import { Link } from 'react-router-dom'

function Components() {
  return (
    <div>

<div className="navbar">
      
      <div className="mainlogo">
      <div className="searchBox3">

<input
 className="searchInput3" type="text" name="" placeholder="Search"/>
<button className="searchButton3" href="#">
<i className="material-icons">
        GO
    </i>
</button>
</div>
<navbar/>
      <div class="mainpage">
       <h1 className="Headingmain">GIFTEX</h1>
      <img src="Giftex.png" className="iconsss" alt="Logo" />
      </div>
      <div className="wrapper">
      <Link to="/">
        <img src="homeicon.jpg" className="iconss" alt="Icon 2" />
      </Link>
      <Link to="/Cart">
        <img src="cart.jpg" className="iconss" alt="Icon 3" />
      </Link>
      <Link to="/Profile">
        <img src="profile.jpg" className="iconss" alt="Icon 4" />
      </Link>
      
      </div>
      </div>
      </div>

    </div>
  )
}

export default Components;

