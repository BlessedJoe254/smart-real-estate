import React from 'react';

const Card = ({ icon, title, description, buttonText, onClick }) => (
  <div className="card">
    <div className="flex items-center mb-4">
      <div className="text-orange-500 text-3xl mr-4">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <p className="mb-4 text-gray-300">{description}</p>
    <button
      onClick={onClick}
      className="btn-subsystem"
    >
      {buttonText}
    </button>
  </div>
);

export default Card;
