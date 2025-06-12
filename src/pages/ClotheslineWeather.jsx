import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudSun, FaTint, FaTemperatureHigh } from "react-icons/fa";

const ClotheslineWeather = () => {
  const navigate = useNavigate();

  // Simulated weather data
  const [temperature, setTemperature] = useState(29); // °C
  const [humidity, setHumidity] = useState(65); // %
  const [condition, setCondition] = useState("Sunny"); // Sunny, Cloudy, Rainy

  const checkWeather = () => {
    if (condition === "Rainy") {
      alert("☔ Rain expected! Avoid drying clothes outside.");
    } else {
      alert(`☀️ Weather looks good: ${condition}, ${temperature}°C`);
    }
  };

  return (
    <div className="p-6 text-white min-h-screen">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/clothesline")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-yellow-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Clothesline
      </button>

      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Weather Monitoring</h1>
      <p className="mb-8 text-gray-300 max-w-xl">
        Check the latest weather conditions to optimize your drying schedules.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Weather Condition */}
        <div className="bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaCloudSun className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Condition</h2>
          <p className="text-gray-400 mb-4">{condition}</p>
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-br from-yellow-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
            onClick={checkWeather}
          >
            Check Weather
          </button>
        </div>

        {/* ✅ Temperature */}
        <div className="bg-gradient-to-br from-orange-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaTemperatureHigh className="text-5xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature</h2>
          <p className="text-gray-400 mb-4">{temperature}°C</p>
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-br from-orange-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
            onClick={() => alert(`🌡️ Current temperature: ${temperature}°C`)}
          >
            View Details
          </button>
        </div>

        {/* ✅ Humidity */}
        <div className="bg-gradient-to-br from-teal-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaTint className="text-5xl text-teal-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Humidity</h2>
          <p className="text-gray-400 mb-4">{humidity}%</p>
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-br from-teal-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
            onClick={() => alert(`💧 Humidity is at ${humidity}%`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClotheslineWeather;
