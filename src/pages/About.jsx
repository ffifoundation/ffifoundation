// src/pages/About.jsx
import React from "react";
import "./About.css"; // Import CSS file for styling

const About = () => {
  return (
    <section className="about">
      <h1>About FFI Foundation</h1>
      <p className="intro-text">
        We are a non-profit organization dedicated to empowering vulnerable
        communities through quality education, healthcare, skill development,
        and sustainable development initiatives.
      </p>

      <div className="about-container">
        {/* Mission Section */}
        <div className="about-card">
          <img src="/images/girl-boy.jpg" alt="Our Mission" />
          <h2>Our Mission</h2>
          <p>
            To empower marginalized communities with quality education, health,
            skills, and livelihood opportunities, enabling them to live with
            dignity and build a better future for themselves and their families.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-card">
          <img src="/images/child.jpg" alt="Our Vision" />
          <h2>Our Vision</h2>
          <p>
            A just and equitable society where every individual has access to
            quality education, healthcare, safe living conditions, and economic
            opportunities, regardless of their background or circumstances.
          </p>
        </div>

        {/* Impact Section */}
        <div className="about-card">
          <img src="/images/students.jpg" alt="Our Impact" />
          <h2>Our Impact</h2>
          <p>
            We have impacted thousands of lives through education programs,
            healthcare initiatives, skill training, and livelihood projects,
            transforming communities and creating pathways out of poverty.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🤝 Compassion</h3>
            <p>
              We approach every community with empathy and genuine care,
              understanding their struggles and working alongside them with
              respect and dignity.
            </p>
          </div>
          <div className="value-card">
            <h3>♻️ Sustainability</h3>
            <p>
              We design programs that address root causes and create lasting
              change, building community capacity for long-term development and
              self-reliance.
            </p>
          </div>
          <div className="value-card">
            <h3>🤲 Transparency</h3>
            <p>
              We maintain complete transparency in our operations, finances, and
              impact reporting, ensuring accountability to our stakeholders and
              beneficiaries.
            </p>
          </div>
          <div className="value-card">
            <h3>🌍 Inclusion</h3>
            <p>
              We ensure that all community members, including marginalized
              groups, women, and minorities, are included and empowered in our
              programs.
            </p>
          </div>
          <div className="value-card">
            <h3>💡 Innovation</h3>
            <p>
              We embrace innovative approaches and best practices to maximize
              impact, continuously learning and adapting our strategies for
              greater effectiveness.
            </p>
          </div>
          <div className="value-card">
            <h3>🙌 Partnership</h3>
            <p>
              We believe in collaborative partnerships with communities,
              government, businesses, and civil society to amplify our impact
              and reach.
            </p>
          </div>
        </div>
      </div>

      {/* Key Focus Areas */}
      <div className="focus-areas">
        <h2>Our Key Focus Areas</h2>
        <div className="focus-grid">
          <div className="focus-item">
            <h3>Education & Skill Development</h3>
            <ul>
              <li>Quality education for underprivileged children</li>
              <li>Vocational and skill training programs</li>
              <li>Scholarship programs for deserving students</li>
              <li>Digital literacy and tech skill development</li>
            </ul>
          </div>
          <div className="focus-item">
            <h3>Health & Wellness</h3>
            <ul>
              <li>Healthcare access and medical camps</li>
              <li>Health awareness and nutrition programs</li>
              <li>Maternal and child health support</li>
              <li>Mental health and wellness initiatives</li>
            </ul>
          </div>
          <div className="focus-item">
            <h3>Women Empowerment</h3>
            <ul>
              <li>Self-help groups and cooperative societies</li>
              <li>Income generation and livelihood programs</li>
              <li>Financial literacy and inclusion</li>
              <li>Safety and rights awareness</li>
            </ul>
          </div>
          <div className="focus-item">
            <h3>Community Development</h3>
            <ul>
              <li>Rural and urban infrastructure projects</li>
              <li>Disaster management and resilience building</li>
              <li>Environmental conservation initiatives</li>
              <li>Sports and cultural development programs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-section">
        <h2>Our Journey & Impact</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Children Educated</p>
          </div>
          <div className="stat-card">
            <h3>5,000+</h3>
            <p>Lives Transformed</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Villages Reached</p>
          </div>
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Active Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
