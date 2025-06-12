// src/pages/FireAlarms.jsx

import { Link } from "react-router-dom";

export default function FireAlarms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Fire Alarm Status</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6 text-center">
        <p className="text-xl mb-4">Current Status: <span className="font-bold text-green-400">ACTIVE</span></p>
        <button className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-500 transition mr-4">Deactivate Alarm</button>
        <button className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-500 transition">Activate Alarm</button>
      </div>

      <div className="mt-8 text-center">
        <Link to="/FireDetection" className="inline-block px-6 py-3 bg-gray-800 text-gray-100 rounded-xl hover:bg-gray-700 transition">
          Back to Fire Detection
        </Link>
      </div>
    </div>
  );
}
