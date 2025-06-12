import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DaylightMode() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const toggleDaylight = () => setActive(prev => !prev);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Enable Daylight Mode</h2>
      <p className="mb-6">Daylight mode is currently: <span className={active ? 'text-green-400' : 'text-red-400'}>{active ? 'ACTIVE' : 'INACTIVE'}</span></p>
      <button
        onClick={toggleDaylight}
        className={`px-6 py-3 rounded font-semibold transition ${
          active ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {active ? 'Disable Daylight Mode' : 'Enable Daylight Mode'}
      </button>
      <button
        onClick={() => navigate('/lighting')}
        className="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Back to Lighting
      </button>
    </div>
  );
}
