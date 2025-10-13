// components/WhyLearning/WhyLearning.tsx
import styles from './WhyLearning.module.scss';
import { PeopleAltOutlined, LanguageOutlined, MenuBookOutlined, ChatOutlined } from "@mui/icons-material";



const WhyLearning = () => {
    const features = [
        {
            id: 1,
            icon: <PeopleAltOutlined style={{ color: "#2563eb" }} className="feature-icon" />,
            title: "World-Class Teachers",
            description:
                "Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.",
        },
        {
            id: 2,
            icon: <LanguageOutlined style={{ color: "#2563eb" }} className="feature-icon" />,
            title: "Global Students Community",
            description:
                "Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.",
        },
        {
            id: 3,
            icon: <MenuBookOutlined style={{ color: "#2563eb" }} className="feature-icon" />,
            title: "Top Notch Courses",
            description:
                "Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.",
        },
        {
            id: 4,
            icon: <ChatOutlined style={{ color: "#2563eb" }} className="feature-icon" />,
            title: "One-on-One Mentorship",
            description:
                "Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.",
        },
    ];



    return (
        <section className={styles.whyLearningSection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Trending Courses</span>
                    <h2 className={styles.title}>Why Learning With us?</h2>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature) => (
                        <div key={feature.id} className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyLearning;