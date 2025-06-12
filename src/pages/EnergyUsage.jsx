import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const EnergyUsage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-2">
        <FaBolt className="text-yellow-400" /> Real-time Energy Usage
      </h1>
      <p className="text-gray-300 mb-4">
        View live updates of your current power consumption.
      </p>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
        <h2 className="text-5xl font-bold text-green-400">1.8 kW</h2>
        <p className="text-gray-400 mt-2">Current Power Consumption</p>
      </div>

      <button
        onClick={() => navigate("/energy")}
        className="mt-6 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 transition"
      >
        Back to Energy
      </button>
    </div>
  );
};

export default EnergyUsage;
