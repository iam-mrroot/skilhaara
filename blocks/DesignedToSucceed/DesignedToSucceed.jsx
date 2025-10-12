// components/DesignedToSucceed/DesignedToSucceed.tsx
import styles from './DesignedToSucceed.module.scss';

const DesignedToSucceed = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="12" r="4" fill="#5b7cff" />
                    <circle cx="20" cy="12" r="6" stroke="#5b7cff" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M15 28C15 24.6863 17.6863 22 21 22C24.3137 22 27 24.6863 27 28" stroke="#5b7cff" strokeWidth="2" strokeLinecap="round" />
                    <rect x="18" y="30" width="4" height="6" rx="1" fill="#5b7cff" />
                </svg>
            ),
            title: 'Smart Learning',
            description: 'Built by experts to guide your learning journey',
        },
        {
            id: 2,
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="12" r="4" fill="#5b7cff" />
                    <circle cx="20" cy="12" r="6" stroke="#5b7cff" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M15 28C15 24.6863 17.6863 22 21 22C24.3137 22 27 24.6863 27 28" stroke="#5b7cff" strokeWidth="2" strokeLinecap="round" />
                    <rect x="18" y="30" width="4" height="6" rx="1" fill="#5b7cff" />
                </svg>
            ),
            title: 'Smart Learning',
            description: 'Built by experts to guide your learning journey',
        },
        {
            id: 3,
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="12" r="4" fill="#5b7cff" />
                    <circle cx="20" cy="12" r="6" stroke="#5b7cff" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M15 28C15 24.6863 17.6863 22 21 22C24.3137 22 27 24.6863 27 28" stroke="#5b7cff" strokeWidth="2" strokeLinecap="round" />
                    <rect x="18" y="30" width="4" height="6" rx="1" fill="#5b7cff" />
                </svg>
            ),
            title: 'Smart Learning',
            description: 'Built by experts to guide your learning journey',
        },
    ];

    return (
        <section className={styles.designedSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Why Learn with us</span>
                    <h2 className={styles.title}>Designed to help you succeed</h2>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.imageColumn}>
                        <img 
                            src={"https://images.pexels.com/photos/5427817/pexels-photo-5427817.jpeg"} 
                            alt="Study materials and desk setup" 
                            className={styles.columnImage}
                        />
                    </div>

                    <div className={styles.featuresColumn}>
                        <div className={styles.featuresWrapper}>
                            {features.map((feature) => (
                                <div key={feature.id} className={styles.featureCard}>
                                    <div className={styles.iconWrapper}>
                                        {feature.icon}
                                    </div>
                                    <div className={styles.featureContent}>
                                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                                        <p className={styles.featureDescription}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.imageColumnWithButtons}>
                        <img 
                            src={"https://images.pexels.com/photos/5427817/pexels-photo-5427817.jpeg"} 
                            alt="Student learning with books" 
                            className={styles.columnImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignedToSucceed;