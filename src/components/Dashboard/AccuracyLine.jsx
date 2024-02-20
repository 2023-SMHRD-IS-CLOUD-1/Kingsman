import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const AccuracyLine = ({ date, data }) => {
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "accuracy-line",
      toolbar: { show: false },
      background: "transparent",
      height: 300,
      width: 500
    },
    xaxis: {
      categories: Array.from({ length: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() }, (_, index) => index + 1),
      labels: { 
        show: true,
        offsetY: -8,
        style: {
          fontSize: '6px'
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
    stroke: { curve: "smooth", width: 1 },
    colors: ["#546E7A"], // 라인 색상 지정
    tooltip: {
      y: { formatter: (value) => `${value}%` } // 툴팁에 % 추가
    },
  });

  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    const monthData = Array.from({ length: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() }, (_, index) => {
      let sum = 0;
      let count = 0;
      data.forEach(item => {
        if (index + 1 === new Date(item.t_DATE).getDate()) {
          count += 1;
          sum += item.t_ACCURACY;
        }
      });
      return count === 0 ? 0 : Math.floor(sum / count);
    });

    setChartSeries([
      {
        name: "일별 평균 신뢰도",
        data: monthData,
      }
    ]);
  }, [date, data]);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      width={300}
    />
  );
};

export default AccuracyLine;
