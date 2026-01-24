import React from "react";
import ProgramPage from "../components/ProgramPage";
const UrbanRenewal = () => {
  const stats = [
    { number: "30+", label: "Areas Renewed" },
    { number: "25,000+", label: "Residents Benefited" },
    { number: "100+", label: "Green Spaces" },
    { number: "50+", label: "Infrastructure Projects" },
  ];
  const features = [
    {
      title: "Slum Redevelopment",
      description:
        "Transforming slum areas into clean, safe, and sustainable living spaces with proper housing and amenities. We provide pucca houses, water supply, electricity, and sanitation facilities to slum dwellers.",
      image: "/images/urban/u2.png",
    },
    {
      title: "Waste Management",
      description:
        "Implementing effective waste management systems including recycling, composting, and clean street initiatives. Our zero-waste model has reduced landfill waste by 70% in project areas.",
      image: "/images/urban/u3.png",
    },
    {
      title: "Green Spaces Development",
      description:
        "Creating parks, gardens, and green recreational spaces in urban areas for community well-being. We've developed 100+ parks with children's play areas, walking tracks, and open-air gyms.",
      image: "/images/urban/u4.png",
    },
    {
      title: "Urban Infrastructure",
      description:
        "Improving urban infrastructure including roads, drainage, street lighting, and public facilities. Our projects focus on sustainable, accessible infrastructure that serves all community members.",
      image: "/images/urban/u5.png",
    },
    {
      title: "Community Sanitation",
      description:
        "Building and maintaining public toilets, improving sanitation facilities, and promoting hygiene practices. We've built 200+ community toilets and achieved open-defecation-free status in 30+ areas.",
      image: "/images/urban/u6.png",
    },
    {
      title: "Smart City Initiatives",
      description:
        "Implementing technology-driven solutions for urban planning, public services, and sustainable development. Our smart systems include solar lighting, rainwater harvesting, and IoT-based waste collection.",
      image: "/images/urban/u7.png",
    },
  ];
  const gallery = [
    {
      url: "/images/urban/u1.png",
      caption: "New community park opening ceremony",
    },
    {
      url: "/images/urban/u3.png",
      caption: "Street beautification completed",
    },
    {
      url: "/images/urban/u4.png",
      caption: "Segregated waste collection system",
    },
    // {
    //   url: "/images/gallery/urban4.jpg",
    //   caption: "Infrastructure improvement project",
    // },
  ];
  return (
    <ProgramPage
      title="Urban Renewal"
      description="Transforming urban spaces through sustainable development, infrastructure improvement, and community engagement."
      heroImage="/images/urban/u1.png"
      mission="To create sustainable, livable urban spaces that improve quality of life for all residents through holistic development, green infrastructure, and community participation."
      vision="Vibrant, inclusive urban communities with quality infrastructure, green spaces, and sustainable living environments where every resident has access to basic amenities and opportunities."
      impact="Our urban renewal projects have improved living conditions for over 25,000 residents across 30+ urban areas. We've created 100+ green spaces and improved infrastructure in 50+ neighborhoods."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default UrbanRenewal;
