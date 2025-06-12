import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VentilationControl = () => {
  const [fanSpeed, setFanSpeed] = useState("medium");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();
    setMessage(`✅ Ventilation set to ${fanSpeed} speed`);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Ventilation Control</h1>
      <form onSubmit={handleApply} className="max-w-sm">
        <label className="block mb-2 text-gray-300">Select Fan Speed</label>
        <select
          value={fanSpeed}
          onChange={(e) => setFanSpeed(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
        >
          Apply Settings
        </button>
      </form>

      {message && <p className="mt-4 text-green-400">{message}</p>}

      <button
        onClick={() => navigate("/poultry")}
        className="mt-6 inline-block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        ⬅ Back to Poultry
      </button>
    </div>
  );
};

export default VentilationControl;
