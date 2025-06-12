// src/pages/SmokeSensors.jsx

import { Link } from "react-router-dom";

export default function SmokeSensors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Smoke Sensors</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Active Smoke Detectors</h2>
        <ul className="space-y-2">
          <li className="bg-gray-700 p-3 rounded-lg">Living Room - ✅ Online</li>
          <li className="bg-gray-700 p-3 rounded-lg">Kitchen - ✅ Online</li>
          <li className="bg-gray-700 p-3 rounded-lg">Bedroom - ⚠️ Low Battery</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition">Add New Detector</button>
        <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition">Remove Selected</button>
      </div>

      <div className="mt-8 text-center">
        <Link to="/FireDetection" className="inline-block px-6 py-3 bg-gray-800 text-gray-100 rounded-xl hover:bg-gray-700 transition">
          Back to Fire Detection
        </Link>
      </div>
    </div>
  );
}
