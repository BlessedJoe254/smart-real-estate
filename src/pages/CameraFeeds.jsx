import React from "react";
import { FaVideo } from "react-icons/fa";

const CameraFeeds = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500 flex items-center gap-3">
        <FaVideo /> Camera Feeds
      </h1>
      <p className="text-gray-300 mb-6 max-w-xl">
        View live feeds from all your security cameras around the property.
      </p>

      {/* Example camera feed cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((cam) => (
          <div
            key={cam}
            className="bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="w-full h-48 bg-black rounded-md mb-4 flex items-center justify-center text-purple-400 text-2xl">
              Camera Feed {cam}
            </div>
            <p className="text-gray-400">Location: Camera {cam} Zone</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraFeeds;
