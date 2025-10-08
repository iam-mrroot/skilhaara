import CoursesSection from '@/blocks/CoursesSection/CoursesSection'
import CTASection from '@/blocks/CTASection/CTASection'
import DesignedToSucceed from '@/blocks/DesignedToSucceed/DesignedToSucceed'
import FeaturesSection from '@/blocks/FeaturesSection/FeaturesSection'
import Footer from '@/blocks/Footer/Footer'
import Header from '@/blocks/Header/Header'
import HeroSection from '@/blocks/HeroSection/HeroSection'
import LandingTwoSection from '@/blocks/LandingTwoSection/LandingTwoSection'
import OurCourses from '@/blocks/OurCourses/OurCourses'
import StatsBenefits from '@/blocks/StatsBenefits/StatsBenefits'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import WhyLearning from '@/blocks/WhyLearning/WhyLearning'
import WhySkillHaara from '@/blocks/WhySkillHaara/WhySkillHaara'
import TeachingTeam from '@/blocks/TeachingTeam/TeachingTeam'
import React from 'react'
import FAQSection from '@/blocks/FAQSection/FAQSection'
import BlogSection from '@/blocks/BlogSection/BlogSection'
import LatestCourses from '@/blocks/LatestCourses/LatestCourses'

export default function Home() {
  return (
    <div>
      <Header />
      <LatestCourses/>
      <BlogSection/>
      <FAQSection/>
      <TeachingTeam />
      <LandingTwoSection />
      <WhySkillHaara />
      <DesignedToSucceed />
      <HeroSection />
      <FeaturesSection />
      <StatsBenefits />
      <CoursesSection />
      <CTASection />
      <Testimonials />
      <WhyLearning />
      <OurCourses />
      <Footer />
    </div>
  )
}
