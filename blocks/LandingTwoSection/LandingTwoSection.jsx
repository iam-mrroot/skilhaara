

import styles from './LandingTwoSection.module.scss';

const LandingTwoSection = ({ landingTwoSectionData }) => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.overlay} />
            <div className={styles.backgroundImage}>
                <img src={landingTwoSectionData?.backgroundImage} alt="Learning environment" />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>{landingTwoSectionData?.tag}</span>

                    <h2 className={styles.title}>
                        {landingTwoSectionData?.title}
                    </h2>

                    <p className={styles.description}>
                        {landingTwoSectionData?.description}
                    </p>

                    <button className={styles.ctaButton}>
                        {landingTwoSectionData?.buttonText}
                        {/* <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className={styles.arrowIcon}
                        >
                            <path
                                d="M7 4L13 10L7 16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg> */}
                        <span className={`${styles.icon} material-symbols-outlined`}>
                            arrow_circle_right
                        </span>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default LandingTwoSection;