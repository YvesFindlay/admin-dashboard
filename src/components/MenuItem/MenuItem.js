import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ name, icon, active }) => {
  return (
    <li>
      <a className={`${active && `active`}`} href="/">
        <span className={icon}></span>
        <span>{name}</span>
      </a>
    </li>
  );
};

export default MenuItem;
