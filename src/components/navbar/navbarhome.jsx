import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const Navbarhome = ({ isLoggedIn, userName }) => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to={"/"}> <img src={logo} alt="logo" className="h-20" /> </Link>

      <ul className="flex space-x-6 text-sm font-medium">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/hotels" className="hover:text-blue-500">Hotels</Link></li>
        <li><Link to="/flights" className="hover:text-blue-500">Flights</Link></li>
        <li><Link to="/promo" className="hover:text-blue-500">Promo</Link></li>
      </ul>

      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="px-4 py-2 text-sm font-semibold border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Register
              </button>
            </Link>
          </>
        ) : (
          <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-500">
            <span className="font-medium">{userName}</span>
            <FaUserCircle size={22} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbarhome;
