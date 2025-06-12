import React from "react";
import { FaClipboardList } from "react-icons/fa";

const logs = [
  { id: 1, event: "Motion detected at front door", time: "2025-06-05 10:15:23" },
  { id: 2, event: "Alarm armed", time: "2025-06-05 09:45:00" },
  { id: 3, event: "Camera 2 offline", time: "2025-06-04 22:30:15" },
];

const SecurityLogs = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500 flex items-center gap-3">
        <FaClipboardList /> Security Logs
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Review recent security events and alerts.
      </p>

      <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-lg shadow-lg p-6 max-w-3xl">
        <ul>
          {logs.map(({ id, event, time }) => (
            <li key={id} className="mb-4 border-b border-gray-700 pb-2">
              <p className="font-semibold">{event}</p>
              <p className="text-gray-400 text-sm">{time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecurityLogs;
