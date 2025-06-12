import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFire } from "react-icons/fa";

const CurrentFireStatus = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <div className="card bg-gradient-to-br from-orange-700 to-gray-900 text-center">
        <FaFire className="text-6xl text-orange-300 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold mb-2">Current Fire Status</h1>
        <p className="text-gray-300 mb-6">Real-time detection: No active fire alerts.</p>
        <div className="text-green-400 font-semibold mb-4">System Status: NORMAL</div>
        <button className="btn-subsystem bg-gray-700 hover:bg-orange-500" onClick={() => navigate("/fire-detection")}>
          Back to Fire Detection
        </button>
      </div>
    </div>
  );
};

export default CurrentFireStatus;
