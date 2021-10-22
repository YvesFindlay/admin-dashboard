import React from "react";

import Graph from "../Graph/Graph";

import "./Profit.scss";

const Profit = () => {
  return (
    <>
      <section className="profit__container">
        <div className="profit">
          <div className="profit__card">
            <h3 className="section-header">Total Profit</h3>
            <div className="profit__card-content">
              <img src="undraw_profile_pic_ic5t 1.jpg" width="100%"></img>
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
        <Graph />
      </section>
    </>
  );
};

export default Profit;
