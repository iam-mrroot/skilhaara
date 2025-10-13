// components/OutcomesCertificates/OutcomesCertificates.tsx
import styles from './OutcomesCertificates.module.scss';

const OutcomesCertificates = () => {
    const certificates = [
        {
            title: "Program Certificate: Digital Marketing (Integrated)",
            description: "validates your full journey across SEO, SEM, SMM, Content, and Analytics"
        },
        {
            title: "Module Certificates: SEO, SEM/Google Ads, Social Media, Content, Web Analytics",
            description: "ideal for staged progress and portfolio proof."
        }
    ];

    return (
        <section className={styles.outcomesSection}>
            <div className={styles.container}>
                {/* Outcomes Section */}
                <div className={styles.outcomesBlock}>
                    <h2 className={styles.mainTitle}>Outcomes that matter</h2>
                    <p className={styles.description}>
                        By the end, you'll be confident managing organic growth (SEO), paid ads (SEM/Google Ads), 
                        social campaigns, and analytics reporting. You'll be ready for roles like Digital Marketing 
                        Specialist, SEO Analyst, Social Media Manager, or Ads Executive—backed by a portfolio that 
                        proves you can deliver.
                    </p>
                </div>

                {/* Certificates Section */}
                <div className={styles.certificatesBlock}>
                    <h2 className={styles.mainTitle}>Certificates we provide</h2>
                    <div className={styles.certificatesList}>
                        {certificates.map((cert, index) => (
                            <div key={index} className={styles.certificateItem}>
                                <div className={styles.checkIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                                        <path 
                                            d="M8 12L11 15L16 9" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.certificateContent}>
                                    <span className={styles.certificateTitle}>{cert.title}</span>
                                    <span className={styles.certificateDescription}> — {cert.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutcomesCertificates;