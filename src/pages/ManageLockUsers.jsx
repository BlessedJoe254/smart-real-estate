import React, { useState } from "react";
import { FaUsers, FaUserPlus, FaUserTimes } from "react-icons/fa";

const ManageLockUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", access: true },
    { id: 2, name: "Bob", access: true },
    { id: 3, name: "Carol", access: false },
  ]);
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (!newUser.trim()) return;
    setUsers([...users, { id: Date.now(), name: newUser.trim(), access: true }]);
    setNewUser("");
  };

  const toggleAccess = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, access: !u.access } : u));
  };

  const removeUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="p-6 text-white max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-purple-500 flex items-center gap-3">
        <FaUsers /> Manage Lock Users
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        Add or remove users who have access to the smart door locks.
      </p>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter new user name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="flex-grow rounded-md px-4 py-2 text-black"
        />
        <button
          onClick={addUser}
          className="btn-subsystem bg-green-600 hover:bg-green-700 flex items-center gap-2"
        >
          <FaUserPlus /> Add User
        </button>
      </div>

      <div className="space-y-4">
        {users.map(({ id, name, access }) => (
          <div
            key={id}
            className="bg-gradient-to-br from-purple-800 to-gray-900 rounded-lg shadow-lg p-4 flex justify-between items-center"
          >
            <span>{name}</span>
            <div className="flex gap-3">
              <button
                onClick={() => toggleAccess(id)}
                className={`btn-subsystem px-4 py-1 ${
                  access ? "bg-yellow-600 hover:bg-yellow-700" : "bg-gray-600 hover:bg-gray-700"
                }`}
              >
                {access ? "Revoke Access" : "Grant Access"}
              </button>
              <button
                onClick={() => removeUser(id)}
                className="btn-subsystem bg-red-600 hover:bg-red-700 px-3 py-1 flex items-center gap-1"
              >
                <FaUserTimes /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageLockUsers;
