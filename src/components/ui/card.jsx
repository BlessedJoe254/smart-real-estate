import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-gray-800 shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-gray-200 ${className}`}>{children}</div>;
}
