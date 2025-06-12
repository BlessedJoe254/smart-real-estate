import React from "react";
import { useNavigate } from "react-router-dom";

const StopIrrigation = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Stop Irrigation</h1>
      <p className="text-gray-300 mb-6">All irrigation activities have been stopped successfully.</p>
      <button
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        onClick={() => navigate("/irrigation")}
      >
        Back to Irrigation
      </button>
    </div>
  );
};

export default StopIrrigation;
