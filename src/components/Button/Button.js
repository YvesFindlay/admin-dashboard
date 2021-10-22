import React from "react";

import "./Button.scss";

const Button = ({ content }) => {
  return (
    <div className="button__container">
      <button className="button button--main">
        <span className="las la-video" />
        {content}
      </button>
    </div>
  );
};

export default Button;
