// src/pages/EmergencyResponse.jsx

import { Link } from "react-router-dom";

export default function EmergencyResponse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Emergency Response</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Response Options</h2>
        <div className="space-y-4">
          <button className="w-full bg-red-600 px-4 py-3 rounded-lg hover:bg-red-500 transition">Call Fire Department</button>
          <button className="w-full bg-yellow-600 px-4 py-3 rounded-lg hover:bg-yellow-500 transition">Send Emergency SMS</button>
          <button className="w-full bg-blue-600 px-4 py-3 rounded-lg hover:bg-blue-500 transition">Trigger Evacuation Alarm</button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/FireDetection" className="inline-block px-6 py-3 bg-gray-800 text-gray-100 rounded-xl hover:bg-gray-700 transition">
          Back to Fire Detection
        </Link>
      </div>
    </div>
  );
}
