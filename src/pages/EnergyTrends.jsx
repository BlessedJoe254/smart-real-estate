import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useNavigate } from "react-router-dom";

const data = [
  { month: "April", usage: 320 },
  { month: "May", usage: 290 },
  { month: "June", usage: 340 },
];

const EnergyTrends = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Energy Usage Trends</h1>
      <p className="mb-8 text-gray-300">
        Visual representation of your energy usage for the last two months.
      </p>

      <div className="bg-gradient-to-br from-green-900 to-gray-900 p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#4ade80"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() => navigate("/energy")}
        className="mt-8 btn-subsystem"
      >
        Back to Energy
      </button>
    </div>
  );
};

export default EnergyTrends;
