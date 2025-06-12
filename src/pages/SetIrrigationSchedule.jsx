import React from "react";
import { useNavigate } from "react-router-dom";

const SetIrrigationSchedule = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold text-blue-400 mb-4">Set Irrigation Schedule</h1>
      <p className="text-gray-300 mb-6">Configure automatic watering times based on plant needs.</p>
      <button
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        onClick={() => navigate("/irrigation")}
      >
        Back to Irrigation
      </button>
    </div>
  );
};

export default SetIrrigationSchedule;
