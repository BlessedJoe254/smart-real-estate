import React, { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

const LockStatus = () => {
  // Mock data for door locks
  const [doors] = useState([
    { id: 1, name: "Front Door", locked: true },
    { id: 2, name: "Back Door", locked: false },
    { id: 3, name: "Garage Door", locked: true },
  ]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500 flex items-center gap-3">
        Door Lock Status
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Check whether your doors are locked or unlocked.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {doors.map(({ id, name, locked }) => (
          <div
            key={id}
            className={`p-6 rounded-lg shadow-lg flex items-center gap-4 
              ${
                locked
                  ? "bg-gradient-to-br from-green-700 to-green-900"
                  : "bg-gradient-to-br from-red-700 to-red-900"
              }`}
          >
            {locked ? (
              <FaLock className="text-4xl text-white" />
            ) : (
              <FaUnlock className="text-4xl text-white" />
            )}
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p>{locked ? "Locked" : "Unlocked"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LockStatus;
