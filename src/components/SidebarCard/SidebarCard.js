import React from "react";

import "./SidebarCard.scss";

const SidebarCard = () => {
  return (
    <div className="card">
      <div className="card__icon">
        <span className="la la-shield"></span>
      </div>
      <div>
        <h4>Go Premium!</h4>
        <p>Get additional insight into your audience</p>
        <button className="button button--main button--block">
          Create now
        </button>
      </div>
    </div>
  );
};

export default SidebarCard;
