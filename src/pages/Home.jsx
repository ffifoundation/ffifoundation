// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const [heroSlides, setHeroSlides] = useState([]);

  // Dynamically load gallery images for the hero slider
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        // List of gallery images - these are the images in public/images/gallery/
        const images = [
          "A.Roopa Jwalamukhi.jpg.jpeg",
          "B.Bhanuchandar.jpg.jpeg",
          "b.janardhan.jpg.jpeg",
          "B.prasant kumar.jpg.jpeg",
          "B.Sharma.jpg.jpeg",
          // "B.Suneel DSP 2.jpg.jpeg",
          "B.Suneel DSP.jpg.jpeg",
          // "Champions .jpg.jpeg",
          "ELHAM  1.jpg.jpeg",
          "ELHAM 2.jpg.jpeg",
          "ELHAM 4.jpg.jpeg",
          "ELHAM 5.jpg.jpeg",
          "ELHAM 6.jpg.jpeg",
          "ELHAM 7.jpg.jpeg",
          // "ELHAM 8.jpg.jpeg",
          "G.Lakshmi Thanuja.jpg.jpeg",
          "K.Gopinadh.jpg.jpeg",
          "L.Udaya Kumari.jpg.jpeg",
          "P.Naga Malli.jpg.jpeg",
          "S.Vinay Kumar.jpg.jpeg",
          "Shaik Nurjahan Bee.jpg.jpeg",
          "T.Vijaya.jpg.jpeg",
        ];

        const slides = images.map((img) => ({
          image: `/images/gallery/${img}`,
          title: img.replace(".jpg.jpeg", ""),
          description: "Member of our NGO family working towards social change",
        }));

        setHeroSlides(slides);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      }
    };

    loadGalleryImages();
  }, []);

  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        {heroSlides.length > 0 ? (
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
        ) : (
          <p>Loading gallery...</p>
        )}
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
