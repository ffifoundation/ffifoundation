// src/pages/RuralTransformation.jsx
import React from "react";
import ProgramPage from "../components/ProgramPage";

const RuralTransformation = () => {
  const stats = [
    { number: "500+", label: "Villages Reached" },
    { number: "15,000+", label: "Families Impacted" },
    { number: "50+", label: "Livelihood Programs" },
    { number: "100+", label: "Infrastructure Projects" },
  ];

  const features = [
    {
      title: "Sustainable Agriculture",
      description:
        "Training farmers in modern agricultural techniques, organic farming, and sustainable practices to increase crop yields and income.",
      image: "/images/man-field.jpg",
    },
    {
      title: "Skill Development",
      description:
        "Providing vocational training and skill development programs to rural youth for better employment opportunities.",
      image: "/images/girl-boy.jpg",
    },
    {
      title: "Infrastructure Development",
      description:
        "Building essential infrastructure including roads, water supply systems, and community centers in rural areas.",
      image: "/images/man-walking.jpg",
    },
    {
      title: "Women's Empowerment",
      description:
        "Creating self-help groups and entrepreneurship opportunities for rural women to achieve economic independence.",
      image: "/images/farmer.jpg",
    },
    {
      title: "Digital Literacy",
      description:
        "Bringing technology to rural communities through digital literacy programs and internet connectivity initiatives.",
      image: "/images/girl-tab.jpg",
    },
    {
      title: "Market Linkages",
      description:
        "Connecting rural producers with urban markets to ensure fair prices and sustainable income for their products.",
      image: "/images/village-tech.jpg",
    },
  ];

  const gallery = [
    { url: "/images/man-field.jpg", caption: "Farmers training program" },
    // {
    //   url: "/images/village.jpg",
    //   caption: "Community development project",
    // },
    { url: "/images/tribal-girls.jpg", caption: "Women's self-help group" },
    {
      url: "/images/village-tech.jpg",
      caption: "Infrastructure development",
    },
  ];

  return (
    <ProgramPage
      title="Rural Transformation"
      description="Empowering rural communities through sustainable development initiatives and innovative solutions for agriculture, livelihoods, and infrastructure."
      heroImage="/images/tribal-girls.jpg"
      mission="To provide quality education to children in need, empowering them for a brighter future through comprehensive rural development programs."
      vision="A world where every rural community has access to resources, opportunities, and sustainable livelihoods."
      impact="We have helped over 15,000 families in rural areas access better agricultural practices, skill development, and infrastructure improvements."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};

export default RuralTransformation;
