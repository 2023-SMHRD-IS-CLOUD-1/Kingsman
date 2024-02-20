import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";



const WeeklyLine =  ({ dataIn, dataOut }) => {
  const chartRef = useRef(null);
  let chartInstance = null;
  
  useEffect(() => {
    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    
      const ctx = chartRef.current.getContext("2d");
      Chart.register(...registerables); // 여기에 추가
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["일", "월", "화", "수", "목", "금", "토"],
          datasets: [
            {
              label: "이번 주 입고량",
              data: fillData(dataIn),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "이번 주 출고량",
              data: fillData(dataOut),
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 500,
            },
          },
        },
      });
    };
    

    createChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };
  }, [dataIn, dataOut]);

  const fillData = (data) => {
    const filledData = [];
    for (let i = 0; i < 7; i++) {
      filledData.push(data && data[i] ? data[i] : 0);
    }
    return filledData;
  };

  return <canvas ref={chartRef} />;
};

export default WeeklyLine;