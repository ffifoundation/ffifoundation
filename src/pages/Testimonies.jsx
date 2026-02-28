// src/pages/Testimonies.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Testimonies.css";

export const testimonialsData = [
  {
    file: "roopa jwalamukhi potrait main.png",
    name: "A.Roopa Jwalamukhi",
    role: "Bank Employee",
    content:
      "Coming from a humble background, I once doubted my future. But the right mentorship and opportunity transformed my life. Clearing the bank exam was not just my victory — it was proof that talent shines when given a chance.",
  },
  {
    file: "naga malli potrait main.png",
    name: "P. Naga Malli",
    role: "Bank Employee",
    content:
      "Hard work, discipline, and the right mentor can change destiny. I am proud to achieve my goal of a bank job and prove that rural talent can compete anywhere.",
  },
  {
    file: "Banuchandar potrait main.png",
    name: "B.Bhanuchandar",
    role: "Bank Employee",
    content:
      "I was once uncertain about my path, but free coaching and constant motivation helped me discover my potential. Today, my bank job is not just employment — it is dignity, pride, and purpose.",
  },
  {
    file: "Janardhan rao potrait main.png",
    name: "B. Janardhan Rao",
    role: "Bank Employee",
    content:
      "Dreams don’t require money — they require determination and guidance. With the support I received, I turned my struggle into success and secured a bank job. I hope my journey inspires many more students from villages to believe in themselves",
  },
  {
    file: "prasanth kumar potrait main .png",
    name: "B. Prasanth Kumar",
    role: "Government Employee",
    content:
      "Success is sweeter when it comes after struggle. I am proud to achieve my job career and show society that talent never fails.",
  },
  {
    file: "B. Sharma potrait main.png",
    name: "B. Sharma",
    role: "Government Employee",
    content:
      "My journey proves that support and dedication together create miracles. I am proud to make my parents happy and represent rural youth in the Government Jobs sector.",
  },

  {
    file: "G. Lakshmi Thanuja potrait main.png",
    name: "G. Lakshmi Thanuja",
    role: "Police Constable",
    content:
      "Wearing the police uniform is not just a job — it is responsibility and honor. I am proud to serve society and inspire girls from rural areas to dream fearlessly.",
  },

  {
    file: "udaya kumari potrait main.png",
    name: "L. Udaya Kumari",
    role: "Government Employee",
    content:
      "I grew up without the support of parents, but I never allowed my dreams to become orphaned. The guidance and belief I received gave me the strength to achieve my government job and stand proudly in society today. My journey is proof that circumstances do not decide destiny — determination does.",
  },
  {
    file: "vinay kumar potrait main.png",
    name: "S. Vinay Kumar",
    role: "Bank Employee",
    content:
      "Success is not about where you start, but who believes in you when no one else does. I am forever grateful for the guidance and free coaching that helped me achieve my dream bank job. Today, I stand proud — not just for myself, but for my family and every rural student who dares to dream big.",
  },
  {
    file: "Shaik nurjahan Bee potrait main .png",
    name: "Shaik Nurjahan Bee",
    role: "Bank Employee",
    content:
      "When someone believes in your potential, you start believing in yourself. My bank job is a symbol of that belief and perseverance.",
  },
  {
    file: "T. Vijaya main potrait.png",
    name: "T. Vijaya",
    role: "Police Constable",
    content:
      "My success as a police constable is proof that courage and hard work can break every barrier.I hope to motivate many young women to aim higher",
  },
];

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const testimonyArray = testimonialsData.map((item, index) => ({
      id: index + 1,
      image: `/images/updated/${item.file}`,
      name: item.name,
      role: item.role,
      content: item.content,
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
                <Link
                  to={`/testimony/${testimony.id}`}
                  className="testimony-image-wrapper"
                >
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="testimony-image"
                  />
                </Link>
                <div className="testimony-content">
                  <h3 className="testimony-name">{testimony.name}</h3>
                  <p className="testimony-role">{testimony.role}</p>
                  <p className="testimony-text">
                    {testimony.content.substring(0, 100)}
                    {testimony.content.length > 100 ? "..." : ""}
                  </p>
                  <Link
                    to={`/testimony/${testimony.id}`}
                    className="read-more-btn"
                  >
                    Read More
                  </Link>
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
