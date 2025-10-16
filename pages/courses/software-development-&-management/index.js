import CourseAbout from '@/blocks/CourseAbout/CourseAbout'
import CourseHero from '@/blocks/CourseHero/CourseHero'
import KeralaAvailability from '@/blocks/KeralaAvailability/KeralaAvailability'
import LearningWorks from '@/blocks/LearningWorks/LearningWorks'
import OutcomesCertificates from '@/blocks/OutcomesCertificates/OutcomesCertificates'
import React from 'react'
import LatestCoursesTwo from '@/blocks/LatestCoursesTwo/LatestCoursesTwo'
import Testimonials from '@/blocks/Testimonials/Testimonials'
import CTASectionTwo from '@/blocks/CTASectionTwo/CTASectionTwo'

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


    const aboutData = {
        title: 'About this course',
        description: [
            'This course blends coding, design, testing, and deployment into a single program built for real-world engineering.Instead of long theory, you’ll move through guided coding, peer reviews, and mini-releases—each sprint ending with a deployable project.,Mentors focus on clean code, structure, and teamwork habits that make you ready for software teams.',
        ],
        availability: 'Available in Trivandrum, Kochi (Aluva), and Thrissur',
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: 'Programming Foundations (Java, Python, C, C++)',
                description:
                    'Write clean, readable code using core data structures and algorithms.',
            },
            {
                title: 'Web Foundations',
                description:
                    'Understand how the web works — HTTP, REST, sessions, and authentication.',
            },
            {
                title: 'Full-Stack Development (MERN / MEAN / Python)',
                description:
                    'Build complete applications with front-end, back-end, and database integration.',
            },
            {
                title: 'Databases & Cloud',
                description:
                    'Learn relational and NoSQL systems, cloud basics, backups, and deployment.',
            },
            {
                title: 'Agile & DevOps',
                description:
                    'Use Git, boards, pipelines, and automation to deliver features efficiently.',
            },
            {
                title: 'Software Testing & QA',
                description:
                    'Write unit, integration, and UI tests for bug-free releases.',
            },
            {
                title: 'UI/UX for Developers',
                description:
                    'Design fast, accessible, and modern interfaces using reusable components.',
            },
        ],
    }

    const learningWorksData = {
        howLearningWorks: {
            title: "How learning works here",
            points: [
                "Every module ends with a working feature you can demo and add to your portfolio.",
                "Mentors guide you in problem-solving, debugging, and deployment, while placement support ensures your projects turn into job opportunities.",
            ],
        },
        whoThisFits: {
            title: "Who this fits",
            points: [
                "Students after 12th or graduates who want to start a software career",
                "Professionals and career switchers looking for project-driven, practical training",
            ],
        },
        image: {
            src: "/assets/images/digitalmarketing.jpg",
            alt: "Students learning software development",
        },
    }

    const outcomesData = {
        outcomes: {
            title: "Outcomes that matter",
            description:
                "Graduate as a Software Developer, QA Engineer, Cloud/DevOps Trainee, or Junior Project Engineer—with GitHub projects, demos, and a confident understanding of production software delivery.",
        },
        certificates: {
            title: "Certificates we provide",
            items: [
                {
                    title: "Program Certificate: Software Development & Management (Integrated)",
                    description:
                        "Validates skills in coding, databases, testing, cloud, and DevOps.",
                },
                {
                    title: "Module Certificates:",
                    description:
                        "Programming Foundations, Full Stack, Databases & Cloud, Agile & DevOps, Software Testing & QA, UI/UX for Developers.",
                },
            ],
        },
    };


    const availabilityData = {
        title: "Kerala availability",
        locations: [
            {
                name: "Trivandrum",
                description: "Mentor-led batches focusing on full-stack, testing, and DevOps.",
            },
            {
                name: "Kochi (Aluva)",
                description: "API development, CI/CD, and cloud deployment projects.",
            },
            {
                name: "Thrissur",
                description: "Project-first guidance and placement-focused training.",
            },
        ],
    };


    const testimonials = [
        {
            id: 1,
            name: "Software Developer, Trivandrum",
            course: "Software Development & Management",
            rating: 5,
            feedback: "Pull requests stopped being scary—reviews became the fastest way to grow.”",
        },
        {
            id: 2,
            name: " QA Engineer, Kochi",
            course: "Software Development & Management",
            rating: 5,
            feedback: "CI, tests, and a one-click deploy changed how I think about quality.”",
        },
        {
            id: 3,
            name: "Full-Stack Trainee, Thrissur",
            course: "Software Development & Management",
            rating: 5,
            feedback: "The capstone’s README and demo got me two interviews in a week.",
        },
    ];

    const ctaSection = {
        title: 'Begin with clarity, finish with confidence',
        desc: ' Talk to a counselor—choose a branch, map modules to goals, and set a date to start shipping real software.',
    }



    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo jobCodes={['digital-marketing', 'ai-ml-data', 'it-networking']} />
            <Testimonials testimonials={testimonials} />
            <CTASectionTwo ctaSection={ctaSection} />
        </div>
    )
}
