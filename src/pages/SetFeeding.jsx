import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetFeeding = () => {
  const [time, setTime] = useState("");
  const [feedingTimes, setFeedingTimes] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const addFeedingTime = (e) => {
    e.preventDefault();
    if (!time) {
      setMessage("❗ Please select a feeding time.");
      return;
    }
    setFeedingTimes((prev) => [...prev, time]);
    setTime("");
    setMessage("✅ Feeding time added.");
  };

  const handleSaveSchedule = () => {
    if (feedingTimes.length === 0) {
      setMessage("❗ Please add at least one feeding time.");
      return;
    }
    setMessage(`✅ Feeding schedule saved: ${feedingTimes.join(", ")}`);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Set Feeding Schedule</h1>

      <form onSubmit={addFeedingTime} className="max-w-sm mb-6">
        <label className="block mb-2 text-gray-300">Select Feeding Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
        >
          ➕ Add Time
        </button>
      </form>

      {/* Display added feeding times */}
      {feedingTimes.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Feeding Times:</h2>
          <ul className="list-disc pl-6 text-green-400">
            {feedingTimes.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleSaveSchedule}
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition mr-4"
      >
        💾 Save Schedule
      </button>

      <button
        onClick={() => navigate("/poultry")}
        className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        ⬅ Back to Poultry
      </button>

      {message && <p className="mt-4 text-yellow-400">{message}</p>}
    </div>
  );
};

export default SetFeeding;
