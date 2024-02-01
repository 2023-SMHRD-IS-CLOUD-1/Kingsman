import React, { useEffect, useState } from 'react'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

const Dashboard = (/*{list}*/) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const [Data, setData] = useState([]);
     

    useEffect(() => {
        const fetchData = async () => {
            setData(12); // 안에 list 사용할 예정
            };
        
    }, []);
 
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "지난 7일 간 입고 건수",
            },
        },
    };
 
    let labels = [];
    if (Data.length > 0) {
        labels = Data.map(data => data.x);
    }
 
    const data = {
        labels,
        datasets: [
            {
                label: "채팅 건수",
                data: Data.map((data) => data.y),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
  return (
    <div>
        <AdminHeader></AdminHeader>
        <div></div>
        <div></div>
        <div></div>
        <div>
            <Line data={data} />
        </div>

        <AdminFooter></AdminFooter>
    </div>
  )
}

export default Dashboard