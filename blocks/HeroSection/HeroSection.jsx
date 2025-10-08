// components/HeroSection/HeroSection.tsx
import Link from 'next/link';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.videoContainer}>
                <video
                    className={styles.videoBackground}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://videos.pexels.com/video-files/4497367/4497367-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.badge}>
                    One Platform. Unlimited Learning.
                </div>

                <h1 className={styles.heading}>
                    Shape Your <span className={styles.italic}>Future with In-Demand Skills</span>
                </h1>

                <p className={styles.description}>
                    Our platform offers a wide range of courses and resources designed to help you
                    acquire new competencies and improve your employability.
                </p>

                <Link href="/get-started" className={styles.ctaButton}>
                    Get Start Now
                    <svg
                        className={styles.arrowIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;