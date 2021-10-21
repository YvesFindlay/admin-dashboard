import React from "react";

import "./SidebarCard.scss";

const SidebarCard = () => {
  return (
    <div className="card">
      <div className="card__icon">
        <span className="lab la-codiepie"></span>
      </div>
      <div>
        <h4>Make Adsense</h4>
        <p>Add adds to your videos to earn money</p>
        <button className="button button--main button--block">
          Create now
        </button>
      </div>
    </div>
  );
};

export default SidebarCard;
