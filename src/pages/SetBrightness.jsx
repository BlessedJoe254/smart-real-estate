import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SetBrightness = () => {
  const [brightness, setBrightness] = useState(50);
  const navigate = useNavigate();

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Set Brightness</h1>
      <div className="card bg-gradient-to-br from-yellow-800 to-gray-900 p-6">
        <div className="flex items-center justify-center mb-4">
          <FaSun className="text-6xl text-yellow-300 mr-4" />
          <span className="text-xl">{brightness}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="w-full mt-4"
        />
        <button
          className="mt-6 text-sm text-gray-300 underline hover:text-white"
          onClick={() => navigate('/lighting')}
        >
          Back to Lighting
        </button>
      </div>
    </div>
  );
};

export default SetBrightness;
