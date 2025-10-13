// components/LearningWorks/LearningWorks.tsx
import Image from 'next/image';
import styles from './LearningWorks.module.scss';

const LearningWorks = () => {
    return (
        <section className={styles.learningWorksSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Column - Text Cards */}
                    <div className={styles.leftColumn}>
                        <div className={styles.card}>
                            <h2 className={styles.cardTitle}>How learning works here</h2>
                            <ul className={styles.bulletList}>
                                <li className={styles.bulletItem}>
                                    Each week, you focus on one theme: learn it, build it, review it.
                                    Mentors are there when things don't click, and every deliverable
                                    ties back to a real business outcome.
                                </li>
                                <li className={styles.bulletItem}>
                                    Placement support—resumes, portfolios, mock interviews—helps
                                    you turn projects into offers.
                                </li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <h2 className={styles.cardTitle}>Who this fits</h2>
                            <ul className={styles.bulletList}>
                                <li className={styles.bulletItem}>
                                    After 12th learners who want a clear, practical entry into SEO, ads,
                                    social, content, and analytics.
                                </li>
                                <li className={styles.bulletItem}>
                                    Graduates, business owners, and career switchers who want a
                                    structured, project-driven program that builds results step by step.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className={styles.rightColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/digitalmarketing.jpg"
                                alt="Student learning digital marketing"
                                fill
                                className={styles.image}
                                sizes="(max-width: 968px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningWorks;