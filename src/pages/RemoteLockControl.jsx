import React, { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

const RemoteLockControl = () => {
  const [doors, setDoors] = useState([
    { id: 1, name: "Front Door", locked: true },
    { id: 2, name: "Back Door", locked: false },
    { id: 3, name: "Garage Door", locked: true },
  ]);

  const toggleLock = (id) => {
    setDoors((prevDoors) =>
      prevDoors.map((door) =>
        door.id === id ? { ...door, locked: !door.locked } : door
      )
    );
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-500 flex items-center gap-3">
        Remote Lock Control
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Control your doors remotely by locking or unlocking them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {doors.map(({ id, name, locked }) => (
          <div
            key={id}
            className={`p-6 rounded-lg shadow-lg flex flex-col items-center gap-4
              ${
                locked
                  ? "bg-gradient-to-br from-blue-700 to-blue-900"
                  : "bg-gradient-to-br from-gray-700 to-gray-900"
              }`}
          >
            {locked ? (
              <FaLock className="text-6xl text-white" />
            ) : (
              <FaUnlock className="text-6xl text-white" />
            )}
            <h3 className="text-xl font-semibold">{name}</h3>
            <button
              onClick={() => toggleLock(id)}
              className={`btn-subsystem w-full ${
                locked
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {locked ? "Unlock" : "Lock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteLockControl;
