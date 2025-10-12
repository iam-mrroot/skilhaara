// components/WhySkillHaara/WhySkillHaara.tsx
import styles from './WhySkillHaara.module.scss';

const WhySkillHaara = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                </svg>
            ),
            title: 'Short heading goes here',
        },
        {
            id: 2,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                </svg>
            ),
            title: 'Short heading goes here',
        },
        {
            id: 3,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                </svg>
            ),
            title: 'Short heading goes here',
        },
        {
            id: 4,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                </svg>
            ),
            title: 'Short heading goes here',
        },
    ];

    return (
        <section className={styles.whySkillHaaraSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageColumn}>
                        <img
                            src={"/assets/images/WhySkillHaara.jpg"}
                            alt="SkillHaara Instructor"
                            className={styles.instructorImage}
                        />
                    </div>

                    <div className={styles.textColumn}>
                        <span className={styles.badge}>Why SkillHaara</span>

                        <h2 className={styles.title}>
                            We exist for curious minds, bold thinkers and passionate learners.
                            For those who are eager to learn. Those who aren't afraid to dive
                            r and learn more.
                        </h2>

                        <div className={styles.featureSection}>
                            <span className={styles.featureBadge}>Career-Boosting Learning</span>

                            <p className={styles.featureDescription}>
                                Empower your future with flexible, practical, and expert-led
                                learning designed for real success.
                            </p>

                            <div className={styles.featuresList}>
                                {features.map((feature) => (
                                    <div key={feature.id} className={styles.featureItem}>
                                        <div className={styles.iconWrapper}>
                                            {/* {feature.icon} */}
                                            <div className={styles.iconDiv}></div>
                                        </div>
                                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySkillHaara;