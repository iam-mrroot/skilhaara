// components/DesignedToSucceed/DesignedToSucceed.tsx
import styles from './DesignedToSucceed.module.scss';

const DesignedToSucceed = () => {
    const features = [
        {
            id: 1,
            icon: (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                    <span className="material-symbols-outlined text-3xl">schedule</span>
                </div>
            ),
            title: 'Industry-Driven Training',
            description: 'Ensuring every skill you learn adds real value to your career.',
        },
        {
            id: 2,
            icon: (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                    <span className="material-symbols-outlined text-3xl">school</span>
                </div>
            ),
            title: 'Expert Mentorship',
            description: 'Learn directly from experienced professionals.',
        },
        {
            id: 3,
            icon: (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                </div>
            ),
            title: 'Career-Focused Outcomes',
            description: 'We don’t just teach, we prepare you for success.',
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