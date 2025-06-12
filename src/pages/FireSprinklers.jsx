// src/pages/FireSprinklers.jsx

import { Link } from "react-router-dom";

export default function FireSprinklers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Fire Sprinkler System</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6 text-center">
        <p className="text-xl mb-4">Sprinkler Status: <span className="font-bold text-green-400">Ready</span></p>
        <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition mr-4">Activate Sprinklers</button>
        <button className="bg-gray-700 px-6 py-3 rounded-xl hover:bg-gray-600 transition">Deactivate Sprinklers</button>
      </div>

      <div className="mt-8 text-center">
        <Link to="/FireDetection" className="inline-block px-6 py-3 bg-gray-800 text-gray-100 rounded-xl hover:bg-gray-700 transition">
          Back to Fire Detection
        </Link>
      </div>
    </div>
  );
}
