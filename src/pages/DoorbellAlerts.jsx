import React from 'react';

const DoorbellAlerts = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Ring Alerts</h1>
      <p className="mb-6 text-gray-300">
        Below are recent doorbell rings with timestamps. Stay updated and secure.
      </p>

      <div className="space-y-4">
        <div className="bg-gray-800 rounded p-4">
          <p className="text-lg text-white font-semibold">Visitor at 10:34 AM</p>
          <p className="text-gray-400 text-sm">2025-06-11</p>
        </div>
        <div className="bg-gray-800 rounded p-4">
          <p className="text-lg text-white font-semibold">Visitor at 8:50 PM</p>
          <p className="text-gray-400 text-sm">2025-06-10</p>
        </div>
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 transition"
      >
        Back to Doorbell
      </button>
    </div>
  );
};

export default DoorbellAlerts;
