import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccentControl() {
  const [accentOn, setAccentOn] = useState(false);
  const navigate = useNavigate();

  const toggleAccent = () => setAccentOn(prev => !prev);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Control Accent Lighting</h2>
      <p className="mb-6">Accent lighting is currently: <span className={accentOn ? 'text-green-400' : 'text-red-400'}>{accentOn ? 'ON' : 'OFF'}</span></p>
      <button
        onClick={toggleAccent}
        className={`px-6 py-3 rounded font-semibold transition ${
          accentOn ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {accentOn ? 'Turn Accent Lights OFF' : 'Turn Accent Lights ON'}
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
