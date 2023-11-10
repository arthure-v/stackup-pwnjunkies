import React, { useState } from 'react';
import './Profile.css';
import Components from './Components';

function Profile() {
  return (
    <div className="full-size">
    <Components/>
    <div/>
    <div>
    <div className="container">
      <div className="rowgutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src="./prof.jpg" alt="Profile" className="profileicon" width="300" height="400" />
                  </div>
                  <h5 className="user-name">Yuki Hayashi</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="mb-2 text-primary">Personal Details</h2>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter phone number" required />
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-left">
                      <button type="button" id="edit1" name="edit" className="btn btn-secondary">
                        Edit
                      </button>
                      <button type="button" id="save1" name="save" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="mt-3 mb-2 text-primary">Billing Address</h2>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Country">Country</label>
                    <input type="text" className="form-control" id="Country" placeholder="Enter Country" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="State">State</label>
                    <input type="text" className="form-control" id="State" placeholder="Enter State" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="District">District</label>
                    <input type="text" className="form-control" id="District" placeholder="Enter District" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Building name">Building<br/>Name</label>
                    <input type="text" className="form-control" id="Buildingname" placeholder="Enter Building name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Pin">Pin Code</label>
                    <input type="text" className="form-control" id="Pin" placeholder="Pin Code" />
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="button" id="edit2" name="edit" className="btn btn-secondary">
                        Edit
                      </button>
                      <button type="button" id="save2" name="save" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Profile;
