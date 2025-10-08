import CTASection from '@/blocks/CTASection/CTASection'
import LandingTwoSection from '@/blocks/LandingTwoSection/LandingTwoSection'
import LatestCourses from '@/blocks/LatestCourses/LatestCourses'
import OurCourses from '@/blocks/OurCourses/OurCourses'
import React from 'react'

export default function CoursesPage() {
  return (
    <>
      <LandingTwoSection />
      <LatestCourses />
      <OurCourses />
      <CTASection />
    </>
  )
}
