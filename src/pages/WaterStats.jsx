import React from "react";
import { FaTint } from "react-icons/fa";

const WaterStats = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Water Consumption Stats</h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Here's a breakdown of your recent water usage across different systems in your smart estate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-blue-800 to-gray-900">
          <FaTint className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Irrigation System</h2>
          <p className="text-gray-400">Used 600L this week.</p>
        </div>

        <div className="card bg-gradient-to-br from-blue-700 to-gray-900">
          <FaTint className="text-5xl text-cyan-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fish Pond</h2>
          <p className="text-gray-400">Topped up 300L for cleaning and refill.</p>
        </div>

        <div className="card bg-gradient-to-br from-blue-600 to-gray-900">
          <FaTint className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Poultry Cleaning</h2>
          <p className="text-gray-400">Used 200L for cleaning activities.</p>
        </div>

        <div className="card bg-gradient-to-br from-blue-500 to-gray-900">
          <FaTint className="text-5xl text-blue-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Waste Management</h2>
          <p className="text-gray-400">Consumed 100L for rinsing and waste treatment.</p>
        </div>
      </div>
    </div>
  );
};

export default WaterStats;
