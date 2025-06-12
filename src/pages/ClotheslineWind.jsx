import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWind, FaTachometerAlt, FaExclamationTriangle } from "react-icons/fa";

const ClotheslineWind = () => {
  const navigate = useNavigate();
  const [windSpeed, setWindSpeed] = useState(12); // in km/h
  const [status, setStatus] = useState("Normal");

  const getStatusColor = () => {
    if (status === "Dangerous") return "text-red-400";
    if (status === "Strong") return "text-yellow-400";
    return "text-green-400";
  };

  const checkWind = () => {
    if (windSpeed >= 35) {
      setStatus("Dangerous");
      alert("🌪️ Dangerous winds! Retract clothesline immediately!");
    } else if (windSpeed >= 20) {
      setStatus("Strong");
      alert("⚠️ Strong winds! Consider pausing drying.");
    } else {
      setStatus("Normal");
      alert("✅ Conditions are safe.");
    }
  };

  return (
    <div className="p-6 text-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate("/clothesline")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-teal-800 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Clothesline
      </button>

      <h1 className="text-3xl font-extrabold mb-4 text-teal-400">Wind Monitoring</h1>
      <p className="mb-8 text-gray-300 max-w-xl">
        Monitor and simulate real-time wind conditions to protect your drying system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Wind Speed Display */}
        <div className="bg-gradient-to-br from-cyan-900 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <FaTachometerAlt className="text-5xl text-cyan-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Current Wind Speed</h2>
          <p className="text-gray-400 text-2xl mb-4">{windSpeed} km/h</p>
          <button
            onClick={checkWind}
            className="w-full py-2 rounded-xl bg-gradient-to-br from-cyan-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
          >
            Check Wind Status
          </button>
        </div>

        {/* ✅ Wind Status */}
        <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <FaExclamationTriangle className="text-5xl text-blue-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Status</h2>
          <p className={`text-2xl font-bold mb-4 ${getStatusColor()}`}>{status}</p>
          <button
            onClick={checkWind}
            className="w-full py-2 rounded-xl bg-gradient-to-br from-blue-700 to-gray-800 text-white font-semibold shadow hover:scale-105 transition"
          >
            Refresh Status
          </button>
        </div>

        {/* ✅ Simulate Wind Speed */}
        <div className="bg-gradient-to-br from-teal-900 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <FaWind className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Simulate Wind</h2>
          <input
            type="range"
            min="0"
            max="50"
            value={windSpeed}
            onChange={(e) => setWindSpeed(Number(e.target.value))}
            className="w-full mb-2"
          />
          <p className="text-gray-400">{windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default ClotheslineWind;
