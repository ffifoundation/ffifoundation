// src/pages/Programs.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Programs.css";

const programsData = [
  {
    id: 1,
    title: "Rural Transformation",
    description:
      "Empowering rural communities through sustainable development initiatives, infrastructure improvements, and livelihood opportunities to bridge the urban-rural divide.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    route: "/programs/rural-transformation",
  },
  {
    id: 2,
    title: "Health",
    description:
      "Providing accessible healthcare services, medical camps, awareness programs, and supporting community health initiatives for underserved populations.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    route: "/programs/health",
  },
  {
    id: 3,
    title: "Education",
    description:
      "Promoting quality education through scholarships, digital literacy programs, infrastructure development, and creating learning opportunities for all age groups.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    route: "/programs/education",
  },
  {
    id: 4,
    title: "Sports Development",
    description:
      "Nurturing athletic talent, building sports infrastructure, and promoting physical fitness and sportsmanship among youth and communities.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    route: "/programs/sports-development",
  },
  {
    id: 5,
    title: "Women Empowerment",
    description:
      "Supporting women through skill development, entrepreneurship programs, leadership training, and creating opportunities for economic independence.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    route: "/programs/women-empowerment",
  },
  {
    id: 6,
    title: "Disaster Management",
    description:
      "Providing emergency relief, rehabilitation support, and building community resilience through preparedness training and disaster response systems.",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80",
    route: "/programs/disaster-management",
  },
  {
    id: 7,
    title: "Arts, Culture & Heritage",
    description:
      "Preserving cultural heritage, promoting traditional arts, supporting artisans, and celebrating the rich diversity of our cultural landscape.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    route: "/programs/arts-culture-heritage",
  },
  {
    id: 8,
    title: "Urban Renewal",
    description:
      "Revitalizing urban spaces through sustainable development, waste management, green initiatives, and improving quality of life in cities.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    route: "/programs/urban-renewal",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <section className="programs">
      <div className="programs-header">
        <h1>Our Programs</h1>
        <p>
          We offer a diverse range of programs aimed at creating sustainable
          impact and transforming lives across communities. Explore our
          initiatives and join us in making a difference.
        </p>
      </div>

      <div className="programs-container">
        {programsData.map((program) => (
          <div
            key={program.id}
            className="program-card"
            onClick={() => handleCardClick(program.route)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCardClick(program.route);
              }
            }}
          >
            <div className="program-image-wrapper">
              <img src={program.image} alt={program.title} />
              <div className="program-overlay">
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
            <div className="program-content">
              <h2>{program.title}</h2>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
