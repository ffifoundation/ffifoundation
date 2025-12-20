// src/pages/About.jsx
import React from "react";
import "./About.css"; // Import CSS file for styling

const About = () => {
  return (
    <section className="about">
      <h1>About Us</h1>
      <p>
        We are a non-profit organization dedicated to providing education for
        underprivileged children.
      </p>

      <div className="about-container">
        {/* Mission Section */}
        <div className="about-card">
          <img src="/images/boy.jpg" alt="Our Mission" />
          <h2>Our Mission</h2>
          <p>
            To provide quality education to children in need, empowering them
            for a brighter future.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-card">
          <img src="/images/child.jpg" alt="Our Vision" />
          <h2>Our Vision</h2>
          <p>
            A world where every child has access to education, regardless of
            their background.
          </p>
        </div>

        {/* Impact Section */}
        <div className="about-card">
          <img src="/images/students.jpg" alt="Our Impact" />
          <h2>Our Impact</h2>
          <p>
            We have helped over 10,000 children access education through our
            programs and scholarships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
