import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // adjust path if needed

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/security', label: 'Security' },
  { to: '/door-lock', label: 'Door Lock' },
  { to: '/hvac', label: 'HVAC' },
  { to: '/lighting', label: 'Lighting' },
  { to: '/irrigation', label: 'Irrigation' },
  { to: '/fire-detection', label: 'Fire Detection' },
  { to: '/blinds', label: 'Blinds' },
  { to: '/energy', label: 'Energy Monitoring' },
  { to: '/doorbell', label: 'Doorbell' },
  { to: '/poultry', label: 'Poultry House' },
  { to: '/fish-pond', label: 'Fish Pond' },
  { to: '/fence', label: 'Electric Fence' },
  { to: '/waste', label: 'Waste Management' },
  { to: '/clothesline', label: 'Clothesline' },
  { to: '/robot', label: 'Robot Assistant' },
];

export default function Sidebar() {
  return (
    <nav className="bg-gray-900 text-white w-60 min-h-screen p-4 flex flex-col space-y-1.5 sticky top-0">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="JP Logo" className="h-32 object-contain" />
      </div>
      <div className="border-b border-gray-700 mb-4" />
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `block px-3 py-1 rounded-md hover:bg-gray-700 transition-colors ${
              isActive ? 'bg-blue-600 font-semibold' : 'font-normal'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
