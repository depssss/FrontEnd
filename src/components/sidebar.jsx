import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "E-Money", path: "/emoney" },
    { name: "My Booking", path: "/mybooking" },
    { name: "Saved Passenger Details", path: "/savedpassenger" },
    { name: "My Account", path: "/profil" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-4">
      <div className="mb-6 text-center">
        <img
          src="https://via.placeholder.com/60"
          alt="avatar"
          className="rounded-full mx-auto"
        />
        <p className="mt-2 font-semibold">Ni Wayan Rini Kurniati</p>
        <p className="text-sm text-gray-500">Google</p>
      </div>

      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded ${
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 px-4">
        <Link
          to="/login"
          className="text-red-600 font-semibold hover:underline"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
