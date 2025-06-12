import React from 'react';
import { FaBolt } from 'react-icons/fa';

const EnergyStats = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Energy Usage Statistics</h1>
      <div className="bg-gradient-to-br from-yellow-900 to-gray-900 p-6 rounded-lg shadow-lg">
        <FaBolt className="text-6xl text-yellow-400 mb-4" />
        <p className="text-lg text-gray-300 mb-2">Total Energy Used This Month: <span className="text-white font-semibold">3200 kWh</span></p>
        <p className="text-lg text-gray-300 mb-2">Peak Usage Time: <span className="text-white font-semibold">6:00 PM - 9:00 PM</span></p>
        <p className="text-lg text-gray-300 mb-2">Lowest Usage Time: <span className="text-white font-semibold">2:00 AM - 5:00 AM</span></p>
        <p className="text-lg text-gray-300">Estimated Bill: <span className="text-white font-semibold">KES 8,500</span></p>
      </div>
    </div>
  );
};

export default EnergyStats;
