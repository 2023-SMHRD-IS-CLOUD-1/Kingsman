import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const BarChart = ({data}) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["True","False"],
          datasets: [
            {
              label: "# of Votes",
              data: [15, 20],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
               
              ],
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

  return < canvas ref={chartRef} />;
};

export default BarChart;