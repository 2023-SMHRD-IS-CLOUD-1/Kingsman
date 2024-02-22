import React, { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ data, user }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (!data || !user) {
      console.log("데이터가 없습니다.");
      return;
    }

    const idSet = new Set(data.map(item => item.t_ID));
    const ids = [...idSet];

    const seriesData = ids.map(id => {
      const userData = user.find(userItem => userItem.b_ID === id);
      if (!userData) {
        console.log(`ID ${id}에 해당하는 사용자 데이터를 찾을 수 없습니다.`);
        return 0;
      }

      const relevantData = data.filter(dataItem => dataItem.t_ID === id);
      if (relevantData.length === 0) {
        console.log(`ID ${id}에 해당하는 데이터가 없습니다.`);
        return 0;
      }

      const accuracySum = relevantData.reduce((sum, dataItem) => sum + dataItem.t_ACCURACY, 0);
      const averageAccuracy = Math.floor(accuracySum / relevantData.length);
      return averageAccuracy;
    });

    // 각 사용자에 대해 새로운 시리즈를 생성하고 랜덤한 색상 할당
    const series = ids.map((id, index) => ({
      name: user.find(userItem => userItem.b_ID === id).b_NAME,
      data: [seriesData[index]],
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    }));

    setChartOptions({
      chart: {
        type: 'bar',
        height: 300,
        width: 300
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        title: {
          text: null
        },
        min: 0,
        max: 100,
        tickAmount: 5
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            formatter: function () {
              return this.y + '%';
            }
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
          }
        }
      },
      series: series
    });
  }, [data, user]);

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default BarChart;
