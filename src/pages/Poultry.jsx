import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEgg, FaTemperatureHigh, FaFan } from "react-icons/fa";

const PoultryHouse = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Poultry House System</h1>
      <p className="mb-8 text-gray-300">
        Manage your poultry house environment with temperature control, feeding schedules, and ventilation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feeding Schedule */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaEgg className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Feeding Schedule</h2>
          <p className="text-gray-400 mb-4">Automate and monitor the feeding times for your poultry.</p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/set-feeding")}
          >
            Set Feeding
          </button>
        </div>

        {/* Temperature Control */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTemperatureHigh className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature Control</h2>
          <p className="text-gray-400 mb-4">Maintain optimal temperature inside the poultry house.</p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/adjust-temperature")}
          >
            Adjust Temp
          </button>
        </div>

        {/* Ventilation */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaFan className="text-5xl text-blue-400 mb-4 animate-spin-slow" />
          <h2 className="text-xl font-semibold mb-2">Ventilation</h2>
          <p className="text-gray-400 mb-4">Control fans and airflow to keep the environment fresh.</p>
          <button
            className="btn-subsystem"
            onClick={() => navigate("/ventilation-control")}
          >
            Control Fans
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoultryHouse;
