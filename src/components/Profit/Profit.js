import React from "react";

import "./Profit.scss";

const Profit = () => {
  return (
    <section className="profit__container">
      <div className="profit">
        <div className="profit__card">
          <h3 className="profit__header">Total Profit</h3>
          <div className="profit__card-content">
            <img src="logo192.png" width="100%"></img>
            <div className="profit__info">
              <h3>Yves Findlay</h3>
              <h1>
                5M <small>Susbcribers</small>
              </h1>
            </div>
            <div className="profit__sum">
              <h4>Total income</h4>
              <h2>£200,600</h2>
            </div>
          </div>
        </div>
      </div>
      {/* here */}
    </section>
  );
};

export default Profit;
