// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const heroSlides = [
    {
      image: "/images/women/w3.png",
      title: "Empowering Girls Through Education",
      description:
        "Breaking barriers and creating opportunities for young girls to achieve their dreams through quality education and mentorship.",
    },
    {
      image: "/images/NGO-for-Education.jpg",
      title: "Education for Every Child",
      description:
        "Building a foundation for lifelong learning by providing access to quality education for underprivileged children across communities.",
    },
    {
      image: "/images/girls-school.jpg",
      title: "Transforming Lives, One Classroom at a Time",
      description:
        "Creating safe and inspiring learning environments where every girl can thrive and reach her full potential.",
    },
    {
      image: "/images/sports/s6.png",
      title: "Building Tomorrow's Leaders Today",
      description:
        "Nurturing young minds with knowledge, skills, and values to become changemakers in their communities.",
    },
  ];

  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="hero-slider"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-image contain"
              />
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className="hero-buttons">
                  <Link to="/donate" className="btn primary">
                    Donate Now
                  </Link>
                  <Link to="/get-involved" className="btn secondary">
                    Join Us
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
