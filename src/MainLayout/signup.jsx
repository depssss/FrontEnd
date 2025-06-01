import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import LogoIcon from "../assets/logo.svg";
import Gambar from "../assets/gambar.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }), // hanya kirim name, email, password
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register failed");

      alert("Registrasi berhasil!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
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

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>

      <div
        className="login-image-container"
        style={{ backgroundImage: `url(${Gambar})` }}
      ></div>
    </div>
  );
};

export default Signup;
