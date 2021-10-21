import React from "react";

import Button from "../../components/Button/Button";

import "./DashboardContent.scss";

const DashboardContent = () => {
  return (
    <div className="content">
      <header>
        <div className="content__title">
          <label htmlFor="">
            <span className="las la-bars"></span>
          </label>
          <div>
            <h1>Analytics</h1>
            <p>
              Display analytics about your channel{" "}
              <span className="las la-chart-line"> </span>{" "}
            </p>
          </div>
        </div>
        <Button content="Upload" />
      </header>
    </div>
  );
};

export default DashboardContent;
