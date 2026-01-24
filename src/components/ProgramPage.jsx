// src/components/ProgramPage.jsx
import React from "react";
import "./Programpage.css";

const ProgramPage = ({
  title,
  description,
  heroImage,
  mission,
  vision,
  impact,
  features,
  gallery,
  stats,
}) => {
  return (
    <div className="program-page">
      {/* Hero Section */}
      <div
        className="program-hero"
        style={{
          backgroundImage: heroImage ? `url(${heroImage})` : "none",
          backgroundColor: heroImage ? "transparent" : "#f8f9fa",
        }}
      >
        {heroImage && <div className="program-hero-overlay"></div>}
        <div className="program-hero-content">
          <h1 className="program-title">{title}</h1>
          <p className="program-description">{description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="program-content-wrapper">
        {/* Mission, Vision, Impact Cards */}
        {(mission || vision || impact) && (
          <div className="mvi-section">
            {mission && (
              <div className="mvi-card">
                <div className="mvi-icon">🎯</div>
                <h2>Our Mission</h2>
                <p>{mission}</p>
              </div>
            )}
            {vision && (
              <div className="mvi-card">
                <div className="mvi-icon">👁️</div>
                <h2>Our Vision</h2>
                <p>{vision}</p>
              </div>
            )}
            {impact && (
              <div className="mvi-card">
                <div className="mvi-icon">⭐</div>
                <h2>Our Impact</h2>
                <p>{impact}</p>
              </div>
            )}
          </div>
        )}

        {/* Statistics Section */}
        {stats && stats.length > 0 && (
          <div className="stats-section">
            <h2 className="section-title">Impact in Numbers</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features/Programs Section */}
        {features && features.length > 0 && (
          <div className="features-section">
            <h2 className="section-title">What We Do</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  {feature.image && (
                    <div className="feature-image">
                      <img src={feature.image} alt={feature.title} />
                    </div>
                  )}
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {gallery && gallery.length > 0 && (
          <div className="gallery-section">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={image.url}
                    alt={image.caption || `Gallery ${index + 1}`}
                  />
                  {image.caption && (
                    <p className="gallery-caption">{image.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramPage;
