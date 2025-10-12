

import styles from './LandingTwoSection.module.scss';

const LandingTwoSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.overlay} />
            <div className={styles.backgroundImage}>
                <img src={'https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg'} alt="Learning environment" />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>About us</span>

                    <h2 className={styles.title}>
                        Who we are & why we help you move forward
                    </h2>

                    <p className={styles.description}>
                        We focus on practical learning covering real-world topics through simple,
                        easy-to-follow lessons, guided by industry experts to ensure you gain skills
                        that truly matter.
                    </p>

                    <button className={styles.ctaButton}>
                        Get Start Now
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