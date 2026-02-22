// src/pages/TestimonyDetail.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { testimonialsData } from "./Testimonies";
import "./TestimonyDetail.css";

const TestimonyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const testimonialIndex = parseInt(id) - 1;

  if (testimonialIndex < 0 || testimonialIndex >= testimonialsData.length) {
    return (
      <section className="testimony-detail error">
        <div className="error-content">
          <h1>Testimony Not Found</h1>
          <p>Sorry, we couldn't find the testimony you're looking for.</p>
          <Link to="/testimonies" className="back-btn">
            Back to Testimonies
          </Link>
        </div>
      </section>
    );
  }

  const testimony = testimonialsData[testimonialIndex];
  const image = `/images/gallery/${testimony.file}`;

  return (
    <section className="testimony-detail">
      <div className="testimony-detail-container">
        {/* Back Button */}
        <Link to="/testimonies" className="back-btn">
          ← Back to Community
        </Link>

        {/* Main Content */}
        <div className="testimony-detail-content">
          {/* Image Section */}
          <div className="testimony-detail-image-section">
            <img src={image} alt={testimony.name} className="detail-image" />
          </div>

          {/* Text Section */}
          <div className="testimony-detail-text-section">
            <div className="testimony-detail-header">
              <h1 className="detail-name">{testimony.name}</h1>
              <p className="detail-role">{testimony.role}</p>
            </div>

            {/* Content */}
            <div className="testimony-detail-body">
              {testimony.content.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p key={index} className="detail-paragraph">
                      {paragraph}
                    </p>
                  ),
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="testimony-navigation">
              {testimonialIndex > 0 && (
                <Link
                  to={`/testimony/${testimonialIndex}`}
                  className="nav-btn prev-btn"
                >
                  ← Previous
                </Link>
              )}

              {testimonialIndex < testimonialsData.length - 1 && (
                <Link
                  to={`/testimony/${testimonialIndex + 2}`}
                  className="nav-btn next-btn"
                >
                  Next →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonyDetail;
