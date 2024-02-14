import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const BarChart = ({data, user}) => {
  const chartRef = useRef(null);
  let chartInstance = null;
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const id = data.map(item => item.t_ID);
    let datas = [];
    let names = [];

    id.forEach(item => {
      let sum =0;
      let count =0;
      data.forEach(item2 => {
        if(item === item2.t_ID){
          count += 1;
          sum+= item2.t_ACCURACY;
        }
      })
      datas.push(sum/count);
      user.map(item2 => {
        if(item === item2.b_ID){
          names.push(item2.b_NAME);
        }
      })

    });
    console.log(user)
    console.log(names)

    const createChart = () => {
      const backgroundColors = Array.from({ length: id.length }, () => {
        return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.2)`;
      });
      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: names,
          datasets: [
            {
              label: "사용자별 평균 예측률",
              data: datas,
              backgroundColor: backgroundColors,
              borderColor: backgroundColors,
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
  }, [user]);

  return < canvas ref={chartRef} />;
};

export default BarChart;