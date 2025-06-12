import React from "react";
import { NavLink } from "react-router-dom";
import { FaFan, FaTemperatureHigh, FaThermometerHalf, FaSnowflake } from "react-icons/fa";

const HVAC = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">HVAC System</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        Control your heating, ventilation, and air conditioning for optimal comfort and efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Fan Speed */}
        <div className="card bg-gradient-to-br from-purple-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaFan className="text-5xl text-purple-400 mb-4 animate-spin-slow" />
          <h2 className="text-xl font-semibold mb-2">Fan Speed</h2>
          <p className="text-gray-400 mb-4">Adjust the speed of your HVAC fan.</p>
          <NavLink to="/fan-speed" className="btn-subsystem">Set Speed</NavLink>
        </div>

        {/* Heating */}
        <div className="card bg-gradient-to-br from-red-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaTemperatureHigh className="text-5xl text-red-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Heating</h2>
          <p className="text-gray-400 mb-4">Manage heating settings and schedules.</p>
          <NavLink to="/heating-control" className="btn-subsystem">Control Heating</NavLink>
        </div>

        {/* Temperature */}
        <div className="card bg-gradient-to-br from-yellow-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaThermometerHalf className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Temperature</h2>
          <p className="text-gray-400 mb-4">Set desired temperature for your home.</p>
          <NavLink to="/set-temperature" className="btn-subsystem">Set Temperature</NavLink>
        </div>

        {/* Cooling */}
        <div className="card bg-gradient-to-br from-blue-900 to-gray-900 hover:scale-105 transform transition duration-300">
          <FaSnowflake className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cooling</h2>
          <p className="text-gray-400 mb-4">Manage air conditioning settings and schedules.</p>
          <NavLink to="/cooling-control" className="btn-subsystem">Control Cooling</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HVAC;
