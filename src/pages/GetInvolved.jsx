// src/pages/GetInvolved.jsx
import React from "react";
import "./GetInvolved.css"; // Import the CSS for styling
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <section className="get-involved">
      <h1>Get Involved</h1>
      <p>
        Join us in making a difference! Explore different ways to support our
        mission.
      </p>

      <div className="involvement-options">
        <div className="involvement-card">
          <img src="/images/volunter.jpg" alt="Volunteer" />
          <h2>Volunteer</h2>
          <p>
            Give your time and skills to help educate children in need.Who need
            Education
          </p>
          <Link to="/signup" className="btn primary">
            SignUp
          </Link>
        </div>

        <div className="involvement-card">
          <img src="/images/donate.jpg" alt="Donate" />
          <h2>Donate</h2>
          <p>
            Your contributions help provide resources and education to
            underprivileged children.
          </p>
          <Link to="/donate" className="btn primary">
            Donate Now
          </Link>
        </div>

        <div className="involvement-card">
          <img src="/images/partnerwith_us.jpg" alt="Partner with Us" />
          <h2>Partner with Us</h2>
          <p>
            Collaborate with us to create long-lasting change in education.Help
            to Move Forward
          </p>
          <Link to="/contact" className="btn primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
