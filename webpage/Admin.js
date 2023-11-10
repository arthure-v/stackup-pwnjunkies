import React, { Component } from 'react'
import Hline from './Hline'
import "./Admin.css"
import { Link } from 'react-router-dom';
import Components from './Components';

function Admin() {
  return (
    <div>

    <Components/>


<h2 className='Adminhead' align ="center">Admin Dashboard</h2>
<div className='AdminList'>
    <p className='Adminbold'>GroupId</p>
    <p className='Adminbold'>ProductId</p>
    <p className='Adminbold'>Price</p>
    <p className='Adminbold'>Discount</p>
    <p className='Adminbold'>Quantity</p>
</div>

<Hline/>
<div className='free'></div>
<Hline/>
<Link to="/">
<button className='AdmBtn'>Add item</button>
</Link>


    </div>
  )
}

export default Admin