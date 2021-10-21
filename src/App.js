import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import DashboardContent from "./components/DashboardContent/DashboardContent";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <input type="checkbox" name="" id="menu-toggle" />
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default App;
