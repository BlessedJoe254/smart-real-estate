import React from "react";
import { FaHistory } from "react-icons/fa";

const logs = [
  { id: 1, user: "Alice", door: "Front Door", action: "Unlocked", time: "2025-06-05 08:15" },
  { id: 2, user: "Bob", door: "Garage Door", action: "Locked", time: "2025-06-04 22:45" },
  { id: 3, user: "Carol", door: "Back Door", action: "Unlocked", time: "2025-06-04 20:00" },
];

const LockAccessLogs = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-yellow-500 flex items-center gap-3">
        <FaHistory /> Access Logs
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Review who accessed the doors and when.
      </p>

      <div className="bg-gradient-to-br from-yellow-900 to-gray-900 rounded-lg shadow-lg p-6 max-w-4xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-yellow-600">
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Door</th>
              <th className="py-2 px-4">Action</th>
              <th className="py-2 px-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(({ id, user, door, action, time }) => (
              <tr key={id} className="border-b border-yellow-700 hover:bg-yellow-800">
                <td className="py-2 px-4">{user}</td>
                <td className="py-2 px-4">{door}</td>
                <td className="py-2 px-4">{action}</td>
                <td className="py-2 px-4">{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LockAccessLogs;
