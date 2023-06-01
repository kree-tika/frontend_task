import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = [
      "2021-07-11",
      "2021-07-12",
      "2021-07-13",
      "2021-07-14",
      "2021-07-15",
      "2021-07-16",
      "2021-07-17",
    ];
    const data = [53, 42, 88, 14, 77, 68, 43];

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Sanitizer Sales",
            data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default SalesChart;
