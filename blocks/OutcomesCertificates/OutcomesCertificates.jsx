// components/OutcomesCertificates/OutcomesCertificates.tsx
import styles from './OutcomesCertificates.module.scss';

const OutcomesCertificates = ({ outcomesData }) => {
    if (!outcomesData) return null;

    const { outcomes, certificates } = outcomesData;

    return (
        <section className={styles.outcomesSection} data-aos="zoom-in">
            <div className={styles.container}>
                {/* Outcomes Section */}
                <div className={styles.outcomesBlock}>
                    <h2 className={styles.mainTitle}>{outcomes.title}</h2>
                    <p className={styles.description}>{outcomes.description}</p>
                </div>

                {/* Certificates Section */}
                <div className={styles.certificatesBlock}>
                    <h2 className={styles.mainTitle}>{certificates.title}</h2>
                    <div className={styles.certificatesList}>
                        {certificates.items.map((cert, index) => (
                            <div key={index} className={styles.certificateItem}>
                                <div className={styles.checkIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
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
                                    {cert.description && (
                                        <span className={styles.certificateDescription}> — {cert.description}</span>
                                    )}
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
