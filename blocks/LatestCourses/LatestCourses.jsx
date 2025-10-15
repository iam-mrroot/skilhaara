// components/LatestCourses/LatestCourses.tsx
import Link from 'next/link';
import styles from './LatestCourses.module.scss';

const LatestCourses = () => {
    const courses = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Information Technology & Networking',
            description: 'Lay the strongest foundation in networking, cybersecurity, cloud (AWS), and Linux with hands-on labs and mentor support. Build skills that power today\'s connected world.',
            level: 'Level',
            btnLink: "/courses/information-technology-&-networking"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Interior Designing & Architecture',
            description: 'Learn how to ship SEO, Google Ads, social campaigns, and content deliverables every week. Graduate with a portfolio that local brands and agencies already trust.',
            level: 'Level',
            btnLink: "/courses/interior-designing-&-architecture"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Software Development & Management',
            description: 'Transform imagination into reality—master illustration, garment construction, Aari embroidery, CAD pattern making, and boutique management to shape your future in fashion.',
            level: 'Level',
            btnLink: "/courses/software-development-&-management"
        },
        {
            id: 1,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Information Technology & Networking',
            description: 'Lay the strongest foundation in networking, cybersecurity, cloud (AWS), and Linux with hands-on labs and mentor support. Build skills that power today\'s connected world.',
            level: 'Level',
            btnLink: "/courses/information-technology-&-networking"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Interior Designing & Architecture',
            description: 'Learn how to ship SEO, Google Ads, social campaigns, and content deliverables every week. Graduate with a portfolio that local brands and agencies already trust.',
            level: 'Level',
            btnLink: "/courses/interior-designing-&-architecture"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Software Development & Management',
            description: 'Transform imagination into reality—master illustration, garment construction, Aari embroidery, CAD pattern making, and boutique management to shape your future in fashion.',
            level: 'Level',
            btnLink: "/courses/software-development-&-management"
        },
    ];

    return (
        <section className={styles.latestCoursesSection} data-aos="zoom-in">
            <div className={styles.container}>
                <h2 className={styles.title}>Latest Courses</h2>

                <div className={styles.coursesGrid}>
                    {courses.map((course) => (
                        <Link href={course?.btnLink} key={course.id} >
                            <div className={styles.courseCard}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className={styles.courseImage}
                                    />
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.courseTitle}>{course.title}</h3>
                                    <p className={styles.courseDescription}>{course.description}</p>

                                    <div className={styles.cardFooter}>
                                        <div className={styles.levelInfo}>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className={styles.levelIcon}
                                            >
                                                <rect x="2" y="12" width="3" height="6" fill="#4b5563" />
                                                <rect x="8.5" y="8" width="3" height="10" fill="#4b5563" />
                                                <rect x="15" y="4" width="3" height="14" fill="#4b5563" />
                                            </svg>
                                            <span className={styles.levelText}>{course.level}</span>
                                        </div>
                                        <Link href={course?.btnLink}>
                                            <button className={styles.learnMoreButton}>
                                                Learn more
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default LatestCourses;