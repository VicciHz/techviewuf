"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ElectricityPriceChart = ({ year, date, place }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const url = `https://www.elprisetjustnu.se/api/v1/prices/${year}/${date}${place}.json`;
        console.log("Fetching data from:", url);
        
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        
        const data = await response.json();
        console.log("API Response:", data); // Debugging

        console.log(url);

        const formattedData = data.map((item) => ({
          name: item.time_start.substring(11, 16),
          price: parseFloat(item.SEK_per_kWh),
        }));

        console.log("Formatted Data:", formattedData); 
        setPrices(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPrices();
  }, [year, date, place]);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Electricity Prices</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={prices}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ElectricityPriceChart;
