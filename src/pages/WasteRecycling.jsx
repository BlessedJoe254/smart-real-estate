import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRecycle, FaClock, FaBell } from "react-icons/fa";

const WasteRecycling = () => {
  const navigate = useNavigate();
  const [pickupSchedule, setPickupSchedule] = useState("");
  const [recyclables, setRecyclables] = useState([
    "Plastic Bottles",
    "Cardboard",
    "Aluminum Cans",
  ]);

  const handleSetPickupSchedule = (e) => setPickupSchedule(e.target.value);

  const checkNotifications = () => {
    alert("✅ No pending recycling notifications.");
  };

  return (
    <div className="p-6 text-white">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/waste")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-green-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Waste Management
      </button>

      <h1 className="text-3xl font-bold mb-6 text-green-400">Recycling Management</h1>
      <p className="mb-8 text-gray-300">
        Manage recyclable materials and set collection schedules.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Recycling List */}
        <div className="bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaRecycle className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Recyclable Items</h2>
          <ul className="text-gray-400 mb-4 list-disc list-inside">
            {recyclables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ✅ Set Pickup Schedule */}
        <div className="bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaClock className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Schedule Pickup</h2>
          <input
            type="datetime-local"
            value={pickupSchedule}
            onChange={handleSetPickupSchedule}
            className="w-full p-2 rounded text-black"
          />
          <p className="text-gray-400 mt-2">
            Next Pickup:{" "}
            {pickupSchedule
              ? new Date(pickupSchedule).toLocaleString()
              : "Not set"}
          </p>
        </div>

        {/* ✅ Notifications */}
        <div className="bg-gradient-to-br from-green-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaBell className="text-5xl text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-400 mb-4">No recent alerts</p>
          <button
            onClick={checkNotifications}
            className="px-4 py-2 bg-gradient-to-br from-green-700 to-gray-800 rounded-xl shadow hover:scale-105 transition"
          >
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteRecycling;
