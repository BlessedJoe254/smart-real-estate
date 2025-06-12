import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WaterQuality = () => {
  const navigate = useNavigate();
  const [quality, setQuality] = useState("Good");
  const [lastChecked, setLastChecked] = useState(null);

  const checkWaterQuality = () => {
    const qualities = ["Excellent", "Good", "Fair", "Poor"];
    const randomQuality = qualities[Math.floor(Math.random() * qualities.length)];
    setQuality(randomQuality);
    setLastChecked(new Date().toLocaleTimeString());
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Water Quality</h1>
      <p className="mb-4 text-gray-300">Monitor pH levels, oxygen content, and clarity of pond water.</p>

      <div className="bg-gray-800 rounded p-4 mb-4">
        <p className="text-lg mb-2">Current Quality: <span className="font-semibold text-orange-400">{quality}</span></p>
        {lastChecked && <p className="text-sm text-gray-400">Last checked: {lastChecked}</p>}
      </div>

      <button onClick={checkWaterQuality} className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition mb-4">
        Check Again
      </button>
      
      <button onClick={() => navigate("/fish-pond")} className="px-4 py-2 ml-4 bg-gray-700 rounded hover:bg-gray-600 transition">
        Back to Fish Pond
      </button>
    </div>
  );
};

export default WaterQuality;
