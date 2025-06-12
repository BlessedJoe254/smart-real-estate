import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const systems = [
  { name: "Security", status: "running" },
  { name: "Door Lock", status: "stopped" },
  { name: "HVAC", status: "running" },
  { name: "Lighting", status: "running" },
  { name: "Irrigation", status: "stopped" },
  { name: "Fire Detection", status: "running" },
  { name: "Blinds", status: "running" },
  { name: "Energy Monitoring", status: "running" },
  { name: "Doorbell", status: "stopped" },
  { name: "Poultry House", status: "running" },
  { name: "Fish Pond", status: "running" },
  { name: "Electric Fence", status: "running" },
  { name: "Waste Management", status: "stopped" },
  { name: "Clothesline", status: "running" },
  { name: "Robot Assistant", status: "running" },
];

const SystemStatus = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">System Status Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((sys) => (
          <div
            key={sys.name}
            className={`card flex items-center justify-between bg-gradient-to-br from-gray-800 to-gray-900 p-4 ${
              sys.status === "running" ? "border-l-4 border-green-500" : "border-l-4 border-red-500"
            }`}
          >
            <div>
              <h2 className="text-xl font-semibold">{sys.name}</h2>
              <p className="text-gray-400">
                Status:{" "}
                <span className={sys.status === "running" ? "text-green-400" : "text-red-400"}>
                  {sys.status.toUpperCase()}
                </span>
              </p>
            </div>
            <div className="text-3xl">
              {sys.status === "running" ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;
