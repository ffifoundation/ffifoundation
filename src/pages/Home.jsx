// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const [heroSlides, setHeroSlides] = useState([]);

  // Dynamically load gallery images for the hero slider
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        // List of main images - these are the images in public/images/home/
        const images = [
          "A. Roopa Jwalamukhi.png",
          "B. Janardhan Rao.png",
          "B. Sharma.png",
          "B. suneel.png",
          "Banuchandar.png",
          "Elham.png",
          "G. Laxmi Thanuja.png",
          "Gopinadh.png",
          "Naga Malli.png",
          "Prasanth Kumar.png",
          "Shaik Nurjahan bee.png",
          "Shiva Krishna.png",
          "T. Vijaya.png",
          "Udaya Kumari.png",
          "vinay kumar.png",
        ];

        const slides = images.map((img) => ({
          image: `/images/home/${img}`,
          title: img.replace(".png", ""),
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
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="hero-slider"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="hero-slide-image contain"
                />
                {/* <div className="hero-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div> */}
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
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
