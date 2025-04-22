// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // untuk pindah halaman
import "../app.css";
import LogoIcon from "../assets/logo.svg";
import Gambar from "../assets/gambar.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Guest");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register failed");

      alert("Registrasi berhasil!");
      navigate("/login"); // pindah ke halaman login
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      {/* Kiri: Form signup */}
      <div className="login-form-container h-screen">
        <img src={LogoIcon} alt="SkyBook Logo" className="logo" />
        <h2 className="login-title">Sign Up</h2>
        <p className="login-subtitle">Join SkyBook and start your journey!</p>

        <form className="login-form" onSubmit={handleSignup}>
          <div className="input-container">
            <label className="input-label">Name</label>
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
          </div>

          <div className="input-container">
            <label className="input-label">Role</label>
            <select
              className="input-field"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Guest">Guest</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
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

export default Signup;
