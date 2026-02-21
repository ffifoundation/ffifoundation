// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // const token = localStorage.getItem("adminToken");

  // const logout = () => {
  //   localStorage.removeItem("adminToken");
  //   localStorage.removeItem("role");
  //   navigate("/admin-login");
  // };

  const programMenuItems = [
    { label: "Rural Transformation", path: "/programs/rural-transformation" },
    { label: "Health", path: "/programs/health" },
    { label: "Education", path: "/programs/education" },
    { label: "Sports for Development", path: "/programs/sports-development" },
    { label: "Women Empowerment", path: "/programs/women-empowerment" },
    { label: "Disaster Management", path: "/programs/disaster-management" },
    {
      label: "Arts, Culture & Heritage",
      path: "/programs/arts-culture-heritage",
    },
    { label: "Urban Renewal", path: "/programs/urban-renewal" },
  ];

  const handleProgramClick = (path) => {
    navigate(path);
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const isProgramsActive = location.pathname.startsWith("/programs");

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
        <li>
          <NavLink
            to="/testimonies"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Testimonies
          </NavLink>
        </li>
        {/* Programs Dropdown for Desktop */}
        {width > 768 ? (
          <li
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <div
              className={`dropdown-trigger ${isProgramsActive ? "active" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Programs
              <IoChevronDown
                className={`chevron-icon ${dropdownOpen ? "rotate" : ""}`}
              />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {programMenuItems.map((item, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleProgramClick(item.path)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </li>
        ) : (
          /* Programs Dropdown for Mobile */
          <li className="mobile-dropdown">
            <div
              className={`dropdown-trigger ${isProgramsActive ? "active" : ""}`}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Programs
              <IoChevronDown
                className={`chevron-icon ${mobileDropdownOpen ? "rotate" : ""}`}
              />
            </div>
            {mobileDropdownOpen && (
              <div className="mobile-dropdown-menu">
                {programMenuItems.map((item, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleProgramClick(item.path)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </li>
        )}

        {/* {token ? (
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
        )} */}
      </ul>
    </nav>
  );
};

export default Navbar;
