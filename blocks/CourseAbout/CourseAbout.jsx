// components/CourseAbout/CourseAbout.tsx
import styles from './CourseAbout.module.scss';

const CourseAbout = ({ aboutData }) => {
    return (
        <section className={styles.courseAboutSection} data-aos="zoom-in">
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>{aboutData.title}</h2>

                <div className={styles.description}>
                    {aboutData.description.map((para, index) => (
                        <p key={index} className={styles.paragraph}>
                            {para}
                        </p>
                    ))}
                    <p className={styles.paragraph}>{aboutData.availability}</p>
                </div>

                <h3 className={styles.sectionTitle}>{aboutData.learningTitle}</h3>

                <div className={styles.learningGrid}>
                    {aboutData.learningItems.map((item, index) => (
                        <div key={index} className={styles.learningItem}>
                            <div className={styles.checkmark}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20 6L9 17L4 12"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className={styles.itemContent}>
                                <h4 className={styles.itemTitle}>{item.title}</h4>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseAbout;
