import React, { useState } from 'react';

const LockControl = () => {
  const [locked, setLocked] = useState(true);

  const toggleLock = () => {
    setLocked(!locked);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Lock Control</h1>
      <div className="bg-gray-800 rounded-lg shadow p-6 max-w-md">
        <p className="mb-4 text-lg">
          The door is currently: <span className={locked ? 'text-red-500' : 'text-green-500'}>{locked ? 'Locked' : 'Unlocked'}</span>
        </p>
        <button
          onClick={toggleLock}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
        >
          {locked ? 'Unlock Door' : 'Lock Door'}
        </button>
      </div>
    </div>
  );
};

export default LockControl;
