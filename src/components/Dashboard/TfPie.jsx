import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const PieChart = ({ data }) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "pie",
      toolbar: { show: false },
      background: "transparent",
      height: 300,
      width: 500
    },
    labels: ["True", "False"],
    colors: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
    legend: {
      position: "right"
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -25
        }
      }
    }
  });

  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    let tr = 0;
    let fa = 0;
    data.forEach(item => {
      if (item.t_RESULT === "TRUE") {
        tr += 1;
      } else {
        fa += 1;
      }
    });

    setChartSeries([tr, fa]);
  }, [data]);

  return <Chart options={chartOptions} series={chartSeries} type="pie" width={300} />;
};

export default PieChart;
