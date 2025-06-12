import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const ToggleAlarm = () => {
  const [armed, setArmed] = useState(false);

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500 flex items-center gap-3">
        <FaBell /> Toggle Alarm
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Arm or disarm your home alarm system.
      </p>

      <div
        className={`cursor-pointer select-none rounded-lg px-8 py-6 text-2xl font-semibold shadow-lg
          ${
            armed
              ? "bg-gradient-to-br from-red-700 to-red-900 text-white hover:opacity-90"
              : "bg-gradient-to-br from-green-700 to-gray-900 text-gray-400 hover:text-white hover:bg-red-700"
          } transition duration-300 w-48 text-center`}
        onClick={() => setArmed(!armed)}
      >
        {armed ? "Alarm Armed" : "Alarm Disarmed"}
      </div>
    </div>
  );
};

export default ToggleAlarm;
