import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChart = ({data}) => {
  const chartRef = useRef(null);
  let chartInstance = null;
  
  useEffect(() => {
    let tr =0;
    let fa = 0;
    const ctx = chartRef.current.getContext("2d");
    data.forEach(item => {
      if(item.t_RESULT == "TRUE"){
        tr +=1
        }else{
        fa +=1;
        }
    });
    const createChart = () => {
      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["True","False"],
          datasets: [
            {
              label: "전체 T/F",
              data: [tr, fa],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive:false,
          plugins: {
            
            // title:{
            //   display: true,
            //   text: 'T/F 비교'
            // },
            
            legend: {
              position: "right", // 라벨 위치 설정
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

  return < canvas ref={chartRef} />;
};

export default PieChart;