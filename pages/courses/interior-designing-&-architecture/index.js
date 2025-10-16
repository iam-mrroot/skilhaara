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
        title: 'Interior Designing & Architecture',
        price: '$200',
        duration: '3–6 Month Course',
        shortDescription: 'Turn your creativity into a career that shapes how people live, work, and feel.',
        fullDescription: 'Learn to design, visualize, and execute interiors—from concept sketches to 3D renders and site-ready drawings. Graduate with a portfolio that speaks to studios, clients, and builders across Kerala.',
        buttonOne: "Enroll Now",
        buttonTwo: "Download Brochure"
    }

    const aboutData = {
        title: 'About this course',
        description: [
            'Training here feels like working in a real design studio. You\'ll move through sketching, drafting, and 3D modeling sessions that lead to complete, build-ready drawings.',
            'Mentors guide you in spatial thinking, detailing, and communication, helping you handle both design and client needs.',
            'With structured workshops, modern labs, and placement support, you\'ll graduate ready for projects—not just theory.',
        ],
        availability: 'Available in Trivandrum, Kochi (Aluva), and Thrissur',
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: 'Space Planning & Design Principles',
                description: 'Plan interiors that flow naturally. Learn proportions, zoning, and color psychology for balanced spaces.',
            },
            {
                title: 'Technical Drawing & Drafting',
                description: 'Create accurate 2D plans, elevations, and joinery details with clear annotations.',
            },
            {
                title: '3D Visualization (AutoCAD, 3ds Max, Revit, BIM)',
                description: 'Model interiors, apply lighting and materials, and render lifelike visuals with BIM coordination.',
            },
            {
                title: 'Furniture & Lighting Design',
                description: 'Design custom furniture and lighting layouts with ergonomic and aesthetic focus.',
            },
            {
                title: 'Materials, Finishes & Services',
                description: 'Choose durable finishes and integrate plumbing, electrical, HVAC, and ceiling systems.',
            },
            {
                title: 'Estimation, BOQs & Vendor Coordination',
                description: 'Prepare quantity sheets, compare quotes, and manage procurement aligned to project timelines.',
            },
            {
                title: 'Project Execution & Client Management',
                description: 'Manage revisions, client meetings, and site handovers with professional confidence.',
            },
        ],
    }

    const learningWorksData = {
        howLearningWorks: {
            title: "How learning works here",
            points: [
                "Each module builds step by step—from concept to detailed presentation.",
                "Feedback is practical and personal, ensuring every design improves.",
                "Placement training includes portfolio reviews, mock client presentations, and studio/contractor connections.",
            ],
        },
        whoThisFits: {
            title: "Who this fits",
            points: [
                "After 12th students who want a creative, hands-on career in interior design.",
                "Graduates and professionals seeking practical, studio-based learning.",
                "Aspiring freelancers aiming to design, detail, and deliver projects independently.",
            ],
        },
        image: {
            src: "/assets/images/digitalmarketing.jpg",
            alt: "Students learning interior design and architecture",
        },
    }

    const outcomesData = {
        outcomes: {
            title: "Outcomes that matter",
            description: "Graduate ready to work as an Interior Designer, 3D Visualizer, Space Planner, or Architect's Assistant. Carry a professional portfolio that showcases design thinking, technical accuracy, and polished renders.",
        },
        certificates: {
            title: "Certificates we provide",
            items: [
                {
                    title: "Program Certificate: Interior Designing & Architecture (Integrated)",
                    description: "Covers space planning, drafting, visualization, materials, and execution.",
                },
                {
                    title: "Module Certificates:",
                    description: "Space Planning, CAD Drafting, 3D Visualization, Furniture & Lighting, BOQs, and Client Management.",
                },
            ],
        },
    };

    const availabilityData = {
        title: "Kerala availability",
        locations: [
            {
                name: "Trivandrum",
                description: "Studio-led batches in planning, drafting, and visualization.",
            },
            {
                name: "Kochi (Aluva)",
                description: "Hands-on modeling, lighting, and client presentation workshops.",
            },
            {
                name: "Thrissur",
                description: "Focus on detailing kitchens, baths, and furniture with local placement support.",
            },
        ],
    };

    const testimonials = [
        {
            id: 1,
            name: "Designer’s Assistant, Trivandrum",
            course: "Interior Designing & Architecture",
            rating: 5,
            feedback: "“My first client approved the kitchen design on the first try—the drawings were clear and detailed.”",
        },
        {
            id: 2,
            name: "3D Visualizer, Kochi",
            course: "Interior Designing & Architecture",
            rating: 5,
            feedback: "“Lighting practice made all the difference—my renders now match reality.”",
        },
        {
            id: 3,
            name: "Freelance Consultant, Thrissur",
            course: "Interior Designing & Architecture",
            rating: 5,
            feedback: "“Learning BOQs and vendor calls helped me manage execution, not just design.”",
        },
    ];


    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo jobCodes={['graphic-design', 'digital-marketing', 'it-networking']} />
            <Testimonials testimonials={testimonials} />
            <CTASection />
        </div>
    )
}