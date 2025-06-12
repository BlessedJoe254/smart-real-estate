import React, { useState } from "react";
import { FaWindowMaximize, FaSun, FaMoon } from "react-icons/fa";

const Blinds = () => {
  const [isBlindsOpen, setIsBlindsOpen] = useState(false);
  const [isDaylightMode, setIsDaylightMode] = useState(false);
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);

  const toggleBlinds = () => setIsBlindsOpen((prev) => !prev);
  const toggleDaylightMode = () => setIsDaylightMode((prev) => !prev);
  const togglePrivacyMode = () => setIsPrivacyMode((prev) => !prev);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Smart Blinds System</h1>
      <p className="mb-8 text-gray-300">
        Control the blinds automatically to adjust natural light and privacy levels throughout your home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Open/Close Blinds */}
        <div className="card bg-gradient-to-br from-indigo-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaWindowMaximize className="text-5xl text-indigo-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Open/Close Blinds</h2>
          <p className="text-gray-400 mb-4 text-center">
            {isBlindsOpen
              ? "Blinds are currently Open. Click to Close."
              : "Blinds are currently Closed. Click to Open."}
          </p>
          <button
            onClick={toggleBlinds}
            className={`btn-subsystem ${
              isBlindsOpen ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {isBlindsOpen ? "Close Blinds" : "Open Blinds"}
          </button>
        </div>

        {/* Daylight Mode */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaSun className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Daylight Mode</h2>
          <p className="text-gray-400 mb-4 text-center">
            {isDaylightMode
              ? "Daylight Mode is ACTIVE. Click to Deactivate."
              : "Maximize natural light during daytime hours."}
          </p>
          <button
            onClick={toggleDaylightMode}
            className={`btn-subsystem ${
              isDaylightMode ? "bg-green-600" : "bg-gray-700"
            }`}
          >
            {isDaylightMode ? "Deactivate Day Mode" : "Activate Day Mode"}
          </button>
        </div>

        {/* Privacy Mode */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <FaMoon className="text-5xl text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Privacy Mode</h2>
          <p className="text-gray-400 mb-4 text-center">
            {isPrivacyMode
              ? "Privacy Mode is ACTIVE. Click to Deactivate."
              : "Ensure privacy by closing blinds at night or on demand."}
          </p>
          <button
            onClick={togglePrivacyMode}
            className={`btn-subsystem ${
              isPrivacyMode ? "bg-green-600" : "bg-gray-700"
            }`}
          >
            {isPrivacyMode ? "Deactivate Privacy" : "Activate Privacy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blinds;
