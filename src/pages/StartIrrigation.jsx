import React from "react";
import { useNavigate } from "react-router-dom";

const StartIrrigation = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold text-green-400 mb-4">Start Irrigation</h1>
      <p className="text-gray-300 mb-6">Irrigation has been initiated in the designated zones.</p>
      <button
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        onClick={() => navigate("/irrigation")}
      >
        Back to Irrigation
      </button>
    </div>
  );
};

export default StartIrrigation;
