import React from "react";

import MenuItem from "../MenuItem/MenuItem";

import "./Menu.scss";

const Menu = () => {
  return (
    // must add is active class
    <div className="menu">
      <ul>
        <MenuItem name="Account" icon="las las la-user" />
        <MenuItem name="Dashboard" icon="las la-adjust" active={true} />
        <MenuItem name="Videos" icon="las la-video" />
        <MenuItem name="Analytics" icon="las la-chart-bar" />
        <MenuItem name="Schedule" icon="las la-calendar" />
      </ul>
    </div>
  );
};

export default Menu;
