import React from "react";
import { useNavigate } from "react-router-dom";

const WindSensor = () => {
  const navigate = useNavigate();
  const windSpeed = "7 km/h";

  return (
    <div className="p-6 text-white">
      <button
        onClick={() => navigate("/clothesline")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-orange-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Clothesline
      </button>

      <h1 className="text-3xl font-bold mb-4 text-teal-300">Wind Sensor</h1>
      <p className="mb-4 text-gray-300">Monitor wind speed to protect your drying clothes.</p>

      <div className="text-lg font-bold text-white bg-gradient-to-br from-teal-800 to-gray-900 px-6 py-3 rounded-xl shadow-lg">
        Current Wind Speed: {windSpeed}
      </div>
    </div>
  );
};

export default WindSensor;
