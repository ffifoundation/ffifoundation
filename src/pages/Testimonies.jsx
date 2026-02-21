// src/pages/Testimonies.jsx
import React, { useState, useEffect } from "react";
import "./Testimonies.css";

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);

  // Load gallery images as testimonies
  useEffect(() => {
    const images = [
      "A.Roopa Jwalamukhi.jpg.jpeg",
      "B.Bhanuchandar.jpg.jpeg",
      "b.janardhan.jpg.jpeg",
      "B.prasant kumar.jpg.jpeg",
      "B.Sharma.jpg.jpeg",
      "B.Suneel DSP 2.jpg.jpeg",
      "B.Suneel DSP.jpg.jpeg",
      "Champions .jpg.jpeg",
      "ELHAM  1.jpg.jpeg",
      "ELHAM 2.jpg.jpeg",
      "ELHAM 4.jpg.jpeg",
      "ELHAM 5.jpg.jpeg",
      "ELHAM 6.jpg.jpeg",
      "ELHAM 7.jpg.jpeg",
      "ELHAM 8.jpg.jpeg",
      "G.Lakshmi Thanuja.jpg.jpeg",
      "K.Gopinadh.jpg.jpeg",
      "L.Udaya Kumari.jpg.jpeg",
      "P.Naga Malli.jpg.jpeg",
      "S.Vinay Kumar.jpg.jpeg",
      "Shaik Nurjahan Bee.jpg.jpeg",
      "T.Vijaya.jpg.jpeg",
    ];

    const testimonyArray = images.map((img) => ({
      id: img,
      image: `/images/gallery/${img}`,
      name: img.replace(".jpg.jpeg", ""),
      role: "Community Member",
      content:
        "A dedicated member of our NGO family, working tirelessly towards creating positive social change in the community.",
    }));

    setTestimonies(testimonyArray);
  }, []);

  return (
    <section className="testimonies">
      {/* Header */}
      <div className="testimonies-header">
        <h1>Our Community</h1>
        <p>Meet the amazing people who make our mission possible</p>
      </div>

      {/* Testimonies Grid */}
      <div className="testimonies-container">
        {testimonies.length > 0 ? (
          <div className="testimonies-grid">
            {testimonies.map((testimony) => (
              <div key={testimony.id} className="testimony-card">
                <div className="testimony-image-wrapper">
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="testimony-image"
                  />
                </div>
                <div className="testimony-content">
                  <h3 className="testimony-name">{testimony.name}</h3>
                  <p className="testimony-role">{testimony.role}</p>
                  <p className="testimony-text">{testimony.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading testimonies...</p>
        )}
      </div>
    </section>
  );
};

export default Testimonies;
