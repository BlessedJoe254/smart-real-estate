import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTshirt, FaWind, FaCloudSun } from "react-icons/fa";

const Clothesline = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white min-h-screen">
      {/* <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-5 py-2 bg-gradient-to-br from-orange-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Dashboard
      </button> */}

      <h1 className="text-4xl font-extrabold mb-4 text-orange-500">Clothesline System</h1>
      <p className="mb-10 text-lg text-gray-300 max-w-xl">
        Automate your clothes drying with smart controls for wind, sun, and drying cycles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Drying Control */}
        <div className="bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaTshirt className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Drying Control</h2>
          <p className="text-gray-400 mb-6">Start or pause drying cycles automatically.</p>
          <button
            onClick={() => navigate("/clothesline-controls")} // ✅ FIXED PATH
            className="w-full py-2 rounded-xl bg-gradient-to-br from-blue-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
          >
            Control Drying
          </button>
        </div>

        {/* Wind Sensor */}
        <div className="bg-gradient-to-br from-teal-800 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaWind className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Wind Sensor</h2>
          <p className="text-gray-400 mb-6">Detect wind speed to protect your clothesline.</p>
          <button
            onClick={() => navigate("/clothesline-wind")}
            className="w-full py-2 rounded-xl bg-gradient-to-br from-teal-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
          >
            View Wind Data
          </button>
        </div>

        {/* Weather Monitoring */}
        <div className="bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaCloudSun className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Weather Monitoring</h2>
          <p className="text-gray-400 mb-6">Adjust drying schedules based on sunlight and rain.</p>
          <button
            onClick={() => navigate("/clothesline-weather")}
            className="w-full py-2 rounded-xl bg-gradient-to-br from-yellow-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
          >
            Check Weather
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clothesline;
