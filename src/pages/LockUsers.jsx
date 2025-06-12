import React from "react";
import { FaUserPlus, FaUserTimes } from "react-icons/fa";

const LockUsers = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Manage Lock Users</h1>
      <p className="text-gray-300 mb-6 max-w-2xl">
        Add or remove users who have access to the smart door locks. Ensure only authorized individuals can control the locks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add User */}
        <div className="bg-gradient-to-br from-purple-700 to-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaUserPlus className="text-3xl text-green-400 mr-4" />
            <h2 className="text-xl font-semibold">Add User</h2>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
            />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">
              Add User
            </button>
          </form>
        </div>

        {/* Remove User */}
        <div className="bg-gradient-to-br from-purple-700 to-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaUserTimes className="text-3xl text-red-400 mr-4" />
            <h2 className="text-xl font-semibold">Remove User</h2>
          </div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="User Email to Remove"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">
              Remove User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LockUsers;
