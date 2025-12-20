// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { MdLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are an NGO dedicated to providing quality education to
            underprivileged children.
          </p>
          <p></p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/get-involved">Get Involved</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h2>Contact Info</h2>
          <div className="address">
            <div className="mail">
              <IoMail style={{ height: 20, width: 20 }} />{" "}
              <p>Info@ffifoundation.org</p>
            </div>
            <div className="mail">
              <MdLocalPhone style={{ height: 20, width: 20 }} />{" "}
              <p>+91 8125252121</p>
            </div>
            <p>
              D.No. 3-29, jayanthipuram village, Jaggayyapet Mandal, NTR
              District, Andhra Pradesh,
            </p>
          </div>

          {/* <div className="social-icons-footer">
            <FaInstagram />
            <RiTwitterXFill />
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
            <FaWhatsapp />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div> */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} NGO Education. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
