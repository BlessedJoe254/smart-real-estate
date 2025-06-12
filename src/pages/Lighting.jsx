import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaSun, FaMoon, FaRegLightbulb } from "react-icons/fa";

const Lighting = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Lighting System</h1>
      <p className="mb-8 text-gray-300">
        Control your home lighting including brightness, colors, and schedules for an optimal ambiance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main Lights */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaLightbulb className="text-6xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Main Lights</h2>
          <p className="text-gray-400 mb-4 text-center">
            Turn on/off or dim the main lights in your home.
          </p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/toggle-lights")}
          >
            Control Lights
          </button>
        </div>

        {/* Daylight Mode */}
        <div className="card bg-gradient-to-br from-yellow-700 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaSun className="text-5xl text-yellow-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Daylight Mode</h2>
          <p className="text-gray-400 mb-4 text-center">
            Optimize lighting to natural daylight levels.
          </p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/daylight-mode")}
          >
            Enable Mode
          </button>
        </div>

        {/* Night Mode */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaMoon className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Night Mode</h2>
          <p className="text-gray-400 mb-4 text-center">
            Dim lights for a cozy nighttime ambiance.
          </p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/night-mode")}
          >
            Enable Mode
          </button>
        </div>

        {/* Accent Lights */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaRegLightbulb className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Accent Lights</h2>
          <p className="text-gray-400 mb-4 text-center">
            Control accent and decorative lighting.
          </p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/accent-control")}
          >
            Control Accents
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lighting;
