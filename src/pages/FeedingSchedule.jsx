import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedingSchedule = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!schedule) {
      setMessage("Please select a feeding time.");
      return;
    }
    setMessage(`Feeding schedule saved for ${schedule}`);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Set Feeding Schedule</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <label className="block mb-2 text-gray-300">Feeding Time</label>
        <input
          type="time"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
        >
          Save Schedule
        </button>
      </form>

      {message && <p className="mt-4 text-green-400">{message}</p>}

      <button
        onClick={() => navigate("/fish-pond")}
        className="mt-6 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        Back to Fish Pond
      </button>
    </div>
  );
};

export default FeedingSchedule;
