// components/HeroSection/HeroSection.tsx
import styles from './OurCourses.module.scss';
// import heroImage from '@/assets/hero-image.png'; // Adjust path as needed

const OurCourses = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            Grow your career!<br />
                            Start learning with Academy.
                        </h1>
                        <p className={styles.description}>
                            Explore our top-rated courses crafted to equip you with real-world
                            skills and in-demand competencies for personal and professional growth.
                        </p>
                        <button className={styles.ctaButton}>
                            Our Courses
                        </button>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src={'/assets/images/growyourcarrer.png'}
                            alt="Learning dashboard interface"
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCourses;