import CTASection from '@/blocks/CTASection/CTASection'
import LandingTwoSection from '@/blocks/LandingTwoSection/LandingTwoSection'
import LatestCourses from '@/blocks/LatestCourses/LatestCourses'
import OurCourses from '@/blocks/OurCourses/OurCourses'
import React from 'react'

export default function CoursesPage() {

  const landingTwoSectionData = {
    tag: "Courses",
    title: "Explore Courses That Grow With Your Ambition",
    description:
      "At Skill Haara, learning isn’t just about finishing a syllabus. It’s about building skills you can use the very next day. Every course blends expert-led lessons, modern labs, and real projects so learning feels practical, not theoretical. Study at your own pace in Trivandrum, Kochi (Aluva), or Thrissur, and turn consistent effort into real opportunity.",
    buttonText: "Get Start Now",
    backgroundImage: "/assets/images/coursespage.jpg", 
  };

  return (
    <>
      <LandingTwoSection landingTwoSectionData={landingTwoSectionData}/>
      <LatestCourses />
      <OurCourses />
      <CTASection />
    </>
  )
}
