// src/components/ImageSlider.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    "/images/girls.jpg",
    "/images/students.jpg",
    "/images/boy.jpg",
    "/images/child.jpg",
  ];

  // Preload all images
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // Slides every 2 seconds
      loop={true}
      preloadImages={false}
      className="image-slider"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="slide-image"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
