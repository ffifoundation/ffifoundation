// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink instead of Link
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const token = localStorage.getItem("adminToken");
  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("role");
    navigate("/admin-login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src="/images/fortune_logo.jpg" alt="NGO Logo" />
        </NavLink>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      {width <= 768 && (
        <FaBars
          className="menu-icon"
          style={{ color: "black" }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/programs"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-involved"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Get Involved
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        {token ? (
          <>
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Transactions
              </NavLink>
            </li>
            <li style={{ backgroundColor: "white" }}>
              <button
                className="logout-btn"
                onClick={() => {
                  setMenuOpen(false);
                  logout();
                }}
                aria-label="Logout"
                title="Logout"
              >
                <IoMdLogOut
                  className="logout-icon"
                  style={{ color: "#ff9800" }}
                />
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to="/admin-login"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Admin Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
