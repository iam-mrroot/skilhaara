import CourseAbout from '@/blocks/CourseAbout/CourseAbout';
import CourseHero from '@/blocks/CourseHero/CourseHero';
import KeralaAvailability from '@/blocks/KeralaAvailability/KeralaAvailability';
import LearningWorks from '@/blocks/LearningWorks/LearningWorks';
import OutcomesCertificates from '@/blocks/OutcomesCertificates/OutcomesCertificates';
import LatestCoursesTwo from '@/blocks/LatestCoursesTwo/LatestCoursesTwo';
import Testimonials from '@/blocks/Testimonials/Testimonials';
import CTASection from '@/blocks/CTASection/CTASection';
import React from 'react';

export default function FashionDesigningPage() {
    const courseData = {
        title: "Fashion Designing",
        price: "$250",
        duration: "8 Months",
        shortDescription: "Create, stitch, and showcase your own fashion identity.",
        fullDescription:
            "Fashion is more than just clothing—it’s self-expression, confidence, and art you can wear. This program takes you from sketching an idea to seeing it walk the runway (or enter a boutique). Every stitch, every drape, every detail is guided so your creativity turns into a portfolio that speaks for itself—and opens doors across Kerala’s vibrant fashion industry.",
        buttonOne: "Contact Us",
        buttonTwo: "Download Brochure",
        mode: "Studio + Online",
        locations: "Trivandrum | Kochi (Aluva) | Thrissur",
    }

    const aboutData = {
        title: "About this course",
        description: [
            "Learning here feels like being in a real studio: short demos to spark ideas, focused practice to build skill, and projects that move from illustration to fabric, fitting, and flawless finishing.",
            "Mentors guide you closely with feedback that feels personal, while labs and workshops give you the comfort of working both on the machine and on the mannequin.",
            "Training happens at our modern studios in Trivandrum, Kochi (Aluva, Ernakulam), and Thrissur, with structured placement support at the end.",
        ],
        availability: "Available in Trivandrum, Kochi (Aluva), and Thrissur",
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: "Fashion Illustration & Sketching",
                description:
                    "Bring your imagination to life. Master proportions, poses, textures, drapes, and color stories. Move from pencil to digital illustration for a professional look.",
            },
            {
                title: "Garment Construction & Fabric Design",
                description:
                    "Learn how a flat sketch becomes a perfect fit: measurements, patterns, seams, finishes, and adjustments. Explore fabrics, prints, and textures.",
            },
            {
                title: "Boutique Management & Entrepreneurship",
                description:
                    "Understand the business side: pricing, sourcing, client handling, and branding. Build a practical plan for your boutique or home studio.",
            },
            {
                title: "Embroidery Techniques (Aari Work)",
                description:
                    "Learn Aari embroidery from frame setup to decorative stitches. Add handcrafted beauty to bridal and couture designs.",
            },
            {
                title: "Fashion CAD & Digital Pattern Making",
                description:
                    "Move from manual to digital pattern blocks, grading, and layouts for precise and production-ready designs.",
            },
            {
                title: "Fashion Rendering & Vector Graphics",
                description:
                    "Render fabric fall, shine, and volume. Create clean, scalable digital vectors for prints, logos, and look-books.",
            },
            {
                title: "Surface Embellishments & Textile Craft",
                description:
                    "Experiment with applique, beadwork, and ornamentation that transform simple garments into signature pieces.",
            },
            {
                title: "Portfolio & Collection Development",
                description:
                    "Curate a mini-collection with mood boards, flats, patterns, and stitched samples. Present a cohesive story that stands out.",
            },
        ],
    }

    const learningWorksData = {
        howLearningWorks: {
            title: "How learning works here",
            points: [
                "Each week focuses on one skill: learn it, practice it, and apply it to a garment or accessory.",
                "Studios are supportive, feedback is constructive, and progress is steady.",
                "Placement support includes portfolio reviews, mock presentations, and brand or atelier connections.",
            ],
        },
        whoThisFits: {
            title: "Who this fits",
            points: [
                "After 12th learners who want to turn creativity into a career.",
                "Graduates and career switchers who need a studio-driven pathway into fashion.",
                "Aspiring boutique owners who want the skills and business know-how to start local.",
            ],
        },
        image: {
            src: "/assets/images/digitalmarketing.jpg",
            alt: "Students working on fashion design projects in studio",
        },
    }

    const outcomesData = {
        outcomes: {
            title: "Outcomes that matter",
            description:
                "Walk out job-ready and portfolio-ready, skilled in fit, finish, and presentation. Build confidence to apply for roles like Fashion Designer, Stylist, Boutique Owner, Embroidery Specialist (Aari), CAD / Pattern Assistant, or Fashion Illustrator.",
        },
        certificates: {
            title: "Certificates you’ll receive",
            items: [
                {
                    title: "Program Certificate (Fashion Designing – Integrated)",
                    description:
                        "Covers the full journey from illustration to portfolio with hands-on studio practice.",
                },
                {
                    title: "Module Certificates",
                    description:
                        "Earned in Fashion Illustration, Garment Construction, Aari & Embellishments, CAD/Pattern Making, and Boutique Management.",
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
                    "Studio-led practice in sketching, garment construction, and Aari work with weekday and weekend batches—ideal for learners building a first portfolio in the capital.",
            },
            {
                name: "Kochi (Aluva, Ernakulam)",
                description:
                    "Hands-on sessions in illustration, CAD, and boutique management. Present mini-collections and get interview-style feedback to polish articulation and fit.",
            },
            {
                name: "Thrissur",
                description:
                    "Focused workshops on construction, embellishment, and finishing with supportive peer reviews and guidance for local boutique opportunities.",
            },
        ],
    }

    const testimonials = [
        {
            id: 1,
            name: "Designer’s Assistant, Trivandrum",
            course: "Fashion Designing",
            rating: 5,
            feedback: "“Seeing my sketch turn into a fitted dress gave me confidence I never imagined.”",
        },
        {
            id: 2,
            name: "Embroidery Specialist, Kochi",
            course: "Fashion Designing",
            rating: 5,
            feedback: "“Aari went from intimidating to meditative—the rhythm of the frame is now my stress-buster.”",
        },
        {
            id: 3,
            name: "Boutique Owner, Thrissur",
            course: "Fashion Designing",
            rating: 5,
            feedback: "“The boutique module gave me courage to launch my custom blouse line before Onam.”",
        },
    ];



    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo jobCodes={['graphic-design', 'digital-marketing', 'interior-design']} />
            <Testimonials testimonials={testimonials}/>
            <CTASection />
        </div>
    );
}
