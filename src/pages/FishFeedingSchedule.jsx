import React from 'react';
import { Link } from 'react-router-dom';

function FishFeedingSchedule() {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-6">Fish Feeding Schedule</h2>

      <form className="bg-gray-800 p-6 rounded shadow-md max-w-md">
        <div className="mb-4">
          <label htmlFor="fish-time" className="block mb-2">Feeding Time:</label>
          <input
            type="time"
            id="fish-time"
            name="fish-time"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fish-amount" className="block mb-2">Feed Amount (grams):</label>
          <input
            type="number"
            id="fish-amount"
            name="fish-amount"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Set Fish Feeding Schedule
        </button>
      </form>

      <div className="mt-6">
        <Link
          to="/fish-pond"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
        >
          ← Back to Fish Pond
        </Link>
      </div>
    </div>
  );
}

export default FishFeedingSchedule;
