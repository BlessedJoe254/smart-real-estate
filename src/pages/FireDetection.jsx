import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFireExtinguisher, FaBell, FaHistory, FaFire } from "react-icons/fa";

const FireDetection = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Fire Detection System</h1>
      <p className="mb-8 text-gray-300">
        Monitor and control fire safety within your smart estate to ensure maximum protection and rapid response.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Activate Alarm */}
        <div className="card bg-gradient-to-br from-red-800 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaBell className="text-5xl text-red-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Activate Alarm</h2>
          <p className="text-gray-400 mb-4 text-center">Trigger fire alarm in case of emergency.</p>
          <button className="btn-subsystem" onClick={() => navigate("/activate-alarm")}>
            Activate
          </button>
        </div>

        {/* Deactivate Alarm */}
        <div className="card bg-gradient-to-br from-green-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaFireExtinguisher className="text-5xl text-green-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Deactivate Alarm</h2>
          <p className="text-gray-400 mb-4 text-center">Silence the alarm after confirming safety.</p>
          <button className="btn-subsystem" onClick={() => navigate("/deactivate-alarm")}>
            Deactivate
          </button>
        </div>

        {/* Fire History */}
        <div className="card bg-gradient-to-br from-blue-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaHistory className="text-5xl text-blue-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fire History</h2>
          <p className="text-gray-400 mb-4 text-center">View logs of past fire incidents and alarms triggered.</p>
          <button className="btn-subsystem" onClick={() => navigate("/fire-history")}>
            View History
          </button>
        </div>

        {/* Current Fire Status */}
        <div className="card bg-gradient-to-br from-orange-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaFire className="text-5xl text-orange-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Current Fire Status</h2>
          <p className="text-gray-400 mb-4 text-center">Check real-time fire detection status in monitored zones.</p>
          <button className="btn-subsystem" onClick={() => navigate("/current-fire-status")}>
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default FireDetection;
