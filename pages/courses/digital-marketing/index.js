import CourseAbout from '@/blocks/CourseAbout/CourseAbout'
import CourseHero from '@/blocks/CourseHero/CourseHero'
import KeralaAvailability from '@/blocks/KeralaAvailability/KeralaAvailability'
import LearningWorks from '@/blocks/LearningWorks/LearningWorks'
import OutcomesCertificates from '@/blocks/OutcomesCertificates/OutcomesCertificates'
import React from 'react'
import LatestCoursesTwo from '@/blocks/LatestCoursesTwo/LatestCoursesTwo'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import CTASection from '@/blocks/CTASection/CTASection'

export default function CoursesDetailPage() {
    return (
        <div>
            <CourseHero />
            <CourseAbout />
            <LearningWorks />
            <OutcomesCertificates/>
            <KeralaAvailability/>
            <LatestCoursesTwo/>
            <Testimonials/>
            <CTASection/>
        </div>
    )
}
