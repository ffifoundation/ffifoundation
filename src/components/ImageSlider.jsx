// src/components/ImageSlider.jsx
import React from "react";
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

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // Slides every 2 seconds
      loop={true}
      className="image-slider"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
