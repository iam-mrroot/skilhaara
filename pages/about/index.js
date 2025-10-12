import BlogSection from '@/blocks/BlogSection/BlogSection'
import DesignedToSucceed from '@/blocks/DesignedToSucceed/DesignedToSucceed'
import FAQSection from '@/blocks/FAQSection/FAQSection'
import LandingTwoSection from '@/blocks/LandingTwoSection/LandingTwoSection'
import StatsBenefitstwo from '@/blocks/StatsBenefitstwo/StatsBenefitstwo'
import TeachingTeam from '@/blocks/TeachingTeam/TeachingTeam'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import WhySkillHaara from '@/blocks/WhySkillHaara/WhySkillHaara'
import React from 'react'

export default function AboutPage() {

    const landingTwoSectionData = {
        tag: "About us",
        title: "Who we are & why we help you move forward",
        description:
            "We focus on practical learning covering real-world topics through simple, easy-to-follow lessons, guided by industry experts to ensure you gain skills that truly matter.",
        buttonText: "Get Start Now",
        backgroundImage: "/assets/images/aboutpage.jpg",
    };


    return (
        <>
            <LandingTwoSection landingTwoSectionData={landingTwoSectionData} />
            <WhySkillHaara />
            <StatsBenefitstwo />
            <DesignedToSucceed />
            <TeachingTeam />
            <Testimonials />
            <FAQSection />
            <BlogSection />
        </>
    )
}
