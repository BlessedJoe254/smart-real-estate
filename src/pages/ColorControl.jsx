import React, { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ColorControl = () => {
  const [color, setColor] = useState('#FFD700');
  const navigate = useNavigate();

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Color Control</h1>
      <div className="card bg-gradient-to-br from-yellow-800 to-gray-900 p-6 flex flex-col items-center">
        <FaPalette className="text-6xl text-yellow-300 mb-4" />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-32 h-12 rounded mb-4 border-2 border-yellow-300"
        />
        <p className="text-lg">Selected Color: <span style={{ color }}>{color}</span></p>
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

export default ColorControl;
