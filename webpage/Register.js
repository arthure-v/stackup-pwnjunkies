import React from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
import Components from './Components';
import Termscondition from './Termscondition';


function RegisterForm() {
    return (
      <div>
        <Components />
        <div className="wrapper1" style={{ backgroundImage: "url('images/bg-registration-form-2.jpg')" }}>
          <div className="inner">
            <form action="" className='register_form'>
              <h4 className="Registername"align="center">Registration Form</h4>
              <div className="form-group-reg">
                <div className="form-wrapper">
                  <label>First Name</label>
                  <input type="text" className="form-control-reg" />
                </div>
                <div className="form-wrapper">
                  <label>Last Name</label>
                  <input type="text" className="form-control-reg" />
                </div>
              </div>
              <div className="form-wrapper">
                <label>Email</label>
                <input type="text" className="form-control-reg" />
              </div>
              <div className="form-wrapper">
                <label>Password</label>
                <input type="password" className="form-control-reg" />
              </div>
              <div className="form-wrapper">
                <label>Confirm Password</label>
                <input type="password" className="form-control-reg" />
              </div>
              <div></div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> I accept the <Link to="/Termscondition"> Terms of Use & Privacy Policy.</Link>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div/> 
   
              <Link to="/Login"> 
                <button>Register Now</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default RegisterForm;