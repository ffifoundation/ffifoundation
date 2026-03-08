// src/pages/GetInvolved.jsx
import React from "react";
import "./GetInvolved.css"; // Import the CSS for styling
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <section className="get-involved">
      <h1>Get Involved</h1>
      <p className="intro-text">
        Join us in our mission to empower communities and create lasting change.
        There are many ways you can contribute to our cause.
      </p>

      <div className="involvement-options">
        <div className="involvement-card">
          <img src="/images/volunter.jpg" alt="Volunteer" />
          <h2>🤝 Volunteer</h2>
          <p>
            Share your skills, time, and passion with us. Whether you can give a
            few hours a month or become a regular volunteer, your contribution
            directly impacts the lives of thousands. We have opportunities in
            education, healthcare, community outreach, skills training, and
            more.
          </p>
          <div className="involvement-details">
            <h4>What volunteers do:</h4>
            <ul>
              <li>Teach and mentor underprivileged children</li>
              <li>Conduct health and awareness camps</li>
              <li>Provide vocational training</li>
              <li>Support community development projects</li>
              <li>Help with disaster relief efforts</li>
            </ul>
          </div>
          <Link to="/signup" className="btn primary">
            SignUp as Volunteer
          </Link>
        </div>

        <div className="involvement-card">
          <img src="/images/donate.jpg" alt="Donate" />
          <h2>💝 Donate</h2>
          <p>
            Your financial contributions enable us to expand our programs, reach
            more communities, and create sustainable change. Every donation,
            regardless of amount, makes a meaningful difference in improving
            someone's life. We ensure 100% transparency in how funds are
            utilized.
          </p>
          <div className="involvement-details">
            <h4>Where your donation goes:</h4>
            <ul>
              <li>Education & Scholarships - 30%</li>
              <li>Healthcare & Wellness - 20%</li>
              <li>Skills & Livelihood Training - 25%</li>
              <li>Community Development - 15%</li>
              <li>Disaster Relief & Emergency Aid - 10%</li>
            </ul>
          </div>
          <Link to="/donate" className="btn primary">
            Donate Now
          </Link>
        </div>

        <div className="involvement-card">
          <img src="/images/partnerwith_us.jpg" alt="Partner with Us" />
          <h2>🤲 Partner with Us</h2>
          <p>
            Collaborate with us to create long-lasting systemic change. We
            welcome partnerships with businesses, educational institutions,
            government bodies, and other organizations. Together, we can scale
            our impact and reach more communities in need.
          </p>
          <div className="involvement-details">
            <h4>Partnership opportunities:</h4>
            <ul>
              <li>Corporate Social Responsibility (CSR) programs</li>
              <li>Educational institution partnerships</li>
              <li>Government collaboration for community projects</li>
              <li>Business support and mentorship programs</li>
              <li>Skill development with industry partners</li>
            </ul>
          </div>
          <Link to="/contact" className="btn primary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Additional Ways to Help */}
      <div className="additional-ways">
        <h2>Other Ways to Help</h2>
        <div className="ways-grid">
          <div className="way-card">
            <h3>📱 Share & Spread Awareness</h3>
            <p>
              Help us reach more people by sharing our mission on social media,
              talking about our programs, and becoming an ambassador for our
              cause.
            </p>
          </div>
          <div className="way-card">
            <h3>🎯 Professional Services</h3>
            <p>
              Professionals in fields like law, accounting, healthcare, and
              technology can contribute pro-bono services to strengthen our
              organization.
            </p>
          </div>
          <div className="way-card">
            <h3>🎁 In-Kind Donations</h3>
            <p>
              Donate books, educational materials, medical supplies, clothing,
              or technology equipment to support our programs and beneficiaries.
            </p>
          </div>
          <div className="way-card">
            <h3>🎓 Mentorship & Training</h3>
            <p>
              Share your expertise and mentor young people. Whether it's career
              guidance, skill training, or personal development, your mentorship
              can change lives.
            </p>
          </div>
        </div>
      </div>

      {/* Impact of Contribution */}
      <div className="impact-section">
        <h2>Your Impact</h2>
        <div className="impact-items">
          <div className="impact-item">
            <p>
              <strong>₹500</strong> provides school supplies for one child for a
              month
            </p>
          </div>
          <div className="impact-item">
            <p>
              <strong>₹2,000</strong> funds vocational training for one person
            </p>
          </div>
          <div className="impact-item">
            <p>
              <strong>₹5,000</strong> supports a health camp for 50+ people
            </p>
          </div>
          <div className="impact-item">
            <p>
              <strong>₹10,000</strong> sponsors education for one child for a
              year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
