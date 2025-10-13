// components/CourseHero/CourseHero.tsx
import Link from 'next/link';
import styles from './CourseHero.module.scss';

const CourseHero = ({ courseData }) => {
    return (
        <section className={styles.courseHeroSection}>
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span className={styles.separator}>/</span>
                    <Link href="/courses">Courses</Link>
                    <span className={styles.separator}>/</span>
                    <span>{courseData?.title}</span>
                </nav>

                <div className={styles.heroContent}>
                    {/* Left Content */}
                    <div className={styles.leftContent}>
                        <h1 className={styles.title}>{courseData?.title}</h1>
                        <p className={styles.description}>
                            {courseData?.fullDescription}
                        </p>
                        <button className={styles.connectButton}>
                            {courseData?.buttonOne}
                        </button>
                    </div>

                    {/* Right Card */}
                    <div className={styles.rightCard}>
                        <div className={styles.decorativePattern}>
                            <div className={styles.dotPattern}>
                                {[...Array(27)].map((_, i) => (
                                    <span key={i} className={styles.dot}></span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.priceSection}>
                                <h2 className={styles.price}>{courseData?.price}</h2>
                                <h3 className={styles.cardTitle}>Course Information</h3>
                            </div>

                            <div className={styles.courseDetails}>
                                <div className={styles.detailRow}>
                                    <div className={styles.detailLabel}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2 4L10 2L18 4V11C18 15 10 18 10 18C10 18 2 15 2 11V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Level</span>
                                    </div>
                                    <span className={styles.detailValue}>Beginner</span>
                                </div>

                                <div className={styles.detailRow}>
                                    <div className={styles.detailLabel}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M3 8H17" stroke="currentColor" strokeWidth="2" />
                                            <path d="M7 1V4M13 1V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span>Lectures</span>
                                    </div>
                                    <span className={styles.detailValue}>32 Lectures</span>
                                </div>

                                <div className={styles.detailRow}>
                                    <div className={styles.detailLabel}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                                            <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span>Duration</span>
                                    </div>
                                    <span className={styles.detailValue}>{courseData?.duration}</span>
                                </div>
                            </div>

                            <button className={styles.startButton}>
                                {courseData?.buttonTwo}
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;