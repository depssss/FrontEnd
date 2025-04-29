import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/gambar.svg";
import LogoIcon from "../assets/logo.svg";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <img src={LogoIcon} alt="SkyBook Logo" className="w-32 mb-4" />
        <h1 className="text-3xl font-bold mb-1">Login</h1>
        <p className="mb-6 text-gray-600 text-center">
          Welcome to SkyBook – Let’s go in
        </p>
        <hr className="w-3/4 mb-6 border-gray-400" />

        <form className="w-full max-w-sm">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />

          <div className="flex justify-end text-sm text-gray-500 mb-4">
            <Link to="/forgot" className="hover:underline">
              Forgot?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-bold py-3 rounded hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={Background}
          alt="Beach Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
