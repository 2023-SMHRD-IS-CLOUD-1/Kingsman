import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "bar-chart",
      toolbar: { show: false },
      background: "transparent",
      height: 300,
      width: 500
    },
    xaxis: {
      categories: ["True", "False"],
      labels: { 
        show: true
      }
    },
    yaxis: {
      min: 0,
      max: 10,
      tickAmount: 5
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded"
      }
    },
    colors: ["#2196F3", "#FF5722"], // 막대 색상 설정
    tooltip: {
      y: { formatter: (value) => `${value}` } // 툴팁 포맷 설정
    }
  });

  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    setChartSeries([{ data }]);
  }, [data]);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      width={300}
    />
  );
};

export default BarChart;
