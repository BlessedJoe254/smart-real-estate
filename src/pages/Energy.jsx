import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaChartLine, FaBatteryHalf } from "react-icons/fa";

const Energy = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Energy Monitoring System</h1>
      <p className="mb-8 text-gray-300">
        Track and optimize your energy consumption for better efficiency and savings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Real-time Usage */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaBolt className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Real-time Usage</h2>
          <p className="text-gray-400 mb-4 text-center">
            Monitor your current power consumption in real time.
          </p>
          <button
            onClick={() => navigate("/energy-usage")}
            className="btn-subsystem"
          >
            View Usage
          </button>
        </div>

        {/* Usage Trends */}
        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaChartLine className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Usage Trends</h2>
          <p className="text-gray-400 mb-4 text-center">
            Analyze your energy consumption trends over time.
          </p>
          <button
            onClick={() => navigate("/energy-trends")}
            className="btn-subsystem"
          >
            View Trends
          </button>
        </div>

        {/* Battery Status */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaBatteryHalf className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Battery Status</h2>
          <p className="text-gray-400 mb-4 text-center">
            Check the health and charge status of your backup batteries.
          </p>
          <button
            onClick={() => navigate("/battery-status")}
            className="btn-subsystem"
          >
            Check Battery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Energy;
