import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBatteryHalf } from "react-icons/fa";

const BatteryStatus = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-2">
        <FaBatteryHalf className="text-blue-400" /> Battery Status
      </h1>
      <p className="text-gray-300 mb-4">
        Check the status of your backup batteries for emergency power.
      </p>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
        <h2 className="text-4xl font-bold text-blue-400">82%</h2>
        <p className="text-gray-400 mt-2">Charge Remaining</p>
        <p className="text-green-400">Status: Good</p>
      </div>

      <button
        onClick={() => navigate("/energy")}
        className="mt-6 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 transition"
      >
        Back to Energy
      </button>
    </div>
  );
};

export default BatteryStatus;
