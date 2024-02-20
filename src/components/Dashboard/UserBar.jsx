import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data, user }) => {
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
      categories: user.map(item => item.b_NAME),
      labels: { 
        show: true,
        offsetY: -8,
        style: {
          fontSize: '8px'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%` 
      },
      min: 0,
      max: 100,
      tickAmount: 5
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded"
      }
    },
    colors: user.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`), // Random colors for each bar
    tooltip: {
      y: { formatter: (value) => `${value}%` } // Tooltip format
    }
  });

  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    const idSet = new Set(data.map(item => item.t_ID)); 
    const id = [...idSet];
    const datas = [];
    const names = [];

    id.forEach(item => {
      let sum = 0;
      let count = 0;
      data.forEach(item2 => {
        if(item === item2.t_ID){
          count += 1;
          sum += item2.t_ACCURACY;
        }
      })
      datas.push(Math.floor(sum/count));
      user.forEach(item2 => {
        if(item === item2.b_ID){
          names.push(item2.b_NAME);
        }
      })

    });

    setChartSeries([{ data: datas }]);
  }, [data, user]);

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
