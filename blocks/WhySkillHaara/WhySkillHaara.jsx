// components/WhySkillHaara/WhySkillHaara.tsx
import styles from './WhySkillHaara.module.scss';

const WhySkillHaara = () => {
    const features = [
        {
            id: 1,
            title: 'Learn from Industry Experts',
        },
        {
            id: 2,
            title: 'Real-World Skill Development',
        },
        {
            id: 3,
            title: 'Flexible & Accessible Learning',
        },
        {
            id: 4,
            title: 'Career-Focused Growth',
        },
    ];

    return (
        <section className={styles.whySkillHaaraSection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageColumn}>
                        <img
                            src={"/assets/images/FeaturesSection.jpg"}
                            alt="SkillHaara Instructor"
                            className={styles.instructorImage}
                        />
                    </div>

                    <div className={styles.textColumn}>
                        <span className={styles.badge}>Why SkillHaara</span>

                        <h2 className={styles.title}>
                            Because we believe learning should prepare you for life, not just exams.
                        </h2>

                        <p className={styles.featureDescription}>
                            At Skill Haara, we believe learning should go beyond textbooks. We exist to empower curious minds, bold thinkers,
                            and passionate learners with skills that truly matter in the real world.
                        </p>

                        <div className={styles.featureSection}>

                            <p className={styles.description} >
                                At Skill Haara, we go beyond theory to focus on real-world skills,
                                hands-on practice, and expert mentorship. Our training programs are
                                designed to help students grow with confidence, gain industry-relevant
                                knowledge, and step into their careers fully prepared for success.
                            </p>


                            <div className="py-6 ">
                                <span className={styles.featureBadge}>
                                    Here’s why students choose Skill Haara:
                                </span>

                                <ul className="space-y-6">
                                    <li>
                                        <div className="p-1 rounded-xl">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                Practical, Real-World Learning
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Our courses focus on hands-on experience and industry-relevant knowledge,
                                                so you’re ready to tackle real challenges.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="p-1 rounded-xl">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                Expert Mentorship
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Learn from professionals who guide, inspire, and help you grow with confidence.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="p-1 rounded-xl">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                Flexible & Accessible
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Study anytime, anywhere, at your own pace, learning that fits your schedule
                                                and lifestyle.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="p-1 rounded-xl">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                Career-Focused Outcomes
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                We prepare you for success with placement support, projects, and
                                                skill-building that make you job-ready.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>




                            <span className={styles.featureBadge}>Career-Boosting Learning</span>

                            <div className={styles.featuresList}>
                                {features.map((feature) => (
                                    <div key={feature.id} className={styles.featureItem}>
                                        <div className={styles.iconWrapper}>
                                            <div className={styles.iconDiv}></div>
                                        </div>
                                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className={`${styles.description} pt-6`}>
                            Skill Haara isn’t just about learning, it’s about creating your future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySkillHaara;











