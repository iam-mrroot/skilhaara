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
        title: 'Information Technology & Networking',
        price: '$200',
        duration: '6 Months',
        shortDescription: 'Grow brands in the digital age.',
        fullDescription: 'Master SEO, social media, Google Ads, and analytics to plan, execute, and measure campaigns that drive real results. From concept to conversion — learn every step hands-on with guidance from industry mentors.',
        buttonOne: "Contact Us",
        buttonTwo: "Download Brochure",
        mode: "Classroom + Online",
        locations: "Trivandrum | Kochi (Aluva) | Thrissur"
    }

    const aboutData = {
        title: 'About this course',
        description: [
            'This program helps you go beyond buzzwords. Learn digital marketing strategies, performance tools, and creative techniques that actually work in the real market.',
            'You\'ll train through live campaigns, analytics dashboards, and ad simulations, gaining the confidence to plan and optimize marketing initiatives from day one.',
            'Skill Haara delivers ISO 9001:2015 and 21001:2018–certified training with modern labs, expert mentors, and structured placement guidance across all Kerala branches.',
        ],
        availability: 'Available in Trivandrum, Kochi (Aluva), and Thrissur',
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: 'Search Engine Optimization (SEO)',
                description: 'Learn how Google ranks pages, master on-page, off-page, and technical SEO to improve visibility.',
            },
            {
                title: 'Social Media Marketing',
                description: 'Create and manage campaigns for Facebook, Instagram, and LinkedIn that attract real engagement.',
            },
            {
                title: 'Google Ads & PPC',
                description: 'Understand campaign setup, bidding strategies, and ad copywriting to deliver measurable ROI.',
            },
            {
                title: 'Email & Content Marketing',
                description: 'Build audiences through storytelling, automation, and data-driven content planning.',
            },
            {
                title: 'Web Analytics (Google Analytics & Tag Manager)',
                description: 'Track, measure, and interpret performance with confidence.',
            },
            {
                title: 'Brand Strategy & Digital Planning',
                description: 'Connect creativity with data to build meaningful online presence.',
            },
        ],
    }

    const learningWorksData = {
        howLearningWorks: {
            title: "How learning works here",
            points: [
                "Every concept moves from demo → guided lab → live project.",
                "Mentors ensure clarity and progress through regular feedback, while small batches keep learning interactive.",
                "By the end, you'll complete real campaigns and add measurable results to your portfolio.",
            ],
        },
        whoThisFits: {
            title: "Who this fits",
            points: [
                "Students after 12th or graduates who want a career in marketing, media, or content.",
                "Entrepreneurs and freelancers seeking to grow their own brands or client base.",
                "Working professionals ready to switch into digital-first roles without losing momentum.",
            ],
        },
        image: {
            src: "/assets/images/digitalmarketing.jpg",
            alt: "Students learning digital marketing and IT networking",
        },
    }

    const outcomesData = {
        outcomes: {
            title: "Outcomes that matter",
            description: "Confidently manage SEO, SEM, and social media campaigns. Build digital portfolios that showcase campaigns you've planned and executed. Graduate job-ready for roles like Digital Marketing Executive, SEO Analyst, Social Media Manager, or PPC Specialist.",
        },
        certificates: {
            title: "Certifications we prepare for",
            items: [
                {
                    title: "Google Ads Certification",
                    description: "",
                },
                {
                    title: "HubSpot Content Marketing",
                    description: "",
                },
                {
                    title: "Meta (Facebook) Blueprint",
                    description: "",
                },
                {
                    title: "Skill Haara Program Certificate",
                    description: "Our mentors also guide you through freelancing setup and interview preparation so your skills translate into real projects and job opportunities.",
                },
            ],
        },
    };

    const availabilityData = {
        title: "Kerala availability",
        locations: [
            {
                name: "Trivandrum",
                description: "Hands-on campaign labs, SEO & Analytics practice, placement prep.",
            },
            {
                name: "Kochi (Aluva)",
                description: "Social media & Google Ads focus with mentor-led practicals.",
            },
            {
                name: "Thrissur",
                description: "Full-stack digital marketing coverage with project guidance and job counseling.",
            },
        ],
    };

    const testimonials = [
        {
            id: 1,
            name: "Network Engineer, Trivandrum",
            course: "Information Technology & Networking",
            rating: 5,
            feedback: "“The labs felt like real work—I stopped memorizing and started understanding.”",
        },
        {
            id: 2,
            name: "SOC Analyst, Kochi",
            course: "Information Technology & Networking",
            rating: 5,
            feedback: "“Mock interviews made the real one feel familiar; feedback was specific and honest.”",
        },
        {
            id: 3,
            name: "IT Support Specialist, Thrissur",
            course: "Information Technology & Networking",
            rating: 5,
            feedback: "“Weekend batches meant I could upskill without pausing life.”",
        },
    ];


    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo jobCodes={['software-dev', 'digital-marketing', 'graphic-design', 'interior-design', 'fashion-design']} />
            <Testimonials testimonials={testimonials}/>
            <CTASection />
        </div>
    )
}