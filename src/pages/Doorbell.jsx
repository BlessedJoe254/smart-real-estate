import React from "react";
import { FaBell, FaMicrophone, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Doorbell = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Doorbell System</h1>
      <p className="mb-8 text-gray-300">
        Manage and monitor your smart doorbell with real-time alerts and communication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ring Alerts */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBell className="text-5xl text-purple-400 mb-4 pulse-bell" />
          <h2 className="text-xl font-semibold mb-2">Ring Alerts</h2>
          <p className="text-gray-400 mb-4">Receive instant notifications when someone rings the doorbell.</p>
          <button onClick={() => navigate("/doorbell-alerts")} className="btn-subsystem">
            View Alerts
          </button>
        </div>

        {/* Two-Way Audio */}
        <div className="card bg-gradient-to-br from-pink-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaMicrophone className="text-5xl text-pink-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Two-Way Audio</h2>
          <p className="text-gray-400 mb-4">Communicate directly with visitors via audio.</p>
          <button onClick={() => navigate("/two-way-audio")} className="btn-subsystem">
            Talk
          </button>
        </div>

        {/* Video Feed */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaVideo className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Video Feed</h2>
          <p className="text-gray-400 mb-4">View live video from the doorbell camera.</p>
          <button onClick={() => navigate("/doorbell-camera")} className="btn-subsystem">
            View Camera
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doorbell;
