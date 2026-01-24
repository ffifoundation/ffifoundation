import React from "react";
import ProgramPage from "../components/ProgramPage";
const Health = () => {
  const stats = [
    { number: "50,000+", label: "Patients Treated" },
    { number: "200+", label: "Health Camps" },
    { number: "25", label: "Mobile Clinics" },
    { number: "100+", label: "Healthcare Workers" },
  ];
  const features = [
    {
      title: "Primary Healthcare",
      description:
        "Providing accessible and affordable primary healthcare services to underserved communities through our network of clinics. We offer consultations, basic treatments, and essential medicines at minimal or no cost.",
      image: "/images/health/h2.jpg",
    },
    {
      title: "Preventive Health Programs",
      description:
        "Conducting awareness campaigns, vaccination drives, and health education programs to prevent diseases and promote healthy lifestyles. We focus on hygiene, nutrition, and early disease detection.",
      image: "/images/health/h3.png",
    },
    {
      title: "Mobile Medical Units",
      description:
        "Operating mobile medical units that bring healthcare services to remote and hard-to-reach areas. Our vans are equipped with diagnostic tools and staffed by qualified medical professionals.",
      image: "/images/health/h4.png",
    },
    {
      title: "Maternal & Child Health",
      description:
        "Focused programs for maternal health, safe delivery, newborn care, and child nutrition to reduce mortality rates. We provide prenatal care, delivery assistance, and postnatal support.",
      image: "/images/health/h5.png",
    },
    {
      title: "Mental Health Support",
      description:
        "Providing counseling services and mental health awareness programs to address psychological well-being in communities. We offer free therapy sessions and support groups for various mental health challenges.",
      image: "/images/health/h6.png",
    },
    {
      title: "Health Insurance Assistance",
      description:
        "Helping families access government health schemes and providing guidance on health insurance enrollment. We assist with documentation and ensure families receive the benefits they're entitled to.",
      image: "/images/health/h7.png",
    },
  ];
  const gallery = [
    {
      url: "/images/health/h8.png",
      caption: "Free health camp in rural area",
    },
    { url: "/images/health/h9.png", caption: "Child vaccination drive" },
    {
      url: "/images/health/h10.png",
      caption: "Mobile medical unit in action",
    },
    // {
    //   url: "/images/gallery/health4.jpg",
    //   caption: "Health awareness program for women",
    // },
  ];
  return (
    <ProgramPage
      title="Health"
      description="Providing accessible healthcare services and promoting preventive health measures to improve the well-being of communities."
      heroImage="/images/health/h1.jpg"
      mission="To ensure every individual has access to quality healthcare services and promote healthy living through preventive care, education, and comprehensive medical support."
      vision="A healthy community where quality healthcare is accessible to all, regardless of their economic background, leading to improved life expectancy and quality of life."
      impact="Over 50,000 patients have received medical care through our health camps, mobile clinics, and preventive health programs, with a 60% reduction in preventable diseases in our target areas."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default Health;
