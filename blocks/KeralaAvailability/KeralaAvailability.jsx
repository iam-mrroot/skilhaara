// components/KeralaAvailability/KeralaAvailability.tsx
import styles from './KeralaAvailability.module.scss';

const KeralaAvailability = ({ availabilityData }) => {
    if (!availabilityData) return null;

    const { title, locations } = availabilityData;

    return (
        <section className={styles.availabilitySection}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>{title}</h2>

                    <div className={styles.divider}></div>

                    <div className={styles.locationsGrid}>
                        {locations.map((location, index) => (
                            <div key={index} className={styles.locationItem}>
                                <div className={styles.locationHeader}>
                                    <div className={styles.checkIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" fill="currentColor" />
                                            <path
                                                d="M8 12L11 15L16 9"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className={styles.locationName}>{location.name}</h3>
                                </div>
                                <p className={styles.locationDescription}>{location.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeralaAvailability;
