import CoursesSection from '@/blocks/CoursesSection/CoursesSection'
import CTASection from '@/blocks/CTASection/CTASection'
import FeaturesSection from '@/blocks/FeaturesSection/FeaturesSection'
import HeroSection from '@/blocks/HeroSection/HeroSection'
import HeroSectionTwo from '@/blocks/HeroSectionTwo/HeroSectionTwo'
import OurCourses from '@/blocks/OurCourses/OurCourses'
import StatsBenefits from '@/blocks/StatsBenefits/StatsBenefits'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import WhyLearning from '@/blocks/WhyLearning/WhyLearning'
import React from 'react'


export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroSectionTwo/>
      <FeaturesSection />
      <CoursesSection />
      <StatsBenefits />
      <OurCourses />
      <WhyLearning />
      <Testimonials />
      <CTASection />
    </div>
  )
}
