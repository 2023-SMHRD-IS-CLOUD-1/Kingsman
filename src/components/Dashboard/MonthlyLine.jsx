import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

const MonthlyLine = ({date, data}) => {
  const chartRef = useRef(null);
  let chartInstance = null;



  useEffect(() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate();
    const newArray = Array.from({ length: lastDay}, (_, index) => index + 1);
    const ctx = chartRef.current.getContext("2d");
    const monthData = [];
    console.log(data);
    


      for (let index = 1; index < newArray.length+1; index++) {
        let sum = 0;
        data.map(
        item => {

          if(index== new Date(item.t_DATE).getDate()){
            sum += item.t_COUNT;
          }
        })
        monthData.push(sum);
        
      }
    
    const createChart = () => {

      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: newArray,
          datasets: [
            {
              label: "이번 달 입고량",
              data: monthData,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive:false,
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
    
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default MonthlyLine;