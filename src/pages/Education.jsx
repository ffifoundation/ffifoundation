import React from "react";
import ProgramPage from "../components/ProgramPage";
const Education = () => {
  const stats = [
    { number: "10,000+", label: "Children Educated" },
    { number: "50+", label: "Schools Supported" },
    { number: "500+", label: "Scholarships Given" },
    { number: "200+", label: "Teachers Trained" },
  ];
  const features = [
    {
      title: "Free Education Programs",
      description:
        "Providing free quality education to underprivileged children through our learning centers and partnership schools. We cover tuition, books, uniforms, and all educational expenses to ensure no child is left behind.",
      image: "/images/education/e1.png",
    },
    {
      title: "Scholarship Programs",
      description:
        "Offering scholarships and financial assistance to deserving students to pursue their education without economic barriers. Our merit-based and need-based scholarships support students from primary to higher education.",
      image: "/images/education/e2.png",
    },
    {
      title: "After-School Support",
      description:
        "Running after-school tutoring and homework help programs to ensure academic success for all students. We provide personalized attention, exam preparation, and subject-specific coaching at no cost.",
      image: "/images/education/e3.png",
    },
    {
      title: "Computer & Digital Literacy",
      description:
        "Equipping students with essential computer skills and digital literacy for the modern world. Our computer labs offer courses in basic computing, programming, and internet safety.",
      image: "/images/education/e4.png",
    },
    {
      title: "Library & Learning Resources",
      description:
        "Establishing libraries and providing learning materials, books, and educational resources to schools. We've set up 30+ libraries with thousands of books in multiple languages and subjects.",
      image: "/images/education/e5.png",
    },
    {
      title: "Teacher Training Programs",
      description:
        "Conducting professional development programs for teachers to enhance teaching quality and methodology. We train teachers in modern pedagogy, classroom management, and subject expertise.",
      image: "/images/education/e6.png",
    },
  ];
  const gallery = [
    {
      url: "/images/education/e1.png",
      caption: "Happy children in our learning center",
    },
    {
      url: "/images/education/e4.png",
      caption: "Computer training for students",
    },
    {
      url: "/images/education/e5.png",
      caption: "Library reading program",
    },
    // {
    //   url: "/images/gallery/education4.jpg",
    //   caption: "Annual scholarship award ceremony",
    // },
  ];
  return (
    <ProgramPage
      title="Education"
      description="Ensuring quality education and learning opportunities for children and youth to build a brighter future."
      heroImage="/images/education/e1.png"
      mission="To provide quality education to children in need, empowering them for a brighter future through accessible and inclusive learning opportunities that break the cycle of poverty."
      vision="A world where every child has access to education, regardless of their background, enabling them to reach their full potential and contribute meaningfully to society."
      impact="We have helped over 10,000 children access education through our programs, scholarships, and educational support initiatives. 95% of our students complete their schooling, compared to 60% national average."
      stats={stats}
      features={features}
      gallery={gallery}
    />
  );
};
export default Education;
