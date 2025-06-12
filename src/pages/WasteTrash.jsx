import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaClock, FaBell } from "react-icons/fa";

const WasteTrash = () => {
  const navigate = useNavigate();
  const [pickupTime, setPickupTime] = useState("");
  const [trashLevel, setTrashLevel] = useState(45); // Simulated trash level

  const handleSetPickupTime = (e) => setPickupTime(e.target.value);

  const checkTrashLevel = () => {
    if (trashLevel >= 80) {
      alert("⚠️ Bin is almost full! Please arrange for pickup.");
    } else {
      alert("✅ Bin level is manageable.");
    }
  };

  return (
    <div className="p-6 text-white">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/waste")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-red-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Waste Management
      </button>

      <h1 className="text-3xl font-bold mb-6 text-red-400">Trash Collection</h1>
      <p className="mb-8 text-gray-300">
        Manage your trash collection schedules and stay updated on trash levels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Trash Level */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaTrashAlt className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Current Trash Level</h2>
          <p className="text-gray-400 mb-4">{trashLevel}% Full</p>
          <button
            className="btn-subsystem"
            onClick={checkTrashLevel}
          >
            Check Level
          </button>
        </div>

        {/* ✅ Set Pickup Time */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaClock className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Set Next Pickup</h2>
          <input
            type="datetime-local"
            value={pickupTime}
            onChange={handleSetPickupTime}
            className="w-full p-2 rounded text-black"
          />
          <p className="text-gray-400 mt-2">
            Next Pickup:{" "}
            {pickupTime ? new Date(pickupTime).toLocaleString() : "Not set"}
          </p>
        </div>

        {/* ✅ Notifications */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaBell className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-400 mb-4">No recent alerts</p>
          <button
            className="btn-subsystem"
            onClick={checkTrashLevel}
          >
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteTrash;
