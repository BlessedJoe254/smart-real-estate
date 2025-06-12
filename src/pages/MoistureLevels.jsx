import React from "react";
import { useNavigate } from "react-router-dom";

const MoistureLevels = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold text-teal-400 mb-4">Moisture Levels</h1>
      <p className="text-gray-300 mb-6">Current soil moisture level is at 58% in most zones.</p>
      <button
        className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
        onClick={() => navigate("/irrigation")}
      >
        Back to Irrigation
      </button>
    </div>
  );
};

export default MoistureLevels;
