// src/pages/Programs.jsx
import React from "react";
import "./Programs.css"; // Import the CSS file for styling

const programsData = [
  {
    id: 1,
    title: "Primary Education",
    description: "Providing fundamental education to underprivileged children.",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201601/primary-education-647_011416034139.jpg?VersionId=9hnTVDil.c4OUYexC_HtZVGI1vnAcAK0",
  },
  {
    id: 2,
    title: "Digital Literacy",
    description: "Empowering children with essential digital skills.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMFt4NPbAvuhkbLbONGTxxE9INcxidjkdZw&s",
  },
  {
    id: 3,
    title: "Scholarship Program",
    description:
      "Supporting talented students with scholarships for higher education.",
    image:
      "https://petramayerconsulting.com/wp-content/uploads/2022/04/Blog-Image-LEARNING-design.png",
  },
  {
    id: 4,
    title: "Adult Learning",
    description:
      "Offering education opportunities to adults to improve their literacy and skills.",
    image: "/images/image.png",
  },
];

const Programs = () => {
  return (
    <section className="programs">
      <h1>Our Programs</h1>
      <p>
        We offer a variety of educational programs to create a better future for
        all.
      </p>

      <div className="programs-container">
        {programsData.map((program) => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.title} />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
