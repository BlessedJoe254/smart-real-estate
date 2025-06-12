import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AutomationControl = () => {
  const navigate = useNavigate();
  const [activated, setActivated] = useState(false);

  const handleAutomation = () => {
    setActivated(true);
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Manage Automation</h1>

      <button
        onClick={handleAutomation}
        className={`px-6 py-3 rounded-lg ${
          activated
            ? 'bg-gradient-to-r from-green-600 to-green-800'
            : 'bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700'
        } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-md text-white text-lg font-semibold`}
      >
        {activated ? 'Automation Activated' : 'Activate Automation'}
      </button>

      <button
        onClick={() => navigate('/robot')}
        className="mt-6 px-5 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-base"
      >
        ⬅️ Back to Robot Assistant
      </button>
    </div>
  );
};

export default AutomationControl;
