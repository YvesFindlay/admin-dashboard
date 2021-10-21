import React from "react";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__img-container">
        <img className="profile__img" src="logo192.png" alt="Profile" />
      </div>
      <div className="profile__content">
        <div className="profile__text">
          <h4>Ralph Anderson</h4>
          <small>1029-3344-444</small>
        </div>
        <span className="las la-angle-double-down" />
      </div>
    </div>
  );
};

export default Profile;
