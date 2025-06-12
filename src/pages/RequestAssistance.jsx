import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestAssistance = () => {
  const navigate = useNavigate();
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Request Assistance</h1>

      <button
        onClick={handleRequest}
        className={`px-6 py-3 rounded-lg ${
          requested
            ? 'bg-gradient-to-r from-green-600 to-green-800'
            : 'bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700'
        } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-md text-white text-lg font-semibold`}
      >
        {requested ? 'Assistance Requested' : 'Request Help'}
      </button>

      <button
        onClick={() => navigate('/robot')}
        className="mt-6 px-5 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-md"
      >
        ⬅️ Back to Robot Assistant
      </button>
    </div>
  );
};

export default RequestAssistance;
