import CourseAbout from '@/blocks/CourseAbout/CourseAbout';
import CourseHero from '@/blocks/CourseHero/CourseHero';
import KeralaAvailability from '@/blocks/KeralaAvailability/KeralaAvailability';
import LearningWorks from '@/blocks/LearningWorks/LearningWorks';
import OutcomesCertificates from '@/blocks/OutcomesCertificates/OutcomesCertificates';
import LatestCoursesTwo from '@/blocks/LatestCoursesTwo/LatestCoursesTwo';
import Testimonials from '@/blocks/Testimonials/Testimonials';
import CTASection from '@/blocks/CTASection/CTASection';
import React from 'react';

export default function GraphicDesigningPage() {
    const courseData = {
        title: "Graphic Designing & Animation",
        price: "$300",
        duration: "8 Months",
        shortDescription: "Bring ideas to life with visuals that inspire and move people.",
        fullDescription:
            "This program blends design craft with motion storytelling—helping you master tools, principles, and workflows used by modern creative studios. Every project adds something real to your portfolio, proving your skills in branding, UI/UX, motion graphics, and 3D animation. Whether your goal is to design brands, create interfaces, or animate for digital campaigns, this training builds step by step until your work is career-ready in Kerala’s fast-growing creative market.",
        buttonOne: "Contact Us",
        buttonTwo: "Download Brochure",
        mode: "Classroom + Online",
        locations: "Trivandrum | Kochi (Aluva) | Thrissur",
    }

    const aboutData = {
        title: "About this course",
        description: [
            "Learning in this program mirrors the pace and process of professional creative teams. You will experience guided practice and weekly deliverables across graphics, motion, and UI/UX, combined with hands-on labs and workshops designed to make production workflows repeatable across print, web, and video.",
            "Mentors provide practical, actionable feedback on composition, color, typography, timing, and storytelling, ensuring each skill is understood and applied effectively.",
            "The program is delivered in modern labs with structured portfolio and placement support to help you graduate with tangible, career-ready work.",
        ],
        availability: "Available in Trivandrum, Kochi (Aluva), and Thrissur",
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: "Graphic Design Foundations",
                description:
                    "Master layout, grids, typography, color systems, and hierarchy so your designs look intentional and communicate instantly.",
            },
            {
                title: "Tools for Creators (Photoshop, Illustrator, CorelDRAW)",
                description:
                    "Retouch photos, create composites, and build clean vectors, logos, and print-ready artwork with professional precision.",
            },
            {
                title: "Branding & Identity",
                description:
                    "Move beyond logos to design complete brand systems—voice, visuals, palettes, type pairs, icons, and brand guidelines.",
            },
            {
                title: "UI/UX Design",
                description:
                    "Plan user journeys, wireframes, responsive layouts, and prototypes that make products intuitive and enjoyable.",
            },
            {
                title: "Motion Graphics & Video (After Effects, Premiere)",
                description:
                    "Animate type, shape layers, and transitions. Edit sequences with rhythm, add sound, and export content for social and web.",
            },
            {
                title: "3D & Animation (Blender, Maya, 3ds Max)",
                description:
                    "Model, light, animate, and render stills or short loops for ads, explainers, or games. Understand pipeline basics for team projects.",
            },
            {
                title: "Game & Web Assets",
                description:
                    "Design optimized icons, sprites, and UI skins with export discipline suitable for developers and game engines.",
            },
            {
                title: "Print & Publishing",
                description:
                    "Create brochures, posters, packaging, and publications with specs that ensure color accuracy and cost control.",
            },
            {
                title: "Visual Storytelling",
                description:
                    "Turn briefs into narratives—storyboards, sequences, and campaigns that deliver clarity and emotional impact.",
            },
        ],
    }

    const learningWorksData = {
        howLearningWorks: {
            title: "How learning works here",
            points: [
                "Each module ends with a portfolio-ready project—brand kits, poster series, UI prototypes, motion idents, 3D visuals, or video edits.",
                "Mentors review your work with specific, actionable feedback to help you improve faster.",
                "Placement support helps you turn your portfolio into studio interviews and freelance opportunities.",
            ],
        },
        whoThisFits: {
            title: "Who this fits",
            points: [
                "After 12th students who want to build a practical portfolio across graphics, motion, UI/UX, and 3D.",
                "Graduates, career switchers, and freelancers who need structured, project-driven training that compounds into studio-ready skills.",
            ],
        },
        image: {
            src: "/assets/images/digitalmarketing.jpg",
            alt: "Students creating graphic design and animation projects in studio",
        },
    }

    const outcomesData = {
        outcomes: {
            title: "Outcomes that matter",
            description:
                "Graduate ready to work as a Graphic Designer, UI/UX Designer, Motion Designer, Animator, Video Editor, or Game Asset Artist. You’ll leave with a portfolio that proves your craft, not just coursework.",
        },
        certificates: {
            title: "Certificates you’ll receive",
            items: [
                {
                    title: "Program Certificate (Graphic Designing & Animation – Integrated)",
                    description:
                        "Covers graphics, branding, UI/UX, motion, and 3D with lab practice and performance-based assessments.",
                },
                {
                    title: "Module Certificates",
                    description:
                        "Earned in Graphic Design Tools, Branding & Identity, UI/UX, Motion Graphics & Video, 3D & Animation, and Print & Publishing.",
                },
            ],
        },
    }

    const availabilityData = {
        title: "Kerala Locations",
        locations: [
            {
                name: "Trivandrum",
                description:
                    "Studio-led classes in graphics, motion, and UI/UX. Weekday and weekend batches focused on portfolio creation and presentation skills.",
            },
            {
                name: "Kochi (Aluva, Ernakulam)",
                description:
                    "Hands-on training in brand kits, UI prototypes, and motion idents with review sessions that prepare you for interviews and client calls.",
            },
            {
                name: "Thrissur",
                description:
                    "Project-first focus on print, social, and 3D visuals with supportive peer critique and placement guidance.",
            },
        ],
    }

    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo jobCodes={['digital-marketing', 'it-networking', 'interior-design']} />
            <Testimonials />
            <CTASection />
        </div>
    );
}
