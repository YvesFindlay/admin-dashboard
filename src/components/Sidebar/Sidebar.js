import React from "react";

import Profile from "../Profile/Profile";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="brand">
          <h3>
            <span>
              {" "}
              <i class="lab la-staylinked"></i>
              Company 1
            </span>
          </h3>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Sidebar;
