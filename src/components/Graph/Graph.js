import React, { useEffect } from "react";

import Chart from "chart.js/auto";

import "./Graph.scss";

const Graph = () => {
  useEffect(() => {
    Chart.defaults.font.family = "Open Sans";
    let ctx = document.getElementById("revenue-graph");

    Chart.defaults.color = ctx.style.backgroundColor = window
      .getComputedStyle(document.body)
      .getPropertyValue("--text-primary");

    ctx.style.backgroundColor = window
      .getComputedStyle(document.body)
      .getPropertyValue("--color-bg-primary");

    const profitChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan 1",
          "Jan 3",
          "Jan 5",
          "Jan 7",
          "Jan 9",
          "Jan 11",
          "Jan 13",
          "Jan 15",
          "Jan 17",
          "Jan 19",
          "Jan 21",
          "Jan 23",
        ],
        datasets: [
          {
            borderColor: "#6883db",
            borderWidth: 3,
            backgroundColor: "#6883db",
            data: [0, 30, 60, 22, 41, 70, 19, 50, 16, 40, 89],
            label: "Views",
          },
          {
            borderColor: "#2ec3a3",
            borderWidth: 3,
            backgroundColor: "#2ec3a3",
            data: [0, 10, 10, 22, 41, 50, 19, 80, 67, 12, 39, 96],
            label: "Watch time",
          },
        ],
      },
      options: {
        responsive: true,
        tooltips: {
          intersect: false,
          node: "index",
        },
      },
    });
  });

  return (
    <div className="graph">
      <h3 className="section-header">Weekly report</h3>
      <div className="graph__content">
        <div className="graph__header">
          <div className="graph__icon-wrapper">
            <div className="graph__icon">
              <span className="las la-eye text-primary views" />
            </div>
            <div className="graph__icon">
              <span className=" las la-clock text-success watch-time" />
            </div>
          </div>
          <div className="graph__select">
            <select name="">
              <option value="">January</option>
            </select>
          </div>
        </div>
        <div className="graph__canvas">
          <canvas id="revenue-graph" width="100%" height="51px"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Graph;
