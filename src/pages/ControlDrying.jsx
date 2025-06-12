import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ControlDrying = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Idle");

  const toggleDrying = () => {
    const newStatus = status === "Running" ? "Paused" : "Running";
    setStatus(newStatus);
    alert(`✅ Drying is now ${newStatus}`);
  };

  return (
    <div className="p-6 text-white">
      <button
        onClick={() => navigate("/clothesline")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-orange-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Clothesline
      </button>

      <h1 className="text-3xl font-bold mb-4 text-blue-400">Drying Control</h1>
      <p className="mb-4 text-gray-300">Manage drying cycles for optimal results.</p>
      <p className="mb-4">Current Status: <span className="font-bold">{status}</span></p>

      <button
        onClick={toggleDrying}
        className="px-6 py-2 bg-gradient-to-br from-blue-700 to-gray-800 text-white rounded-xl shadow hover:scale-105 transition"
      >
        {status === "Running" ? "Pause Drying" : "Start Drying"}
      </button>
    </div>
  );
};

export default ControlDrying;
