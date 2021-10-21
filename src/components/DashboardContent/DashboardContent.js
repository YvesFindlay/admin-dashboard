import React from "react";

import Button from "../../components/Button/Button";

import "./DashboardContent.scss";

import Statistics from "../Statistics/Statistics";

const DashboardContent = () => {
  return (
    <div className="content">
      <header>
        <div className="content__title-wrapper">
          <label htmlFor="">
            <span className="las la-bars"></span>
          </label>
          <div className="content__title">
            <h1>Analytics</h1>
            <p>
              Display analytics about your channel{" "}
              <span className="las la-chart-line"> </span>{" "}
            </p>
          </div>
        </div>
        <Button content="Upload" />
      </header>
      <Statistics />
    </div>
  );
};

export default DashboardContent;
