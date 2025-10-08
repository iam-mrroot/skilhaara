// components/WhyLearning/WhyLearning.tsx
import styles from './WhyLearning.module.scss';

const WhyLearning = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="20" cy="18" r="8" stroke="#1a1a1a" strokeWidth="2.5" />
                    <path d="M10 42C10 35.3726 15.3726 30 22 30C28.6274 30 34 35.3726 34 42" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="44" cy="20" r="6" stroke="#1a1a1a" strokeWidth="2.5" />
                    <path d="M36 42C36 37.5817 39.5817 34 44 34C48.4183 34 52 37.5817 52 42" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="48" cy="40" r="4" fill="#2563eb" />
                    <path d="M44 48L48 52L56 44" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'World-Class Teachers',
            description: 'Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.',
        },
        {
            id: 2,
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="28" r="8" stroke="#1a1a1a" strokeWidth="2.5" />
                    <path d="M18 48C18 41.3726 23.3726 36 30 36H34C40.6274 36 46 41.3726 46 48" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="48" cy="16" r="6" fill="#2563eb" />
                    <circle cx="20" cy="20" r="5" fill="#2563eb" />
                    <circle cx="48" cy="38" r="4" fill="#2563eb" />
                </svg>
            ),
            title: 'Global Students Community',
            description: 'Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.',
        },
        {
            id: 3,
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect x="14" y="18" width="32" height="24" rx="2" stroke="#1a1a1a" strokeWidth="2.5" />
                    <path d="M14 26H46" stroke="#1a1a1a" strokeWidth="2.5" />
                    <path d="M22 32H38" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 36H34" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M38 48L42 52L50 44" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="44" cy="48" r="10" fill="#2563eb" fillOpacity="0.1" />
                </svg>
            ),
            title: 'Top Notch Courses',
            description: 'Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.',
        },
        {
            id: 4,
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M44 18C44 12.4772 39.5228 8 34 8C28.4772 8 24 12.4772 24 18C24 23.5228 28.4772 28 34 28C39.5228 28 44 23.5228 44 18Z" stroke="#1a1a1a" strokeWidth="2.5" />
                    <path d="M18 38L28 48L18 58" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="46" cy="46" r="8" fill="#2563eb" />
                    <path d="M42 46H50M46 42V50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
            title: 'One-on-One Mentorship',
            description: 'Explore our top-rated courses crafted to equip you with real-world skills and in-demand competencies for personal and professional growth.',
        },
    ];

    return (
        <section className={styles.whyLearningSection}>
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