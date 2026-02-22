// src/pages/Testimonies.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Testimonies.css";

export const testimonialsData = [
  {
    file: "A.Roopa Jwalamukhi.jpg.jpeg",
    name: "A.Roopa Jwalamukhi",
    role: "Bank Employee",
    content:
      "Coming from a humble background, I once doubted my future. But the right mentorship and opportunity transformed my life. Clearing the bank exam was not just my victory — it was proof that talent shines when given a chance.",
  },
  {
    file: "P.Naga Malli.jpg.jpeg",
    name: "P. Naga Malli",
    role: "Bank Employee",
    content:
      "Hard work, discipline, and the right mentor can change destiny. I am proud to achieve my goal of a bank job and prove that rural talent can compete anywhere.",
  },
  {
    file: "B.Bhanuchandar.jpg.jpeg",
    name: "B.Bhanuchandar",
    role: "Bank Employee",
    content:
      "I was once uncertain about my path, but free coaching and constant motivation helped me discover my potential. Today, my bank job is not just employment — it is dignity, pride, and purpose.",
  },
  {
    file: "b.janardhan.jpg.jpeg",
    name: "B. Janardhan Rao",
    role: "Bank Employee",
    content:
      "Dreams don’t require money — they require determination and guidance. With the support I received, I turned my struggle into success and secured a bank job. I hope my journey inspires many more students from villages to believe in themselves",
  },
  {
    file: "B.prasant kumar.jpg.jpeg",
    name: "B. Prasanth Kumar",
    role: "Government Employee",
    content:
      "Success is sweeter when it comes after struggle. I am proud to achieve my job career and show society that talent never fails.",
  },
  {
    file: "B.Sharma.jpg.jpeg",
    name: "B. Sharma",
    role: "Government Employee",
    content:
      "My journey proves that support and dedication together create miracles. I am proud to make my parents happy and represent rural youth in the Government Jobs sector.",
  },
  {
    file: "B.Suneel DSP.jpg.jpeg",
    name: "B. Suneel",
    role: "Deputy Superintendent of Police",
    content: `Some friends walk with you for a season.
Some friends walk with you for life.

But very few friends carry you when you cannot walk.

When I dropped out of college and worked as a daily wage laborer, he reminded me that education can change destiny.
When I struggled with financial problems, he gave me hope.
When my child was fighting for life, he stood beside my family like his own.
When I lost confidence, he gave me courage.

Today, as a Deputy Superintendent of Police, my success carries his fingerprints everywhere.

L.Narasimha  Rao is not just my friend.
He is my mentor, my guide, my brother, and my strength.

My family and I will remain forever grateful.`,
  },
  {
    file: "G.Lakshmi Thanuja.jpg.jpeg",
    name: "G. Lakshmi Thanuja",
    role: "Police Constable",
    content:
      "Wearing the police uniform is not just a job — it is responsibility and honor. I am proud to serve society and inspire girls from rural areas to dream fearlessly.",
  },
  {
    file: "K.Gopinadh.jpg.jpeg",
    name: "K. Gopinadh",
    role: "Bank Employee",
    content:
      "The path was difficult, but the guidance I received made it possible. Achieving a bank job has given me confidence to inspire others from my village.",
  },
  {
    file: "L.Udaya Kumari.jpg.jpeg",
    name: "L. Udaya Kumari",
    role: "Government Employee",
    content:
      "I grew up without the support of parents, but I never allowed my dreams to become orphaned. The guidance and belief I received gave me the strength to achieve my government job and stand proudly in society today. My journey is proof that circumstances do not decide destiny — determination does.",
  },
  {
    file: "S.Vinay Kumar.jpg.jpeg",
    name: "S. Vinay Kumar",
    role: "Bank Employee",
    content:
      "Success is not about where you start, but who believes in you when no one else does. I am forever grateful for the guidance and free coaching that helped me achieve my dream bank job. Today, I stand proud — not just for myself, but for my family and every rural student who dares to dream big.",
  },
  {
    file: "Shaik Nurjahan Bee.jpg.jpeg",
    name: "Shaik Nurjahan Bee",
    role: "Bank Employee",
    content:
      "When someone believes in your potential, you start believing in yourself. My bank job is a symbol of that belief and perseverance.",
  },
  {
    file: "T.Vijaya.jpg.jpeg",
    name: "T. Vijaya",
    role: "Police Constable",
    content:
      "My success as a police constable is proof that courage and hard work can break every barrier.I hope to motivate many young women to aim higher",
  },

  // ✅ Group / Event photos (fallback content)
  {
    file: "Champions .jpg.jpeg",
    name: "Our Champions",
    role: "Community Achievement",
    content:
      "A proud moment celebrating dedication, perseverance, and collective success.",
  },
  {
    file: "ELHAM 1.jpg.jpeg",
    name: "ELHAM Program",
    role: "Community Initiative",
    content:
      "Empowering rural students through education, mentorship, and opportunity.",
  },
];

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const testimonyArray = testimonialsData.map((item, index) => ({
      id: index + 1,
      image: `/images/gallery/${item.file}`,
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
