import React from "react";

import Statistic from "./Statistic";

import "./Statistics.scss";

const Statistics = () => {
  return (
    <main>
      <div className="statistics">
        <Statistic
          icon="las la-eye"
          subHeading="Total views"
          num="20.6M"
          hasSmall={false}
          statisticClassName="first-child"
        />
        <Statistic
          icon="las la-clock"
          subHeading="Watch Time (hrs)"
          num="50.8k"
          hasSmall={true}
          smallClassName="text-danger"
          smallText="5%"
          statisticClassName="second-child"
        />
        <Statistic
          icon="las la-users"
          subHeading="Subscribers"
          num="30.8k"
          hasSmall={true}
          smallClassName="text-success"
          smallText="12%"
          statisticClassName="third-child"
        />
        <Statistic
          icon="las la-users"
          subHeading="Total Likes"
          num="5.6M"
          hasSmall={false}
          statisticClassName="fourth-child"
        />
      </div>
    </main>
  );
};

export default Statistics;
