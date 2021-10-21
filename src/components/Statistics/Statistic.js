import React from "react";

import "./Statistic.scss";

const Statistic = ({
  icon,
  subHeading,
  num,
  hasSmall,
  smallText,
  smallClassName,
  statisticClassName,
}) => {
  let small = "";

  if (hasSmall) {
    small = <small className={smallClassName}>{smallText}</small>;
  }

  return (
    <div className="statistic">
      <div className={`statistic__icon ${statisticClassName}`}>
        <span className={icon}></span>
      </div>
      <div className="statistic__info">
        <h4>{subHeading}</h4>
        <h1>
          {`${num}`} {hasSmall && small}
        </h1>
      </div>
    </div>
  );
};

export default Statistic;
