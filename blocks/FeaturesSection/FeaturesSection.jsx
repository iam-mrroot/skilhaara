// components/FeaturesSection/FeaturesSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturesSection.module.scss';

const FeaturesSection = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.cardsGrid}>
                    {/* Rating Card */}
                    <div className={styles.card}>
                        <div className={styles.avatarGroup}>
                            <div className={styles.avatar}>
                                <Image src="/images/user1.jpg" alt="User 1" width={60} height={60} />
                            </div>
                            <div className={styles.avatar}>
                                <Image src="/images/user2.jpg" alt="User 2" width={60} height={60} />
                            </div>
                            <div className={styles.avatar}>
                                <Image src="/images/user3.jpg" alt="User 3" width={60} height={60} />
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
                            4.9/5 rating from 210+ review
                        </p>

                        <p className={styles.description}>
                            Our platform offers a wide range of courses designed for employability.
                        </p>

                        <Link href="/courses" className={styles.exploreButton}>
                            Explore Course
                        </Link>
                    </div>

                    {/* Learning Path Card */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 14L21 9L12 4L3 9L12 14Z"
                                    stroke="#8B6B47"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 14L21 9V16L12 21L3 16V9L12 14Z"
                                    stroke="#8B6B47"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
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

                    {/* Video Card */}
                    <div className={styles.videoCard}>
                        {/* <video
                            className={styles.video}
                            poster="/images/video-thumbnail.jpg"
                            controls={false}
                        >
                            <source src="/videos/intro-video.mp4" type="video/mp4" />
                        </video> */}
                        <img src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=400" className={styles.video} alt="" />
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

                {/* Courses Tag */}
                {/* <div className={styles.coursesTag}>
          Courses
        </div> */}
            </div>
        </section>
    );
};

export default FeaturesSection;