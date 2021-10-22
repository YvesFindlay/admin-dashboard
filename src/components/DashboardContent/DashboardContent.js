import React from "react";

import Button from "../../components/Button/Button";

import "./DashboardContent.scss";

import Statistics from "../Statistics/Statistics";

const DashboardContent = () => {
  return (
    <div className="content">
      <header>
        <div className="content__title-wrapper">
          <label htmlFor="menu-toggle">
            <span className="las la-bars"></span>
          </label>
          <div className="content__title">
            <h1>Summary</h1>
            <p>
              This weekly summary report is as follows:{" "}
              <span className="las la-bell"> </span>{" "}
            </p>
          </div>
        </div>
        <div className="content__button">
          <Button content="Upload" />
        </div>
      </header>
      <Statistics />
    </div>
  );
};

export default DashboardContent;
