import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

import Drawer from "../dashboard/Drawer";
 import Chart from 'chart.js/auto';
import Navbar from "../Navbar";

const LineChart = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );

      
        const historicalData = response.data.cases;

      
        const dataToRender = Object.entries(historicalData).map(
          ([date, cases]) => ({
            date,
            cases,
          })
        );

    
        setData(dataToRender);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

   
    fetchData();
  }, []);

  
  const labels = data.map((item) => item.date);
  const casesData = data.map((item) => item.cases);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        data: casesData,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      <Drawer />
      <Navbar name="Graph"/>
    <div className="flex-grow p-2" style={{ width: '50%', height: '50%', marginLeft: '50%', transform: 'translateX(-50%)' }}>
  <h2 className="text-lg font-semibold">COVID-19 Cases Over Time</h2>
  {data.length > 0 ? <Line data={chartData} /> : <p>Loading data...</p>}
 
</div>
  </div>

  
  
  
  );
};

export default LineChart;
