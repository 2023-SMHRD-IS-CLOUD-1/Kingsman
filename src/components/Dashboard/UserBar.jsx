import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data, user }) => {
  const [userNames, setUserNames] = useState([]);
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    if (!data || !user) {
      console.log("데이터가 없습니다.");
      return;
    }

    const idSet = new Set(data.map(item => item.t_ID));
    const ids = [...idSet];
    console.log("IDs:", ids);

    const datas = ids.map(id => {
      const userData = user.find(userItem => userItem.b_ID === id);
      if (!userData) {
        console.log(`ID ${id}에 해당하는 사용자 데이터를 찾을 수 없습니다.`);
        return 0;
      }
      console.log(data)
      const relevantData = data.filter(dataItem => dataItem.t_ID === id);
      if (relevantData.length === 0) {
        console.log(`ID ${id}에 해당하는 데이터가 없습니다.`);
        return 0;
      }

      const accuracySum = relevantData.reduce((sum, dataItem) => sum + dataItem.t_ACCURACY, 0);
      const averageAccuracy = Math.floor(accuracySum / relevantData.length);
      return averageAccuracy;
    });

    setUserNames(ids.map(id => user.find(userItem => userItem.b_ID === id).b_NAME));
    setChartSeries([{ data: datas }]);
  }, [data, user]);

  const chartOptions = {
    chart: {
      id: "bar-chart",
      toolbar: { show: false },
      background: "transparent",
      height: 300,
      width: 500
    },
    xaxis: {
      categories: userNames,
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
    colors: user ? user.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`) : [],
    tooltip: {
      y: { formatter: (value) => `${value}%` }
    }
  };

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
