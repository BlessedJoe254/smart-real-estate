import React, { useState } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeatingControl = () => {
  const [heatingOn, setHeatingOn] = useState(false);

  const toggleHeating = () => setHeatingOn((prev) => !prev);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-red-400 mb-4">Heating Control</h1>
      <p className="mb-6 text-gray-300">Turn the heating system on or off.</p>

      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
        <FaTemperatureHigh className="text-6xl text-red-300 mb-4" />
        <p className="text-xl mb-4">
          Status:{" "}
          <span className={`font-bold ${heatingOn ? "text-green-400" : "text-red-400"}`}>
            {heatingOn ? "Heating ON" : "Heating OFF"}
          </span>
        </p>

        <button
          onClick={toggleHeating}
          className={`px-6 py-2 rounded-md font-semibold transition ${
            heatingOn ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          {heatingOn ? "Turn Off" : "Turn On"}
        </button>

        <Link
          to="/hvac"
          className="mt-6 px-4 py-2 bg-red-800 rounded hover:bg-red-700 transition"
        >
          Back to HVAC
        </Link>
      </div>
    </div>
  );
};

export default HeatingControl;
