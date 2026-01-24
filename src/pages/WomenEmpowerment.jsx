import React from "react";
import ProgramPage from "../components/ProgramPage";
const WomenEmpowerment = () => {
  const stats = [
    { number: "8,000+", label: "Women Empowered" },
    { number: "300+", label: "Self-Help Groups" },
    { number: "1,000+", label: "Entrepreneurs" },
    { number: "50+", label: "Skill Programs" },
  ];
  const features = [
    {
      title: "Self-Help Groups (SHGs)",
      description:
        "Forming and supporting self-help groups for women to promote savings, financial independence, and collective strength. Our 300+ SHGs have collectively saved over ₹2 crores and provided loans to members.",
      image: "/images/women/w1.png",
    },
    {
      title: "Vocational Training",
      description:
        "Providing skill development and vocational training in tailoring, handicrafts, beauty services, and other trades. We offer 6-month certified courses with 100% job placement assistance.",
      image: "/images/women/w2.png",
    },
    {
      title: "Entrepreneurship Development",
      description:
        "Supporting women entrepreneurs with training, mentorship, and access to microfinance for starting businesses. We've helped over 1,000 women start their own enterprises with initial capital and ongoing guidance.",
      image: "/images/women/w3.png",
    },
    {
      title: "Financial Literacy",
      description:
        "Educating women on financial planning, banking, savings, and managing household finances effectively. Our workshops cover budgeting, insurance, investments, and digital payment systems.",
      image: "/images/women/w4.png",
    },
    {
      title: "Women's Rights Awareness",
      description:
        "Conducting awareness programs on women's rights, legal aid, and combating domestic violence and discrimination. We provide free legal counseling and support services to women in distress.",
      image: "/images/women/w5.png",
    },
    {
      title: "Leadership Development",
      description:
        "Training women in leadership skills to take active roles in community decision-making and local governance. Our programs have helped 200+ women get elected to local governing bodies.",
      image: "/images/women/w6.jpg",
    },
  ];
  const gallery = [
    {
      url: "/images/women/w3.png",
      caption: "Monthly SHG meeting and savings collection",
    },
    {
      url: "/images/women/w5.png",
      caption: "Women learning tailoring skills",
    },
    {
      url: "/images/women/w1.png",
      caption: "Successful women entrepreneurs showcasing products",
    },
    // {
    //   url: "/images/gallery/women4.jpg",
    //   caption: "Leadership development workshop",
    // },
  ];
  return (
    <ProgramPage
      title="Women Empowerment"
      description="Enabling women to achieve economic independence, social equality, and leadership roles in their communities."
      heroImage="/images/women/w3.png"
      mission="To empower women through education, skill development, and economic opportunities, enabling them to lead dignified and independent lives free from discrimination and violence."
      vision="A society where women have equal opportunities, economic independence, and the power to make decisions about their lives, contributing equally to family and community development."
      impact="Over 8,000 women have achieved financial independence through our programs, with 1,000+ starting their own businesses. Average monthly income increased by 300% within 2 years of joining our programs."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default WomenEmpowerment;
