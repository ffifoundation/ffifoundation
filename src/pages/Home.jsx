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
            preloadImages={false}
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
          FFI Foundation was formed with a simple yet powerful belief — that
          every individual deserves the opportunity to live with dignity,
          safety, and hope. What began as a shared vision among socially
          conscious individuals has grown into a movement committed to creating
          meaningful and sustainable change in society.
        </p>

        <p>
          The foundation emerged during a time when rapid development created
          opportunities for many but also highlighted deep inequalities
          affecting vulnerable communities. Millions of families continue to
          struggle with poverty, unsafe housing, limited access to education,
          and basic resources.
        </p>

        <p>
          Through collaboration with volunteers, supporters, and communities,
          FFI Foundation works to improve living conditions, promote education,
          support disaster resilience, and create opportunities for a better
          future.
        </p>

        <Link to="/about" className="btn primary">
          Learn More
        </Link>
      </div>

      {/* Why We Do This Section */}
      <div className="why-section">
        <h2>Why We Do This</h2>
        <div className="why-content">
          <div className="why-card">
            <h3>📚 Education Gap</h3>
            <p>
              Millions of children are denied quality education due to poverty,
              discrimination, and lack of resources. Education is the foundation
              for breaking the cycle of poverty and building a better future.
            </p>
          </div>
          <div className="why-card">
            <h3>⚠️ Vulnerability</h3>
            <p>
              Vulnerable communities face challenges from natural disasters,
              health crises, and economic inequalities. They need support
              systems and resilience building to survive and thrive.
            </p>
          </div>
          <div className="why-card">
            <h3>🤝 Empowerment</h3>
            <p>
              Communities deserve opportunities to lead dignified lives. Through
              skill development, healthcare, and livelihood programs, we enable
              people to take control of their destiny.
            </p>
          </div>
          <div className="why-card">
            <h3>🌱 Sustainable Change</h3>
            <p>
              We believe in long-term solutions that address root causes, not
              just symptoms. Our programs focus on creating lasting impact
              through community participation and empowerment.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-section">
        <h2>What We Do</h2>
        <div className="programs-overview">
          <div className="program-item">
            <h3>📖 Education & Skill Development</h3>
            <p>
              We provide quality education, vocational training, and skill
              development programs to underprivileged children and youth,
              enabling them to secure better employment and opportunities.
            </p>
          </div>
          <div className="program-item">
            <h3>🏥 Health & Wellness</h3>
            <p>
              Our health initiatives focus on healthcare access, health
              awareness, nutrition programs, and maternal health support for
              vulnerable communities.
            </p>
          </div>
          <div className="program-item">
            <h3>🏘️ Rural & Urban Development</h3>
            <p>
              We work on infrastructure improvement, livelihood opportunities,
              and sustainable development in both rural and urban areas to
              improve living conditions.
            </p>
          </div>
          <div className="program-item">
            <h3>👩 Women Empowerment</h3>
            <p>
              Through skill training, financial inclusion, and awareness
              programs, we enable women to become independent and participate
              actively in society and decision-making.
            </p>
          </div>
          <div className="program-item">
            <h3>⚡ Disaster Management</h3>
            <p>
              We prepare communities for natural disasters through awareness,
              training, and relief efforts, helping them become resilient and
              self-reliant.
            </p>
          </div>
          <div className="program-item">
            <h3>🎨 Arts, Culture & Heritage</h3>
            <p>
              We preserve and promote local arts, culture, and heritage,
              creating economic opportunities and strengthening cultural
              identity of communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
