// ProfileForm.js
import React, { useState } from 'react';
import './Profile.css';
import Navbar from './Navbar';

const Profile = () => {
  const [editMode, setEditMode] = useState({
    profile: false,
    billing: false,
  });

  const enableEditMode = (section) => {
    setEditMode({ ...editMode, [section]: true });
  };

  const saveChanges = (section) => {
    setEditMode({ ...editMode, [section]: false });
  };

  return (
    <div>
    <Navbar/>
    <div className="profile-body">
      
      <div className="profile-container">
        <div className="profile-section">
          <h2 className="personal-details-heading">Personal details</h2>

          <div className="form-group-profile">
            <label className="profile-label" htmlFor="email">
              Email:
            </label>
            <input
              className="profile-input"
              type="email"
              id="email"
              name="email"
              value="example@email.com"
              readOnly={!editMode.profile}
            />
          </div>
          <div className="form-group-profile">
            <label className="profile-label" htmlFor="password">
              Password:
            </label>
            <input
              className="profile-input"
              type="password"
              id="password"
              name="password"
              readOnly={!editMode.profile}
            />
          </div>
          <div className="form-group-profile">
            <label className="profile-label" htmlFor="phone">
              Phone Number:
            </label>
            <input
              className="profile-input"
              type="tel"
              id="phone"
              name="phone"
              readOnly={!editMode.profile}
            />
          </div>
          <button className="profile-button" onClick={() => enableEditMode('profile')}>
            Edit
          </button>
          <button
            className="profile-button"
            onClick={() => saveChanges('profile')}
            style={{ display: editMode.profile ? 'block' : 'none' }}
          >
            Save
          </button>
        </div>
        <div className="billing-section">
          <h2>Billing Address</h2>
          <div className="form-group-profile">
            <label className="profile-label" htmlFor="building">
              Building Name:
            </label>
            <input
              className="profile-input"
              type="text"
              id="building"
              name="building"
              value="Buliding Name"
              readOnly={!editMode.billing}
            />
          </div>
          <div className="form-group-profile">
            <label className="profile-label" htmlFor="district">
              District:
            </label>
            <input
              className="profile-input"
              type="text"
              id="district"
              name="district"
              value="District Name"
              readOnly={!editMode.billing}
            />
          </div>
          <div className="form-group-profile">
            <label className="profile-label" htmlFor="state">
              State:
            </label>
            <input
              className="profile-input"
              type="text"
              id="state"
              name="state"
              value=" State Name"
              readOnly={!editMode.billing}
            />
          </div>
          <div className="form-group-profile">
            <label className="profile-label" htmlFor="pincode">
              Pin Code:
            </label>
            <input
              className="profile-input"
              type="text"
              id="pincode"
              name="pincode"
              readOnly={!editMode.billing}
            />
          </div>
          <button className="profile-button" onClick={() => enableEditMode('billing')}>
            Edit
          </button>
          <button
            className="profile-button"
            onClick={() => saveChanges('billing')}
            style={{ display: editMode.billing ? 'block' : 'none' }}
          >
            Save
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
