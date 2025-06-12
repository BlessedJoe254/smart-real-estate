import React from "react";
import { FaMicrochip } from "react-icons/fa";

const SensorsView = () => {
  const sensors = [
    { id: 1, name: "Front Door Sensor", status: "Active" },
    { id: 2, name: "Back Window Sensor", status: "Inactive" },
    { id: 3, name: "Garage Sensor", status: "Active" },
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500 flex items-center gap-3">
        <FaMicrochip /> Security Sensors
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Monitor the status of all connected security sensors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {sensors.map(({ id, name, status }) => (
          <div
            key={id}
            className={`p-6 rounded-lg shadow-lg 
              ${
                status === "Active"
                  ? "bg-gradient-to-br from-green-700 to-green-900"
                  : "bg-gradient-to-br from-gray-700 to-gray-900 text-gray-400"
              }`}
          >
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p>Status: {status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorsView;
