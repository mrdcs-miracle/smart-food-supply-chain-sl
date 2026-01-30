// src/Dashboard/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/dashboard', label: 'Overview', icon: '📊' },
    { path: '/dashboard/stocks', label: 'Stock Management', icon: '📦' }, // Combined Page
    { path: '/dashboard/reports', label: 'Reports', icon: 'd📄' }, // Your requested Reports
    { path: '/dashboard/alerts', label: 'Alerts & SMS', icon: '🔔' }, // Your requested Alerts
  ];

  return (
    <div className="fixed top-0 left-0 flex flex-col w-64 h-screen text-white bg-green-900 shadow-2xl">

      {/* 1. Logo Area */}
      <div className="flex items-center gap-2 p-6 text-2xl font-bold border-b border-green-800">
        <span>🌱</span> Lk Supply
      </div>

      {/* 2. Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 
              ${isActive(item.path)
                ? 'bg-green-600 text-white shadow-lg translate-x-1'
                : 'text-green-100 hover:bg-green-800 hover:text-white'
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* 3. User Profile (Small Footer) */}
      <div className="p-4 border-t border-green-800">
        <div className="flex items-center gap-3 p-3 bg-green-800 rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 font-bold bg-green-500 rounded-full">
            M
          </div>
          <div>
            <p className="text-sm font-bold">Manager</p>
            <p className="text-xs text-green-300">Gov. Official</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
