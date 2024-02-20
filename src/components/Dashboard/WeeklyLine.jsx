import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const WeeklyLine = ({ dataIn, dataOut }) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-line",
      toolbar: { show: false },
      background: "transparent",
      height: 300,
      width: 500
    },
    xaxis: {
      categories: ["일", "월", "화", "수", "목", "금", "토"],
      labels: { 
        show: true
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 300,
      tickAmount: 10
    },
    stroke: { curve: "smooth", width: 4 },
    fill: {
      type: "gradient",
      gradient: { gradientToColors: ["blue"], stops: [0, 100] },
    },
    tooltip: {
      y: { formatter: (value) => `${value}묶음` },
    },
  });

  const [chartSeries, setChartSeries] = useState([]);

  const fillData = (data) => {
    const filledData = [];
    for (let i = 0; i < 7; i++) {
      filledData.push(data && data[i] ? data[i] : 0);
    }
    return filledData;
  };

  useEffect(() => {
    setChartSeries([
      {
        name: "이번 주 입고량",
        data: fillData(dataIn),
        markers: {
          colors: "blue"
        }
      },
      {
        name: "이번 주 출고량",
        data: fillData(dataOut),
        markers: {
          colors: "red"
        }
      }
    ]);
  }, [dataIn, dataOut]);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      width={300}
    />
  );
};

export default WeeklyLine;
