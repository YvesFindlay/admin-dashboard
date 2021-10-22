import React from "react";

import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
import SidebarCard from "../SidebarCard/SidebarCard";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__brand">
          <h2>
            <span>
              {" "}
              <i className="lab la-staylinked"></i>
            </span>
            Erronium
          </h2>
        </div>
        <Profile />
        <Menu />
        <SidebarCard />
      </div>
    </div>
  );
};

export default Sidebar;
