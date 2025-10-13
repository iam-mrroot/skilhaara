// components/FeaturesSection/FeaturesSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturesSection.module.scss';

const FeaturesSection = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>
                    {/* Left Column - Two Cards */}
                    <div className={styles.cardsColumn} data-aos="zoom-in">
                        {/* Rating Card */}
                        <div className={`${styles.card} ${styles.ratingCard}`}>
                            <div className={styles.avatarGroup}>
                                <div className={styles.avatar}>
                                    <Image src="/assets/images/client.jpg" alt="User 1" width={60} height={60} />
                                </div>
                                <div className={styles.avatar}>
                                    <Image src="/assets/images/client.jpg" alt="User 2" width={60} height={60} />
                                </div>
                                <div className={styles.avatar}>
                                    <Image src="/assets/images/client.jpg" alt="User 3" width={60} height={60} />
                                </div>
                            </div>

                            <div className={styles.stars}>
                                <span className={styles.star}>★</span>
                                <span className={styles.star}>★</span>
                                <span className={styles.star}>★</span>
                                <span className={styles.star}>★</span>
                                <span className={styles.star}>★</span>
                            </div>

                            <p className={styles.ratingText}>
                                4.9/5 rating from 210+ reviews
                            </p>

                            <p className={styles.description}>
                                Our platform offers a wide range of courses designed for employability.
                            </p>

                            <Link href="/courses" className={styles.exploreButton}>
                                Explore Course
                            </Link>
                        </div>

                        {/* Learning Path Card */}
                        <div className={`${styles.card} ${styles.learningCard}`}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.avatar}>
                                    <Image src="/assets/images/client.jpg" alt="Learning path" width={60} height={60} />
                                </div>
                            </div>

                            <h3 className={styles.cardTitle}>
                                Road to learning for a successful career and profession
                            </h3>

                            <p className={styles.cardDescription}>
                                Discover diverse courses on our platform.
                            </p>

                            <Link href="/courses" className={styles.textLink}>
                                Explore Course
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Video */}
                    <div className={styles.videoColumn} data-aos="zoom-in">
                        <div className={styles.videoCard}>
                            <img
                                src="/assets/images/FeaturesSection.jpg"
                                className={styles.video}
                                alt="Video thumbnail"
                            />
                            <button className={styles.playButton}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M8 5V19L19 12L8 5Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;