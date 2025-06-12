import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ToggleLights() {
  const [lightsOn, setLightsOn] = useState(false);
  const navigate = useNavigate();

  const toggleLights = () => setLightsOn(prev => !prev);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Control Lights</h2>
      <p className="mb-6">Lights are currently: <span className={lightsOn ? 'text-green-400' : 'text-red-400'}>{lightsOn ? 'ON' : 'OFF'}</span></p>
      <button
        onClick={toggleLights}
        className={`px-6 py-3 rounded font-semibold transition ${
          lightsOn ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {lightsOn ? 'Turn Lights OFF' : 'Turn Lights ON'}
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
