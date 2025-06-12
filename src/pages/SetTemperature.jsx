import React, { useState } from "react";
import { FaThermometerHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const SetTemperature = () => {
  const [temperature, setTemperature] = useState(22);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Temperature Setting</h1>
      <p className="mb-6 text-gray-300">Set the desired room temperature.</p>

      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
        <FaThermometerHalf className="text-6xl text-yellow-300 mb-4" />
        <p className="text-xl mb-4">
          Current Temperature: <span className="font-bold">{temperature}°C</span>
        </p>

        <input
          type="range"
          min="16"
          max="30"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full accent-yellow-500"
        />

        <p className="mt-4 text-gray-400">Drag to set between 16°C and 30°C</p>

        <Link
          to="/hvac"
          className="mt-6 px-4 py-2 bg-yellow-700 rounded hover:bg-yellow-600 transition"
        >
          Back to HVAC
        </Link>
      </div>
    </div>
  );
};

export default SetTemperature;
