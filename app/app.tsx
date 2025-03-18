"use client";

import { useState } from "react";
import ElectricityPriceChart from "./components/ElectricityPriceChart";
import Footer from "./components/Footer";


export default function Home() {
  const [selectedDate, setSelectedDate] = useState("03-17");

  // Explicitly define 'date' as a Date type
  const formatDate = (date: Date): string => {
    return date.toISOString().slice(5, 10);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newDate = formData.get("date")?.toString().slice(5) || ""; // Extract MM-DD format
    setSelectedDate(newDate);
  };

  const handleYesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    setSelectedDate(formatDate(date));
  };

  const handleTomorrow = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    setSelectedDate(formatDate(date));
  };

  return (
    
    <div className="text-center p-6 bg-white">
      <h1 className="text-3xl text-gray-800 mb-6">Electricity Prices</h1>

      <form onSubmit={handleSubmit} className="flex justify-center items-center gap-4 mb-6">
        <label htmlFor="date" className="font-semibold text-lg text-gray-700">Select a date:</label>
        <input
          type="date"
          name="date"
          id="date"
          required
          className="p-2 text-sm border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-semibold text-white bg-[#69e49a] rounded-md hover:bg-[#55c580] transition-colors"
        >
          Show Prices
        </button>
      </form>

      <h1 className="text-3xl text-gray-800 mb-6">Price on {selectedDate}</h1>

      <ElectricityPriceChart year="2025" date={selectedDate} place="_SE3" />

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={handleYesterday}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#69e49a] rounded-md hover:bg-[#55c580] transition-colors"
        >
          Yesterday
        </button>
        <button
          onClick={handleTomorrow}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#69e49a] rounded-md hover:bg-[#55c580] transition-colors"
        >
          Tomorrow
        </button>
      </div>
    </div>
  );
}
