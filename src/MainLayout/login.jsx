import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import LogoIcon from "../assets/logo.svg";
import Gambar from "../assets/gambar.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // Simpan token dan role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      alert("Login berhasil!");

      // Arahkan berdasarkan email admin
      if (email === "admin@gmail.com") {
        navigate("/dashboard"); // atau "/admin/dashboard" jika path-nya begitu
      } else {
        navigate("/user/dashboard");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container h-screen">
        <img src={LogoIcon} alt="SkyBook Logo" className="logo" />
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Welcome back to SkyBook!</p>

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
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>

      <div
        className="login-image-container"
        style={{ backgroundImage: `url(${Gambar})` }}
      ></div>
    </div>
  );
};

export default Login;
