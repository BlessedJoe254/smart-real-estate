import React from "react";
import { useNavigate } from "react-router-dom";

const WeatherMonitoring = () => {
  const navigate = useNavigate();
  const weatherCondition = "Sunny, 27°C";

  return (
    <div className="p-6 text-white">
      <button
        onClick={() => navigate("/clothesline")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-orange-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Clothesline
      </button>

      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Weather Monitoring</h1>
      <p className="mb-4 text-gray-300">Check weather forecasts to optimize drying schedules.</p>

      <div className="text-lg font-bold text-white bg-gradient-to-br from-yellow-800 to-gray-900 px-6 py-3 rounded-xl shadow-lg">
        Current Weather: {weatherCondition}
      </div>
    </div>
  );
};

export default WeatherMonitoring;
