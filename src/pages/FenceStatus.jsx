import React from "react";
import { useNavigate } from "react-router-dom";

const FenceStatus = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Fence Status</h1>
      <p className="mb-6 text-gray-300">Current status of the electric fence system.</p>
      <div className="bg-gray-800 p-4 rounded shadow mb-6">
        <p className="text-green-400 font-semibold">Powered: ON</p>
        <p className="text-green-400 font-semibold">Voltage: 8500V</p>
        <p className="text-green-400 font-semibold">No faults detected</p>
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

export default FenceStatus;
