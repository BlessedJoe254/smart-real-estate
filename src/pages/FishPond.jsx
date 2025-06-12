import React from "react";
import { FaFish, FaWater, FaThermometerHalf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FishPond = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Fish Pond System</h1>
      <p className="mb-8 text-gray-300">
        Monitor and manage water quality, temperature, and feeding schedules to maintain a healthy fish pond.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Water Quality */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300 p-4 rounded-lg shadow-lg">
          <FaWater className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Water Quality</h2>
          <p className="text-gray-400 mb-4">Monitor pH, oxygen levels, and clarity.</p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/water-quality")}
          >
            Check Quality
          </button>
        </div>

        {/* Temperature Monitoring */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300 p-4 rounded-lg shadow-lg">
          <FaThermometerHalf className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature</h2>
          <p className="text-gray-400 mb-4">Ensure optimal water temperature for your fish.</p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/adjust-temp")}
          >
            Adjust Temp
          </button>
        </div>

        {/* Feeding Control */}
        <div className="card bg-gradient-to-br from-teal-800 to-gray-900 hover:scale-105 transform transition duration-300 p-4 rounded-lg shadow-lg">
          <FaFish className="text-5xl text-teal-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Feeding Control</h2>
          <p className="text-gray-400 mb-4">Automate and monitor feeding times.</p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/set-feeding")}
          >
            Set Feeding
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishPond;
