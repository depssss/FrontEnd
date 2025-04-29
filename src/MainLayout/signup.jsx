import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/gambar.svg";
import LogoIcon from "../assets/logo.svg";

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <img src={LogoIcon} alt="SkyBook Logo" className="w-32 mb-4" />
        <h1 className="text-3xl font-bold mb-1">Sign Up</h1>
        <p className="mb-6 text-gray-600 text-center">
          Join SkyBook – Create your account
        </p>
        <hr className="w-3/4 mb-6 border-gray-400" />

        <form className="w-full max-w-sm">
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />

          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Create a password"
          />

          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-bold py-3 rounded hover:bg-blue-500 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
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

export default SignUp;
