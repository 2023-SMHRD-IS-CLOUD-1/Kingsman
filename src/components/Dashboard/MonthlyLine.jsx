import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

const MonthlyLine = ({data}) => {
  const chartRef = useRef(null);
  let chartInstance = null;


  useEffect(() => {
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate();
    const newArray = Array.from({ length: lastDay}, (_, index) => index + 1);
    const ctx = chartRef.current.getContext("2d");
    const createChart = () => {

      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: newArray,
          datasets: [
            {
              label: "# of Votes",
              data: newArray,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive:false,
          scales: {
          
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };

    destroyChart(); // 기존 차트 파괴
    createChart(); // 새로운 차트 생성

    return () => {
      destroyChart(); // 컴포넌트가 unmount될 때 차트 파괴
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default MonthlyLine;