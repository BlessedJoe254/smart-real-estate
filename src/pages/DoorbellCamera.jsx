import React from 'react';

const DoorbellCamera = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Doorbell Camera Feed</h1>
      <p className="mb-6 text-gray-300">
        View the live feed from your doorbell's built-in camera.
      </p>

      <div className="aspect-video bg-gray-800 rounded flex items-center justify-center text-gray-500 text-xl">
        [ Live Camera Feed Placeholder ]
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 transition"
      >
        Back to Doorbell
      </button>
    </div>
  );
};

export default DoorbellCamera;
