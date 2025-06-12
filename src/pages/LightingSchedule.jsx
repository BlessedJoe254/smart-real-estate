import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LightingSchedule = () => {
  const [start, setStart] = useState('18:00');
  const [end, setEnd] = useState('06:00');
  const navigate = useNavigate();

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Lighting Schedule</h1>
      <div className="card bg-gradient-to-br from-yellow-800 to-gray-900 p-6">
        <FaClock className="text-5xl text-yellow-300 mb-4 mx-auto" />
        <div className="mb-4">
          <label className="block mb-1">Start Time:</label>
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full bg-gray-800 p-2 rounded text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">End Time:</label>
          <input
            type="time"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full bg-gray-800 p-2 rounded text-white"
          />
        </div>
        <p className="text-sm text-gray-300">Schedule from {start} to {end}</p>
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

export default LightingSchedule;
