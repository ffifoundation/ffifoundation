// src/components/Hero.jsx
import React from "react";
import "./Hero.css"; // Add styles for hero section

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Education for Every Child</h1>
        <p>
          Join us in making quality education accessible to underprivileged
          children.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Donate Now</button>
          <button className="btn secondary">Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
