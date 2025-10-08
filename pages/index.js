import CoursesSection from '@/blocks/CoursesSection/CoursesSection'
import CTASection from '@/blocks/CTASection/CTASection'
import FeaturesSection from '@/blocks/FeaturesSection/FeaturesSection'
import Footer from '@/blocks/Footer/Footer'
import Header from '@/blocks/Header/Header'
import HeroSection from '@/blocks/HeroSection/HeroSection'
import LandingTwoSection from '@/blocks/LandingTwoSection/LandingTwoSection'
import OurCourses from '@/blocks/OurCourses/OurCourses'
import StatsBenefits from '@/blocks/StatsBenefits/StatsBenefits'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import WhyLearning from '@/blocks/WhyLearning/WhyLearning'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      <LandingTwoSection/>
      <HeroSection />
      <FeaturesSection />
      <StatsBenefits />
      <CoursesSection />
      <CTASection />
      <Testimonials />
      <WhyLearning />
      <OurCourses/>
      <Footer />
    </div>
  )
}
