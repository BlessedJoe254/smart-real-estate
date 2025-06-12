import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTshirt, FaWind, FaCloudSun } from "react-icons/fa";

const ClotheslineControls = () => {
  const navigate = useNavigate();

  // Simulated state for drying status
  const [isDrying, setIsDrying] = useState(false);
  const [windSpeed, setWindSpeed] = useState(12); // Example wind speed (km/h)
  const [weather, setWeather] = useState("Sunny"); // Example weather condition

  const toggleDrying = () => setIsDrying((prev) => !prev);

  const checkWindSpeed = () => {
    if (windSpeed > 20) {
      alert("⚠️ Wind speed too high! Drying is not recommended.");
    } else {
      alert("✅ Wind conditions are safe for drying.");
    }
  };

  const checkWeather = () => {
    if (weather === "Rainy") {
      alert("☔ It's rainy. Avoid hanging clothes outside.");
    } else {
      alert(`☀️ Current Weather: ${weather}`);
    }
  };

  return (
    <div className="p-6 text-white min-h-screen">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/clothesline")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-blue-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Clothesline
      </button>

      <h1 className="text-3xl font-bold mb-6 text-blue-400">Clothesline Controls</h1>
      <p className="mb-8 text-gray-300 max-w-xl">
        Control your clothes drying cycles, monitor wind conditions, and check the current weather.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Drying Control */}
        <div className="bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaTshirt className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Drying Status</h2>
          <p className="text-gray-400 mb-4">{isDrying ? "Drying in progress..." : "Currently paused"}</p>
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-br from-blue-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
            onClick={toggleDrying}
          >
            {isDrying ? "Pause Drying" : "Start Drying"}
          </button>
        </div>

        {/* ✅ Wind Sensor */}
        <div className="bg-gradient-to-br from-teal-800 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaWind className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Wind Speed</h2>
          <p className="text-gray-400 mb-4">{windSpeed} km/h</p>
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-br from-teal-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
            onClick={checkWindSpeed}
          >
            Check Wind Status
          </button>
        </div>

        {/* ✅ Weather Condition */}
        <div className="bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaCloudSun className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Weather Condition</h2>
          <p className="text-gray-400 mb-4">{weather}</p>
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-br from-yellow-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
            onClick={checkWeather}
          >
            Check Weather
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClotheslineControls;
