import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBatteryHalf, FaClock, FaBell } from "react-icons/fa";

const WasteBattery = () => {
  const navigate = useNavigate();
  const [reminderDate, setReminderDate] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(78); // Simulated battery level

  const handleSetReminder = (e) => setReminderDate(e.target.value);

  const checkBatteryLevel = () => {
    if (batteryLevel <= 20) {
      alert("⚠️ Battery low! Please replace soon.");
    } else {
      alert("✅ Battery level is sufficient.");
    }
  };

  return (
    <div className="p-6 text-white">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/waste")}
        className="mb-6 px-4 py-2 bg-gradient-to-br from-yellow-900 to-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
      >
        ← Back to Waste Management
      </button>

      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Battery Monitoring</h1>
      <p className="mb-8 text-gray-300">
        Monitor battery levels of waste equipment and set replacement reminders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Battery Level */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaBatteryHalf className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Current Battery Level</h2>
          <p className="text-gray-400 mb-4">{batteryLevel}% Charged</p>
          <button className="btn-subsystem" onClick={checkBatteryLevel}>
            Check Level
          </button>
        </div>

        {/* ✅ Set Reminder */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaClock className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Set Replacement Reminder</h2>
          <input
            type="datetime-local"
            value={reminderDate}
            onChange={handleSetReminder}
            className="w-full p-2 rounded text-black"
          />
          <p className="text-gray-400 mt-2">
            Reminder:{" "}
            {reminderDate ? new Date(reminderDate).toLocaleString() : "Not set"}
          </p>
        </div>

        {/* ✅ Notifications */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300 p-6 rounded-2xl shadow-lg">
          <FaBell className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-400 mb-4">No recent alerts</p>
          <button className="btn-subsystem" onClick={checkBatteryLevel}>
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteBattery;
