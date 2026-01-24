import React from "react";
import ProgramPage from "../components/ProgramPage";
const SportsDevelopment = () => {
  const stats = [
    { number: "5,000+", label: "Young Athletes" },
    { number: "30+", label: "Sports Programs" },
    { number: "100+", label: "Trained Coaches" },
    { number: "20", label: "Sports Facilities" },
  ];
  const features = [
    {
      title: "Grassroots Sports Training",
      description:
        "Identifying and nurturing young talent through grassroots sports programs in schools and communities. We provide structured training in cricket, football, athletics, badminton, and other sports from an early age.",
      image: "/images/sports/s2.png",
    },
    {
      title: "Professional Coaching",
      description:
        "Providing access to professional coaches and training facilities to help athletes reach their potential. Our certified coaches have experience at national and international levels and provide personalized training plans.",
      image: "/images/sports/s3.png",
    },
    {
      title: "Sports Infrastructure",
      description:
        "Building and maintaining sports facilities including playgrounds, courts, and training centers in underserved areas. We've built 20 multi-sport facilities with proper lighting, surfaces, and safety features.",
      image: "/images/sports/s4.png",
    },
    {
      title: "Life Skills Through Sports",
      description:
        "Using sports as a tool to teach important life skills like teamwork, discipline, leadership, and resilience. Our programs integrate character building with athletic development.",
      image: "/images/sports/s5.png",
    },
    {
      title: "Sports Equipment Support",
      description:
        "Providing sports equipment, uniforms, and gear to aspiring athletes who cannot afford them. We distribute equipment for all major sports and ensure no child is excluded due to lack of resources.",
      image: "/images/sports/s6.png",
    },
    {
      title: "Inter-Community Tournaments",
      description:
        "Organizing sports tournaments and competitions to promote healthy competition and community engagement. Our annual sports festival attracts over 2,000 participants from various communities.",
      image: "/images/sports/s7.png",
    },
  ];
  const gallery = [
    {
      url: "/images/sports/s1.png",
      caption: "Youth cricket training session",
    },
    {
      url: "/images/sports/s2.png",
      caption: "Inter-school football tournament",
    },
    {
      url: "/images/sports/s4.png",
      caption: "Athletics training on our new track",
    },
    // {
    //   url: "/images/gallery/sports4.jpg",
    //   caption: "Annual community sports day celebration",
    // },
  ];
  return (
    <ProgramPage
      title="Sports for Development"
      description="Leveraging sports as a tool for social development, building character, and promoting healthy lifestyles among youth."
      heroImage="/images/sports/s1.png"
      mission="To empower youth through sports, promoting physical fitness, character development, and providing pathways to professional sports careers while fostering community unity."
      vision="A society where every child has access to sports facilities and opportunities to develop their athletic potential, regardless of their economic or social background."
      impact="Over 5,000 young athletes have benefited from our sports programs, with many going on to represent at state and national levels. 50+ students have received sports scholarships for higher education."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default SportsDevelopment;
