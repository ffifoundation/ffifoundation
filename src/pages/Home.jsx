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
          "B. suneel.png", // 1
          "B. Sharma.png", // 2
          "vinay kumar.png", // 3
          "Naga Malli.png", // 4
          "B. Janardhan Rao.png", // 5
          "Gopinadh.png", // 6
          "A. Roopa Jwalamukhi.png", // 7
          "Banuchandar.png", // 8
          "Shaik Nurjahan bee.png", // 9
          "Shiva Krishna.png", // 10
          "Udaya Kumari.png", // 11
          "P.Anusha.png", // 12
          "Prasanth Kumar.png", // 13
          "G. Laxmi Thanuja.png", // 14
          "T. Vijaya.png", // 15
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

        <p>Rooted in India. Committed to Every Indian.</p>

        <p>
          India is not just a country. India is an emotion — woven with
          resilience, sacrifice, diversity, and hope.
        </p>

        <p>
          Fortunate Future International Foundation was born from this very
          emotion.
        </p>

        <p>
          As Indians, we grow up witnessing both extraordinary progress and
          silent struggles — children with dreams but limited access, women with
          strength but fewer opportunities, villages rich in wisdom yet deprived
          of resources, and families that rise every day with dignity despite
          adversity. These realities do not reflect weakness; they reflect
          untapped potential.
        </p>

        <p>
          This foundation was created with a single, unwavering purpose: to
          stand with the people of India and contribute meaningfully to
          nation-building.
        </p>

        <p>
          Our work is driven by the belief that a strong India is built not only
          by infrastructure and economy, but by educated minds, healthy bodies,
          empowered women, skilled youth, nourished children, and resilient
          communities. Every initiative we undertake — whether in education,
          health, rural transformation, livelihoods, or social justice — is
          rooted in the aspiration to uplift Indians from the grassroots upward.
        </p>

        <p>
          We do not see service as charity. We see it as our responsibility as
          citizens of this nation.
        </p>

        <p>
          Fortunate Future International Foundation exists to support Indians at
          every stage of life — from nurturing a child’s education, empowering
          women to lead, enabling youth with skills, preserving our rich
          culture, protecting our environment, and standing beside communities
          in times of crisis.
        </p>

        <p>
          India’s future lies in the hands of its people. Our role is to
          strengthen those hands.
        </p>

        <p>
          With humility, commitment, and collective effort, we dedicate
          ourselves to building a nation where opportunity reaches every corner,
          dignity reaches every home, and hope reaches every heart.
        </p>

        <p>Together, let us build a Fortunate Future for India.</p>
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
