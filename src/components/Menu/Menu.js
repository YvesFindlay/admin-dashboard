import React from "react";

import MenuItem from "../MenuItem/MenuItem";

import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <MenuItem name="Account" icon="las las la-user" />
        <MenuItem name="Dashboard" icon="las la-adjust" active={true} />
        <MenuItem name="Services" icon="la la-exchange-alt" />
        <MenuItem name="Analytics" icon="las la-chart-bar" />
        <MenuItem name="Settings" icon="las la-tools" />
      </ul>
    </div>
  );
};

export default Menu;
