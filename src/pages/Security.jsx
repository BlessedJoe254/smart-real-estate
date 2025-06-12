import { NavLink } from "react-router-dom";
import React from "react";
import { FaVideo, FaBell, FaMicrochip, FaClipboardList } from "react-icons/fa";

const Security = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Security System</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Manage your home security. Access camera feeds, toggle alarms, monitor sensors, and view security logs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* View Camera Feeds */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaVideo className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">View Camera Feeds</h2>
          <p className="text-gray-400 mb-4">Live feed from all security cameras.</p>
          <NavLink to="/view-camera-feeds" className="btn-subsystem">View Feeds</NavLink>
        </div>

        {/* Toggle Alarm */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBell className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Toggle Alarm</h2>
          <p className="text-gray-400 mb-4">Arm or disarm your home alarm system.</p>
          <NavLink to="/toggle-alarm" className="btn-subsystem">Toggle Alarm</NavLink>
        </div>

        {/* View Sensors */}
        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaMicrochip className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">View Sensors</h2>
          <p className="text-gray-400 mb-4">Monitor all connected security sensors.</p>
          <NavLink to="/view-sensors" className="btn-subsystem">View Sensors</NavLink>
        </div>

        {/* View Logs */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaClipboardList className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">View Logs</h2>
          <p className="text-gray-400 mb-4">Security event logs and history.</p>
          <NavLink to="/view-logs" className="btn-subsystem">View Logs</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Security;
