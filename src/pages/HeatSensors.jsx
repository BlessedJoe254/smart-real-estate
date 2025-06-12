// src/pages/HeatSensors.jsx

import { Link } from "react-router-dom";

export default function HeatSensors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Heat Sensors</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Temperature Readings</h2>
        <ul className="space-y-2">
          <li className="bg-gray-700 p-3 rounded-lg">Living Room: 24°C</li>
          <li className="bg-gray-700 p-3 rounded-lg">Kitchen: 28°C</li>
          <li className="bg-gray-700 p-3 rounded-lg">Garage: 32°C ⚠️</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link to="/FireDetection" className="inline-block px-6 py-3 bg-gray-800 text-gray-100 rounded-xl hover:bg-gray-700 transition">
          Back to Fire Detection
        </Link>
      </div>
    </div>
  );
}
