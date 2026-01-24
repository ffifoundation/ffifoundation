import React from "react";
import ProgramPage from "../components/ProgramPage";
const ArtsCultureHeritage = () => {
  const stats = [
    { number: "2,000+", label: "Artists Supported" },
    { number: "100+", label: "Cultural Events" },
    { number: "50+", label: "Heritage Sites" },
    { number: "30+", label: "Art Programs" },
  ];
  const features = [
    {
      title: "Traditional Art Preservation",
      description:
        "Preserving and promoting traditional art forms including folk music, dance, painting, and handicrafts. We document, teach, and create markets for dying art forms to ensure they survive for future generations.",
      image: "/images/arts/a1.png",
    },
    {
      title: "Heritage Conservation",
      description:
        "Working to conserve historical monuments, buildings, and cultural heritage sites for future generations. We partner with government and local communities for restoration and maintenance projects.",
      image: "/images/arts/a2.png",
    },
    {
      title: "Artist Support Programs",
      description:
        "Providing platforms, funding, and resources to emerging and established artists to showcase their talent. We organize exhibitions, performances, and connect artists with buyers and patrons.",
      image: "/images/arts/a3.png",
    },
    {
      title: "Cultural Education",
      description:
        "Conducting workshops and classes to teach traditional arts, crafts, and cultural practices to youth. Our gurukul-style programs ensure knowledge transfer from master artists to younger generations.",
      image: "/images/arts/a4.png",
    },
    {
      title: "Cultural Festivals",
      description:
        "Organizing cultural festivals and events to celebrate diversity and promote cultural exchange. Our annual heritage festival attracts 10,000+ visitors and features 100+ artists from across the country.",
      image: "/images/arts/a5.png",
    },
    {
      title: "Museum & Archive Projects",
      description:
        "Creating museums and digital archives to preserve cultural artifacts and historical documents. We've digitized 50,000+ historical documents and established 5 community museums.",
      image: "/images/arts/a7.png",
    },
  ];
  const gallery = [
    {
      url: "/images/arts/a1.png",
      caption: "Traditional dance performance at our festival",
    },
    {
      url: "/images/arts/a2.png",
      caption: "Pottery workshop for youth",
    },
    {
      url: "/images/arts/a4.png",
      caption: "Heritage site restoration project",
    },
    // {
    //   url: "/images/gallery/culture4.jpg",
    //   caption: "Annual cultural festival celebration",
    // },
  ];
  return (
    <ProgramPage
      title="Arts, Culture & Heritage"
      description="Preserving and promoting rich cultural heritage while supporting contemporary arts and creative expression."
      heroImage="/images/arts/a6.png"
      mission="To preserve, promote, and celebrate our rich cultural heritage while nurturing contemporary arts and supporting artists, ensuring cultural continuity for future generations."
      vision="A vibrant cultural landscape where traditional heritage thrives alongside contemporary creativity, accessible to all and contributing to community identity and economic development."
      impact="We have supported over 2,000 artists and preserved 50+ heritage sites, organizing 100+ cultural events annually. Our initiatives have created sustainable livelihoods for 500+ traditional artisans."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default ArtsCultureHeritage;
