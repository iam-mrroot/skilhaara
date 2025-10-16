import CourseAbout from '@/blocks/CourseAbout/CourseAbout';
import CourseHero from '@/blocks/CourseHero/CourseHero';
import KeralaAvailability from '@/blocks/KeralaAvailability/KeralaAvailability';
import LearningWorks from '@/blocks/LearningWorks/LearningWorks';
import OutcomesCertificates from '@/blocks/OutcomesCertificates/OutcomesCertificates';
import LatestCoursesTwo from '@/blocks/LatestCoursesTwo/LatestCoursesTwo';
import Testimonials from '@/blocks/Testimonials/Testimonials';
import CTASection from '@/blocks/CTASection/CTASection';
import React from 'react';

export default function DataScienceArtificialIntelligence() {

    const courseData = {
        title: "Data Science & Artificial Intelligence",
        price: "$350",
        duration: "10 Months",
        shortDescription:
            "Turn raw data into insights, predictions, and intelligent systems that solve real problems.",
        fullDescription:
            "This program blends analytics, machine learning, deep learning, and practical AI so every week ends with something real—dashboards that reveal patterns, models that predict outcomes, and apps that feel smarter with each iteration. The goal is simple: build confidence, build projects, and build a career in Kerala’s fast-moving tech ecosystem.",
        buttonOne: "Contact Us",
        buttonTwo: "Download Brochure",
        mode: "Classroom + Online",
        locations: "Trivandrum | Kochi (Aluva) | Thrissur",
    };

    const aboutData = {
        title: "About this course",
        description: [
            "This program is designed to reflect how modern AI and data teams actually work. Instead of focusing on theory alone, you’ll move through short demos, guided notebooks, and weekly deliverables that grow naturally from data cleaning to full model deployment.",
            "Every concept—from handling messy datasets to evaluating algorithms—is reinforced through hands-on labs and real projects. Mentors keep feedback practical, focusing on metrics, overfitting, feature engineering, and storytelling, so you always know what to improve and why.",
            "The course runs in modern labs with structured placement support to ensure your portfolio is interview-ready and highlights your best work.",
        ],
        availability: "Available in Trivandrum, Kochi (Aluva), and Thrissur",
        learningTitle: "What you'll learn",
        learningItems: [
            {
                title: "Data Analytics & Visualization (Power BI, Tableau)",
                description:
                    "Collect, clean, and model data. Build dashboards that answer real questions using DAX-style measures, visual grammar, and presentation techniques for non-technical teams.",
            },
            {
                title: "Python for Data",
                description:
                    "Write clean, reusable analysis code with pandas, NumPy, and matplotlib/seaborn. Keep your projects organized with structured notebooks and functions.",
            },
            {
                title: "Statistics for Decisions",
                description:
                    "Understand distributions, sampling, hypothesis testing, and confidence intervals to make data-backed decisions that hold up under scrutiny.",
            },
            {
                title: "Machine Learning Algorithms & Models",
                description:
                    "Work through the full model lifecycle—feature engineering, validation, cross-validation, and error analysis. Apply regression, classification, ensembles, and clustering effectively.",
            },
            {
                title: "Artificial Intelligence Applications",
                description:
                    "Use embeddings and APIs to build intelligent search, classification, and assistive features. Connect models to real applications and workflows.",
            },
            {
                title: "Deep Learning & Neural Networks",
                description:
                    "Understand how layers, activations, and optimizers work. Build image and text models using TensorFlow or PyTorch and apply transfer learning for efficiency.",
            },
            {
                title: "Generative AI & ChatGPT-style Use Cases",
                description:
                    "Prototype AI assistants, content tools, and chat systems using prompt design, retrieval-augmented generation (RAG), and responsible AI practices.",
            },
            {
                title: "SQL & Data Pipelines",
                description:
                    "Query, join, and aggregate data confidently. Learn how to move from ad-hoc analysis to building repeatable ETL pipelines for analytics and AI workflows.",
            },
            {
                title: "Business Analytics & Storytelling",
                description:
                    "Turn analysis into narratives—define problems, highlight key insights, and link findings to real-world business decisions and KPIs.",
            },
        ],
    };

    const learningWorksData = {
        howLearningWorks: {
            title: "How learning works here",
            points: [
                "Each module ends with a project such as a sales forecast, churn model, image classifier, or BI dashboard.",
                "If something doesn’t click, mentors step in quickly with focused guidance and examples.",
                "Placement support helps you present your portfolio in interviews and connect with top recruiters.",
            ],
        },
        whoThisFits: {
            title: "Who this fits",
            points: [
                "After 12th students and graduates seeking a practical path into analytics, ML, or AI roles.",
                "Working professionals or career switchers looking for project-based training that leads to data and AI positions.",
            ],
        },
        image: {
            src: "/assets/images/digitalmarketing.jpg",
            alt: "Students working on data science and AI projects in modern labs",
        },
    };

    const outcomesData = {
        outcomes: {
            title: "Outcomes that matter",
            description:
                "Graduate ready to contribute as a Data Analyst, Business Analyst, ML Engineer (entry), AI Engineer (entry), or Junior Data Scientist. You’ll finish with a portfolio that demonstrates your ability to solve real problems using data, ML, and AI.",
        },
        certificates: {
            title: "Certificates you’ll receive",
            items: [
                {
                    title: "Program Certificate (AI, ML, ChatGPT & Data Science – Integrated)",
                    description:
                        "Validates your expertise across analytics, ML, deep learning, and generative AI with project-based evaluations.",
                },
                {
                    title: "Module Certificates",
                    description:
                        "Earned in Analytics & Visualization, Python for Data, Machine Learning, Deep Learning, Generative AI Applications, SQL & Pipelines, and Business Analytics.",
                },
            ],
        },
    };

    const availabilityData = {
        title: "Kerala Locations",
        locations: [
            {
                name: "Trivandrum",
                description:
                    "Mentor-led sessions in analytics, ML, and deep learning with weekday and weekend batches. Projects reflect real local business use cases.",
            },
            {
                name: "Kochi (Aluva, Ernakulam)",
                description:
                    "Hands-on modeling, BI dashboards, and AI prototypes with strong emphasis on problem framing and storytelling for business impact.",
            },
            {
                name: "Thrissur",
                description:
                    "Project-first learning approach focusing on models, visuals, and presentations. Includes dedicated placement assistance to turn your skills into offers.",
            },
        ],
    };


    return (
        <div>
            <CourseHero courseData={courseData} />
            <CourseAbout aboutData={aboutData} />
            <LearningWorks learningWorksData={learningWorksData} />
            <OutcomesCertificates outcomesData={outcomesData} />
            <KeralaAvailability availabilityData={availabilityData} />
            <LatestCoursesTwo />
            <Testimonials />
            <CTASection />
        </div>
    );
}
