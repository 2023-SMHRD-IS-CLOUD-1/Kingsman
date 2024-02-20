import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const MonthlyLine = ({ date, inData, outData }) => {
  const generateLabels = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return Array.from({ length: lastDay }, (_, index) => index + 1);
  };

  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-line",
      toolbar: { show: false },
      background: "transparent",
      height: 300,
      width: 500
    },
    xaxis: {
      categories: generateLabels(date),
      labels: { 
        show: true,
        offsetY: -8,
        style: {
          fontSize: '6px'
        }
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: true,
      beginAtZero: true,
      min: 0,
      max: 300,
      tickAmount: 10,
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

  useEffect(() => {
    const inColor = "blue";
    const outColor = "red";
    const inSeries = {
      name: "이번 달 입고량",
      data: fillData(inData, date),
      color: inColor
    };
    const outSeries = {
      name: "이번 달 출고량",
      data: fillData(outData, date),
      color: outColor
    };
    setChartSeries([inSeries, outSeries]);
  }, [date, inData, outData]);

  const fillData = (data, date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const monthData = new Array(lastDay).fill(0);
    data.forEach((item) => {
      const day = new Date(item.s_DATE).getDate();
      const index = day - 1;
      if (index !== -1 && index < lastDay) {
        monthData[index] += item.s_COUNTS;
      }
    });
    return monthData;
  };

  return (
    <Chart
      options={chartOptions}
      series={chartSeries.map(series => ({...series, markers: { colors: series.color }}))}
      type="line"
      width={300}
    />
  );
};

export default MonthlyLine;
