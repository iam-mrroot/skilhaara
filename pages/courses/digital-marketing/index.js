import CourseAbout from '@/blocks/CourseAbout/CourseAbout';
import CourseHero from '@/blocks/CourseHero/CourseHero';
import KeralaAvailability from '@/blocks/KeralaAvailability/KeralaAvailability';
import LearningWorks from '@/blocks/LearningWorks/LearningWorks';
import OutcomesCertificates from '@/blocks/OutcomesCertificates/OutcomesCertificates';
import LatestCoursesTwo from '@/blocks/LatestCoursesTwo/LatestCoursesTwo';
import Testimonials from '@/blocks/Testimonials/Testimonials';
import CTASection from '@/blocks/CTASection/CTASection';
import React from 'react';

export default function DigitalMarketingPage() {
    const courseData = {
        title: 'Digital Marketing',
        price: '$200',
        duration: '6 Months',
        shortDescription: 'Turn visibility into real growth.',
        fullDescription:
            'This isn’t another theory-heavy course—you’ll work on live workflows: SEO sprints, social media calendars, paid ad campaigns, and analytics reviews. Every class ends with something real you can apply. The focus is simple: attract the right audience, convert them with clarity, and scale what works in Kerala’s growing digital landscape.',
        buttonOne: 'Contact Us',
        buttonTwo: 'Download Brochure',
        mode: 'Classroom + Online',
        locations: 'Trivandrum | Kochi (Aluva) | Thrissur',
    };

    const aboutData = {
        title: 'About this course',
        description: [
            "We teach the way modern marketing teams actually work. Short demos, guided practice, and weekly deliverables build into a portfolio that proves your skills.",
            "Mentors give direct, practical feedback, while labs and checklists keep your execution sharp—whether it’s a website, a landing page, or an ad account.",
            "Skill Haara follows ISO 9001:2015 and ISO 21001:2018 standards, with mentor-led sessions and placement support across Trivandrum, Kochi (Aluva), and Thrissur.",
        ],
        availability: 'Available in Trivandrum, Kochi (Aluva), and Thrissur',
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: 'SEO Strategy and Execution',
                description:
                    'Go beyond keywords. Learn to research intent, map it to content, build clean site structures, optimize on-page elements, and create ethical link strategies. Master technical SEO, page speed, schema, and reporting so you can show measurable results.',
            },
            {
                title: 'SEM and Google Ads',
                description:
                    'Set up campaigns that actually convert. From account structure and keyword match types to ad copy, bidding, budgets, and negative lists—you’ll learn to build, test, and optimize campaigns that protect your ROI.',
            },
            {
                title: 'Social Media Marketing',
                description:
                    'Make platforms work for growth. Research audiences, design content pillars, plan calendars, and create thumb-stopping visuals. Learn platform fit for Instagram, Facebook, LinkedIn, and YouTube—plus how to manage communities safely and effectively.',
            },
            {
                title: 'Content Marketing',
                description:
                    'Plan, write, and repurpose content that wins on both search and social. You’ll draft briefs, structure articles, and turn them into carousels, shorts, and emails. Editorial workflows ensure deadlines don’t compromise quality.',
            },
            {
                title: 'Web Analytics and Reporting',
                description:
                    'Learn to measure what truly matters. Track conversions, funnels, and cohorts with GA4 and Tag Manager, then build dashboards that clearly link performance to business impact.',
            },
            {
                title: 'Conversion and Landing Pages',
                description:
                    'Design landing pages that load fast and persuade faster. Apply proven techniques like offer framing, social proof, and simple CTAs—then connect with CRM or WhatsApp for smooth lead capture.',
            },
            {
                title: 'Local and E-commerce Playbooks',
                description:
                    'For local businesses and online stores: master map SEO, review management, product feed ads, and catalog optimization. Track revenue correctly so scaling decisions are smarter.',
            },
        ],
    };

    const learningWorksData = {
        howLearningWorks: {
            title: 'How learning works here',
            points: [
                'Each week, you focus on one theme: learn it, build it, review it.',
                'Mentors are there when things don’t click, and every deliverable ties back to a real business outcome.',
                'Placement support—resumes, portfolios, mock interviews—helps you turn projects into offers.',
            ],
        },
        whoThisFits: {
            title: 'Who this fits',
            points: [
                'After 12th learners who want a clear, practical entry into SEO, ads, social, content, and analytics.',
                'Graduates, business owners, and career switchers who want a structured, project-driven program that builds results step by step.',
            ],
        },
        image: {
            src: '/assets/images/digitalmarketing.jpg',
            alt: 'Students learning digital marketing',
        },
    };

    const outcomesData = {
        outcomes: {
            title: 'Outcomes that matter',
            description:
                'By the end, you’ll be confident managing organic growth (SEO), paid ads (SEM/Google Ads), social campaigns, and analytics reporting. You’ll be ready for roles like Digital Marketing Specialist, SEO Analyst, Social Media Manager, or Ads Executive—backed by a portfolio that proves you can deliver.',
        },
        certificates: {
            title: 'Certificates we provide',
            items: [
                {
                    title: 'Program Certificate: Digital Marketing (Integrated)',
                    description:
                        'Validates your full journey across SEO, SEM, SMM, Content, and Analytics.',
                },
                {
                    title: 'Module Certificates: SEO, SEM/Google Ads, Social Media, Content, Web Analytics',
                    description:
                        'Ideal for staged progress and portfolio proof.',
                },
                {
                    title: 'Vendor Certifications (Google Ads, Analytics, etc.)',
                    description:
                        'These are separate exams, but guided prep and mock practice are included.',
                },
            ],
        },
    };

    const availabilityData = {
        title: 'Kerala availability',
        locations: [
            {
                name: 'Trivandrum',
                description:
                    'Mentor-led classes in SEO, content, ads, and analytics with flexible weekday and weekend batches.',
            },
            {
                name: 'Kochi (Aluva, Ernakulam)',
                description:
                    'Hands-on sessions from keyword research to GA4 dashboards, plus interview readiness practice.',
            },
            {
                name: 'Thrissur',
                description:
                    'Project-first learning with local business scenarios, portfolio reviews, and placement support.',
            },
        ],
    };


    const testimonials = [
        {
            id: 1,
            name: 'SEO Analyst, Trivandrum',
            course: 'Digital Marketing',
            rating: 5,
            feedback: '“I shipped my first SEO plan and saw clicks rise in weeks.”',
        },
        {
            id: 2,
            name: 'Ads Executive, Kochi',
            course: 'Digital Marketing',
            rating: 5,
            feedback: '“Running my own Google Ads felt scary—until the weekly reviews.”',
        },
        {
            id: 3,
            name: 'Social Media Manager, Thrissur',
            course: 'Digital Marketing',
            rating: 5,
            feedback: '“The content + social calendar made our brand consistent for the first time.”',
        },
    ];


    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo jobCodes={['software-dev', 'it-networking', 'graphic-design', 'interior-design', 'fashion-design']} />
            <Testimonials testimonials={testimonials} />
            <CTASection />
        </div>
    );
}
