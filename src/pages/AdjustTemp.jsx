import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdjustTemp = () => {
  const navigate = useNavigate();
  const [temp, setTemp] = useState(24);
  const [message, setMessage] = useState("");

  const handleSetTemp = () => {
    setMessage(`Temperature set to ${temp}°C`);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Adjust Water Temperature</h1>

      <label className="block mb-2 text-gray-300">Temperature (°C)</label>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
        min={10}
        max={35}
      />

      <button
        onClick={handleSetTemp}
        className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
      >
        Set Temperature
      </button>

      {message && <p className="mt-4 text-green-400">{message}</p>}

      <button
        onClick={() => navigate("/fish-pond")}
        className="mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        Back to Fish Pond
      </button>
    </div>
  );
};

export default AdjustTemp;
