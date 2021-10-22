import React from "react";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__img-container">
        <img
          className="profile__img"
          src="undraw_profile_pic_ic5t 1.jpg"
          alt="Profile"
        />
      </div>
      <div className="profile__content">
        <div className="profile__text">
          <h4>Yves Findlay</h4>
          <small>373839389</small>
        </div>
      </div>
    </div>
  );
};

export default Profile;
