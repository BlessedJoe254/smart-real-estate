import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHistory } from "react-icons/fa";

const FireHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <div className="card bg-gradient-to-br from-blue-700 to-gray-900 text-center">
        <FaHistory className="text-6xl text-blue-300 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold mb-2">Fire Incident History</h1>
        <p className="text-gray-300 mb-6">List of previous fire alarms triggered in the building.</p>
        <ul className="text-sm text-left text-gray-400 mb-4">
          <li>• 2025-06-01 – Kitchen – Smoke Detected</li>
          <li>• 2025-05-24 – Basement – Heat Spike</li>
          <li>• 2025-05-15 – Garage – False Alarm</li>
        </ul>
        <button className="btn-subsystem bg-gray-700 hover:bg-orange-500" onClick={() => navigate("/fire-detection")}>
          Back to Fire Detection
        </button>
      </div>
    </div>
  );
};

export default FireHistory;
