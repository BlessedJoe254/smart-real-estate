import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl shadow hover:from-orange-600 hover:to-orange-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
