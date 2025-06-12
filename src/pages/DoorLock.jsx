import React from "react";
import { NavLink } from "react-router-dom";
import { FaLock, FaKey, FaUsers, FaHistory } from "react-icons/fa";

const DoorLock = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Door Lock System</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Manage and monitor your smart door locks. Control access, review logs, and manage users securely.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* View Lock Status */}
        <div className="card bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaLock className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">View Lock Status</h2>
          <p className="text-gray-400 mb-4">Check if doors are locked or unlocked.</p>
          <NavLink to="/lock-status" className="btn-subsystem">View Status</NavLink>
        </div>

        {/* Remote Control */}
        <div className="card bg-gradient-to-br from-blue-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaKey className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Remote Unlock/Lock</h2>
          <p className="text-gray-400 mb-4">Control doors from anywhere.</p>
          <NavLink to="/remote-lock-control" className="btn-subsystem">Control</NavLink>
        </div>

        {/* Access Logs */}
        <div className="card bg-gradient-to-br from-yellow-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaHistory className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Logs</h2>
          <p className="text-gray-400 mb-4">See who accessed doors and when.</p>
          <NavLink to="/lock-access-logs" className="btn-subsystem">View Logs</NavLink>
        </div>

        {/* Manage Users */}
        <div className="card bg-gradient-to-br from-purple-800 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaUsers className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-400 mb-4">Add or remove access for users.</p>
          <NavLink to="/manage-lock-users" className="btn-subsystem">Manage</NavLink>
        </div>
      </div>
    </div>
  );
};

export default DoorLock;
