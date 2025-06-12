import React from "react";
import { useNavigate } from "react-router-dom";

const FenceAlerts = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 text-red-400">Fence Alerts</h1>
      <p className="mb-6 text-gray-300">Recent breach or fault notifications.</p>
      <div className="bg-gray-800 p-4 rounded shadow mb-6">
        <p className="text-green-400">✅ No recent alerts.</p>
      </div>
      <button
        className="btn-subsystem"
        onClick={() => navigate("/fence")}
      >
        Back to Electric Fence
      </button>
    </div>
  );
};

export default FenceAlerts;
