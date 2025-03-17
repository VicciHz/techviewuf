// components/ElectricityPriceChart.tsx
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Define the structure of the API response
interface PriceData {
  time_start: string;
  SEK_per_kWh: string;
}

// Define the structure of formatted data
interface FormattedPrice {
  name: string;
  price: number;
}

interface ElectricityPriceChartProps {
  year: string;
  date: string;
  place: string;
}

const ElectricityPriceChart: React.FC<ElectricityPriceChartProps> = ({ year, date, place }) => {
  const [prices, setPrices] = useState<FormattedPrice[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const url = `https://www.elprisetjustnu.se/api/v1/prices/${year}/${date}${place}.json`;
        console.log("Fetching data from:", url);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data: PriceData[] = await response.json();
        console.log("API Response:", data);

        const formattedData: FormattedPrice[] = data.map((item: PriceData) => ({
          name: item.time_start.substring(11, 16), // Extract HH:mm
          price: parseFloat(item.SEK_per_kWh),
        }));

        setPrices(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPrices();
  }, [year, date, place]);

  return (
    <div style={{ width: "100%", height: 400 }}>
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
