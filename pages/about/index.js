import BlogSection from '@/blocks/BlogSection/BlogSection'
import DesignedToSucceed from '@/blocks/DesignedToSucceed/DesignedToSucceed'
import FAQSection from '@/blocks/FAQSection/FAQSection'
import LandingTwoSection from '@/blocks/LandingTwoSection/LandingTwoSection'
import TeachingTeam from '@/blocks/TeachingTeam/TeachingTeam'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import WhySkillHaara from '@/blocks/WhySkillHaara/WhySkillHaara'
import React from 'react'

export default function AboutPage() {
    return (
        <>
            <LandingTwoSection />
            <WhySkillHaara />
            <DesignedToSucceed />
            <TeachingTeam />
            <Testimonials />
            <FAQSection />
            <BlogSection />
        </>
    )
}
