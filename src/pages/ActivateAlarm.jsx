import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeactivateAlarm() {
  const navigate = useNavigate();
  const [deactivated, setDeactivated] = useState(false);

  const handleDeactivate = () => {
    setDeactivated(true);
    alert('Fire alarm ACTIVATED!');
    // You can replace alert with a real API call here
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Activate Fire Alarm</h1>

      <button
        onClick={handleDeactivate}
        className={`px-6 py-3 rounded mb-4 text-white transition duration-300 ${
          deactivated ? 'bg-red-600 hover:bg-gray-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {deactivated ? 'Alarm Activated' : 'Activate Alarm'}
      </button>

      <br />

      <button
        onClick={() => navigate('/fire-detection')}
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
      >
        Back to Fire Detection
      </button>
    </div>
  );
}

export default DeactivateAlarm;
