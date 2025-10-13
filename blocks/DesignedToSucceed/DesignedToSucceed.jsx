// components/DesignedToSucceed/DesignedToSucceed.tsx
import styles from './DesignedToSucceed.module.scss';

const DesignedToSucceed = () => {
    const features = [
        {
            id: 1,
            icon: (
                <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#5b7cff' }}>
                    schedule
                </span>
            ),
            title: 'Flexible Learning',
            description: 'Learn when it works for you anytime, anywhere, at your own pace.',
        },
        {
            id: 2,
            icon: (
                <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#5b7cff' }}>
                    school
                </span>
            ),
            title: 'Expert Instructors',
            description: 'Gain insights and mentorship from experienced professionals who guide your learning journey.',
        },
        {
            id: 3,
            icon: (
                <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#5b7cff' }}>
                    workspace_premium
                </span>
            ),
            title: 'Recognized Certificates',
            description: 'Earn industry-recognized certificates to boost your career profile.',
        },
    ];

    return (
        <section className={styles.designedSection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Why Learn with us</span>
                    <h2 className={styles.title}>Designed to help you succeed</h2>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.imageColumn}>
                        <img
                            src={"/assets/images/whylearnusone.jpg"}
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
                            src={"/assets/images/whylearnustwo.jpg"}
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