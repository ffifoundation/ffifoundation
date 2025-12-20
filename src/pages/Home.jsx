// src/pages/Home.jsx
import React from "react";
import "./Home.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const heroImages = [
    "/images/girls.jpg",
    "/images/NGO-for-Education.jpg",
    "/images/girls-school.jpg",
    "/images/students.jpg",
  ];

  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="hero-slider"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}

          <div className="hero-text">
            <h1>Education for a Better Future</h1>
            <p>
              Empowering underprivileged children through quality education.
            </p>
            <div className="hero-buttons">
              <Link to="/donate" className="btn primary">
                Donate Now
              </Link>
              <Link to="/get-involved" className="btn secondary">
                Join Us
              </Link>
            </div>
          </div>
        </Swiper>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>Who We Are</h2>
        <p>
          We are a non-profit organization committed to providing quality
          education to children in need. Our programs focus on literacy, digital
          skills, and scholarship opportunities to create a brighter future.
        </p>
        <Link to="/about" className="btn primary">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Home;
