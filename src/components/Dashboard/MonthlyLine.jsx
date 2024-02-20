import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const MonthlyLine = ({ date, inData, outData }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate();
    const labels = Array.from({ length: lastDay }, (_, index) => index + 1);
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "이번 달 입고량",
              data: fillData(inData, labels),
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderWidth: 1,
            },
            {
              label: "이번 달 출고량",
              data: fillData(outData, labels),
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
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
  }, [date, inData, outData]);

  const fillData = (data, labels) => {
    const monthData = new Array(labels.length).fill(0);
    data.forEach((item) => {
      const day = new Date(item.s_DATE).getDate();
      const index = labels.indexOf(day);
      if (index !== -1) {
        monthData[index] += item.s_COUNTS;
      }
    });
    return monthData;
  };

  return <canvas ref={chartRef} />;
};

export default MonthlyLine;
