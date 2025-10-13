// components/CourseAbout/CourseAbout.tsx
import styles from './CourseAbout.module.scss';

const CourseAbout = () => {
    const learningItems = [
        {
            title: "SEO Strategy and Execution",
            description: "Keyword research, on-page and technical SEO, and performance reporting."
        },
        {
            title: "Google Ads & SEM",
            description: "Campaign setup, bidding, ad optimization, and ROI tracking."
        },
        {
            title: "Social Media Marketing",
            description: "Audience research, content calendars, and platform strategy."
        },
        {
            title: "Content Marketing",
            description: "Create and repurpose content for search and social."
        },
        {
            title: "Web Analytics",
            description: "Measure conversions, funnels, and business impact using GA4."
        },
        {
            title: "Landing Pages & Conversion",
            description: "Design and optimize pages that drive action."
        },
        {
            title: "Local & E-commerce Marketing",
            description: "Improve visibility with map SEO, product ads, and catalog optimization."
        }
    ];

    return (
        <section className={styles.courseAboutSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>About this course</h2>
                
                <div className={styles.description}>
                    <p className={styles.paragraph}>
                        We teach the way modern marketing teams actually work. Short demos, guided practice, 
                        and weekly deliverables build into a portfolio that proves your skills. Mentors give 
                        direct, practical feedback, while labs and checklists keep your execution sharp—whether 
                        it's a website, a landing page, or an ad account.
                    </p>
                    <p className={styles.paragraph}>
                        Skill Haara follows ISO 9001:2015 and ISO 21001:2018 standards, with mentor-led 
                        sessions and placement support across Trivandrum, Kochi (Aluva), and Thrissur.
                    </p>
                </div>

                <h3 className={styles.sectionTitle}>What you'll learn</h3>

                <div className={styles.learningGrid}>
                    {learningItems.map((item, index) => (
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