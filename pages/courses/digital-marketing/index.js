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

    const courseData = {
        title: 'Software Development & Management',
        price: '$200',
        duration: '3–6 Month Course',
        shortDescription: 'Build real-world software and learn how professional teams code, test, and deploy.',
        fullDescription: 'Build real-world software and learn how professional teams code, test, and deploy. From foundations to full- stack, DevOps, and testing — graduate with a portfolio that proves you can build and ship production - ready software.',
        buttonOne: "Enroll Now",
        buttonTwo: "Download Brochure"
    }


    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout />
            <LearningWorks />
            <OutcomesCertificates />
            <KeralaAvailability />
            <LatestCoursesTwo />
            <Testimonials />
            <CTASection />
        </div>
    )
}
