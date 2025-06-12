import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaToggleOn, FaToggleOff, FaArrowLeft } from "react-icons/fa";

const FenceSafety = () => {
  const navigate = useNavigate();
  const [fenceEnabled, setFenceEnabled] = useState(false);

  const handleEnableFence = () => setFenceEnabled(true);
  const handleDisableFence = () => setFenceEnabled(false);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Fence Safety Controls</h1>
      <p className="mb-8 text-gray-300">Enable or disable the electric fence for safe maintenance or testing.</p>

      <div className="bg-gray-800 p-5 rounded-lg mb-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          {fenceEnabled ? (
            <>
              <FaToggleOn className="text-green-400 text-2xl" />
              Fence is Enabled
            </>
          ) : (
            <>
              <FaToggleOff className="text-red-400 text-2xl" />
              Fence is Disabled
            </>
          )}
        </h3>

        <div className="flex gap-3">
          <button
            onClick={handleEnableFence}
            className={`px-4 py-2 rounded font-semibold ${
              fenceEnabled
                ? "bg-green-700 cursor-not-allowed opacity-60"
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={fenceEnabled}
          >
            Enable Fence
          </button>

          <button
            onClick={handleDisableFence}
            className={`px-4 py-2 rounded font-semibold ${
              !fenceEnabled
                ? "bg-red-700 cursor-not-allowed opacity-60"
                : "bg-red-600 hover:bg-red-700"
            }`}
            disabled={!fenceEnabled}
          >
            Disable Fence
          </button>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md"
      >
        <FaArrowLeft /> Back to Fence
      </button>
    </div>
  );
};

export default FenceSafety;
