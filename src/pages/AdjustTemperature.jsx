import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdjustTemperature = () => {
  const [temperature, setTemperature] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempNumber = parseFloat(temperature);
    if (isNaN(tempNumber)) {
      setMessage("❗ Please enter a valid temperature.");
      return;
    }
    setMessage(`✅ Temperature set to ${tempNumber}°C`);
    setTemperature(""); // Reset input
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Adjust Temperature</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <label className="block mb-2 text-gray-300">Temperature (°C)</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
          placeholder="e.g., 28"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
        >
          Set Temperature
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

export default AdjustTemperature;
