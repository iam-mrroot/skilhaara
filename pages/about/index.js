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
        title: "Who We Are? The Bridge Between Talent and Success.",
        description:
            "Why We Help? Because your growth is our mission. Learn by doing — not just listening. Our expert-guided, real-world lessons make complex concepts simple and help you master skills that matter in today’s world.",
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
