import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

const Fence = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Electric Fence</h1>
      <p className="mb-8 text-gray-300">
        Monitor and control your property's electric fence system to keep it secure and safe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBolt className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fence Status</h2>
          <p className="text-gray-400 mb-4">Check if the fence is powered and operational.</p>
          <button className="btn-subsystem" onClick={() => navigate("/fence-status")}>
            View Status
          </button>
        </div>

        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaExclamationTriangle className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alarm System</h2>
          <p className="text-gray-400 mb-4">Receive alerts for any fence breaches or faults.</p>
          <button className="btn-subsystem" onClick={() => navigate("/fence-alerts")}>
            View Alerts
          </button>
        </div>

        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaShieldAlt className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Safety Controls</h2>
          <p className="text-gray-400 mb-4">Enable or disable safety features for maintenance.</p>
          <button className="btn-subsystem" onClick={() => navigate("/fence-safety")}>
            Manage Safety
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fence;
