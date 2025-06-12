import React, { useState } from "react";
import { FaSnowflake } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoolingControl = () => {
  const [coolingOn, setCoolingOn] = useState(false);

  const toggleCooling = () => setCoolingOn((prev) => !prev);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Cooling Control</h1>
      <p className="mb-6 text-gray-300">Turn air conditioning on or off.</p>

      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
        <FaSnowflake className="text-6xl text-blue-300 mb-4" />
        <p className="text-xl mb-4">
          Status:{" "}
          <span className={`font-bold ${coolingOn ? "text-green-400" : "text-red-400"}`}>
            {coolingOn ? "Cooling ON" : "Cooling OFF"}
          </span>
        </p>

        <button
          onClick={toggleCooling}
          className={`px-6 py-2 rounded-md font-semibold transition ${
            coolingOn ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          {coolingOn ? "Turn Off" : "Turn On"}
        </button>

        <Link
          to="/hvac"
          className="mt-6 px-4 py-2 bg-blue-700 rounded hover:bg-blue-600 transition"
        >
          Back to HVAC
        </Link>
      </div>
    </div>
  );
};

export default CoolingControl;
