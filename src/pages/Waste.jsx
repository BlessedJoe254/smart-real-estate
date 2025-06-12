import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRecycle, FaTrashAlt, FaBatteryHalf } from "react-icons/fa";

const WasteManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Waste Management</h1>
      <p className="mb-8 text-gray-300">
        Efficiently handle waste sorting, collection, and monitoring to keep your environment clean.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recycling */}
        <div className="card bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaRecycle className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Recycling</h2>
          <p className="text-gray-400 mb-4">Track and manage recyclable waste streams.</p>
          <button className="btn-subsystem" onClick={() => navigate("/waste-recycling")}>
            Manage Recycling
          </button>
        </div>

        {/* Trash Collection */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTrashAlt className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Trash Collection</h2>
          <p className="text-gray-400 mb-4">Schedule and monitor trash pickups.</p>
          <button className="btn-subsystem" onClick={() => navigate("/waste-trash")}>
            Schedule Pickup
          </button>
        </div>

        {/* Battery Monitoring */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaBatteryHalf className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Battery Monitoring</h2>
          <p className="text-gray-400 mb-4">Monitor waste management equipment power levels.</p>
          <button className="btn-subsystem" onClick={() => navigate("/waste-battery")}>
            View Battery Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;
