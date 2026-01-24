import React from "react";
import ProgramPage from "../components/ProgramPage";
const DisasterManagement = () => {
  const stats = [
    { number: "20,000+", label: "Lives Impacted" },
    { number: "100+", label: "Relief Operations" },
    { number: "50+", label: "Communities Prepared" },
    { number: "500+", label: "Volunteers Trained" },
  ];
  const features = [
    {
      title: "Disaster Preparedness",
      description:
        "Training communities in disaster preparedness, early warning systems, and evacuation procedures to minimize casualties. We conduct regular drills and provide emergency kits to vulnerable families.",
      image: "/images/disaster/d2.png",
    },
    {
      title: "Emergency Response",
      description:
        "Providing immediate relief including food, water, medical aid, and shelter during natural disasters and emergencies. Our rapid response teams can be deployed within hours of any disaster.",
      image: "/images/disaster/d3.png",
    },
    {
      title: "Relief Distribution",
      description:
        "Coordinating relief material distribution including essential supplies, clothing, and hygiene kits to affected families. We ensure transparent and equitable distribution reaching the most vulnerable first.",
      image: "/images/disaster/d4.png",
    },
    {
      title: "Rebuilding Communities",
      description:
        "Supporting long-term recovery through rebuilding homes, schools, and infrastructure in disaster-affected areas. We use disaster-resistant construction techniques and involve community members in rebuilding.",
      image: "/images/disaster/d5.png",
    },
    {
      title: "Volunteer Training",
      description:
        "Creating a network of trained volunteers for rapid deployment during emergencies and disaster situations. Our 500+ volunteers are trained in first aid, search & rescue, and relief coordination.",
      image: "/images/disaster/d6.png",
    },
    {
      title: "Psychological Support",
      description:
        "Providing trauma counseling and mental health support to disaster survivors for emotional recovery. Our trained counselors help individuals and families cope with loss and rebuild their lives.",
      image: "/images/disaster/d7.png",
    },
  ];
  const gallery = [
    {
      url: "/images/disaster/d1.png",
      caption: "Relief material distribution to flood victims",
    },
    {
      url: "/images/disaster/d4.png",
      caption: "Volunteer training session",
    },
    {
      url: "/images/disaster/d2.png",
      caption: "Community rebuilding after cyclone",
    },
    // {
    //   url: "/images/gallery/disaster4.jpg",
    //   caption: "Emergency response team in action",
    // },
  ];
  return (
    <ProgramPage
      title="Disaster Management"
      description="Building resilient communities through disaster preparedness, response, and recovery initiatives."
      heroImage="/images/disaster/d1.png"
      mission="To build resilient communities capable of withstanding disasters through preparedness, rapid response, and effective recovery programs that save lives and protect livelihoods."
      vision="A disaster-prepared society where communities can quickly recover and rebuild after emergencies with minimal loss of life and property, supported by strong local disaster management systems."
      impact="Our disaster management programs have helped over 20,000 people during emergencies, with 50+ communities now disaster-ready. We've distributed relief worth ₹5 crores and rebuilt 500+ homes."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default DisasterManagement;
