import React, { useState } from "react";
import { FaFan } from "react-icons/fa";
import { Link } from "react-router-dom";

const FanSpeed = () => {
  const [speed, setSpeed] = useState("Medium");

  const handleSpeedChange = (level) => {
    setSpeed(level);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">Fan Speed Control</h1>
      <p className="mb-6 text-gray-300">Adjust the HVAC fan speed to your preference.</p>

      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
        <FaFan className="text-6xl text-purple-300 mb-4 animate-spin-slow" />
        <p className="text-xl mb-4">
          Current Speed: <span className="font-bold text-purple-300">{speed}</span>
        </p>

        <div className="flex gap-4 mb-6">
          {["Low", "Medium", "High"].map((level) => (
            <button
              key={level}
              onClick={() => handleSpeedChange(level)}
              className={`px-4 py-2 rounded-md text-white transition ${
                speed === level
                  ? "bg-purple-600"
                  : "bg-purple-800 hover:bg-purple-700"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <Link
          to="/hvac"
          className="mt-4 px-4 py-2 bg-purple-700 rounded hover:bg-purple-600 transition"
        >
          Back to HVAC
        </Link>
      </div>
    </div>
  );
};

export default FanSpeed;
