import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import DashboardContent from "./components/DashboardContent/DashboardContent";

import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <input type="checkbox" name="" id="menu-toggle"></input>
        <div className="overlay">
          <label htmlFor="menu-toggle">
            <span className="las la-ca"></span>
          </label>
        </div>
        <Sidebar />
        <DashboardContent />{" "}
      </div>
    </React.Fragment>
  );
};

export default App;
