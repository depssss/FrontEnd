// Login.jsx
import React, { useState } from "react";
import "../app.css"; // Import App.css untuk styling
import LogoIcon from "../assets/logo.svg";
import Gambar from "../assets/gambar.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      alert("Login berhasil");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      {/* Kiri: Form login */}
      <div className="login-form-container h-screen">
        <img src={LogoIcon} alt="SkyBook Logo" className="logo" />
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Welcome to SkyBook – Let’s go in</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-container">
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="forgot-password">Forgot?</p>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>

          <p className="signup-link">
            Don’t have an account?{" "}
            <a href="/signup" className="signup-text">
              Sign Up
            </a>
          </p>
        </form>
      </div>

      {/* Kanan: Background Gambar */}
      <div
        className="login-image-container"
        style={{ backgroundImage: `url(${Gambar})` }}
      ></div>
    </div>
  );
};

export default Login;
