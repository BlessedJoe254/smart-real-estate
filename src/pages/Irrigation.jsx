import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaStop, FaCalendarAlt, FaTint } from "react-icons/fa";

const Irrigation = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Irrigation System</h1>
      <p className="mb-8 text-gray-300">
        Manage and automate your irrigation system to keep your landscape healthy and efficient.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Start Irrigation */}
        <div className="card bg-gradient-to-br from-green-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaPlay className="text-5xl text-green-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Start Irrigation</h2>
          <p className="text-gray-400 mb-4 text-center">Begin water distribution to the assigned zones.</p>
          <button className="btn-subsystem" onClick={() => navigate("/start-irrigation")}>
            Start
          </button>
        </div>

        {/* Stop Irrigation */}
        <div className="card bg-gradient-to-br from-red-800 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaStop className="text-5xl text-red-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Stop Irrigation</h2>
          <p className="text-gray-400 mb-4 text-center">Immediately stop ongoing irrigation activities.</p>
          <button className="btn-subsystem" onClick={() => navigate("/stop-irrigation")}>
            Stop
          </button>
        </div>

        {/* Set Schedule */}
        <div className="card bg-gradient-to-br from-blue-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaCalendarAlt className="text-5xl text-blue-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Set Schedule</h2>
          <p className="text-gray-400 mb-4 text-center">Automate irrigation times for efficiency.</p>
          <button className="btn-subsystem" onClick={() => navigate("/set-irrigation-schedule")}>
            Set Schedule
          </button>
        </div>

        {/* Moisture Levels */}
        <div className="card bg-gradient-to-br from-teal-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaTint className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Moisture Levels</h2>
          <p className="text-gray-400 mb-4 text-center">Check soil moisture status to optimize watering.</p>
          <button className="btn-subsystem" onClick={() => navigate("/moisture-levels")}>
            View Levels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Irrigation;
