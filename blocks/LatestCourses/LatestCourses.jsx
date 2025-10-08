// components/LatestCourses/LatestCourses.tsx
import styles from './LatestCourses.module.scss';

const LatestCourses = () => {
    const courses = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Information Technology & Networking',
            description: 'Lay the strongest foundation in networking, cybersecurity, cloud (AWS), and Linux with hands-on labs and mentor support. Build skills that power today\'s connected world.',
            level: 'Level',
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Digital Marketing',
            description: 'Learn how to ship SEO, Google Ads, social campaigns, and content deliverables every week. Graduate with a portfolio that local brands and agencies already trust.',
            level: 'Level',
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Fashion Designing',
            description: 'Transform imagination into reality—master illustration, garment construction, Aari embroidery, CAD pattern making, and boutique management to shape your future in fashion.',
            level: 'Level',
        },
          {
            id: 1,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Information Technology & Networking',
            description: 'Lay the strongest foundation in networking, cybersecurity, cloud (AWS), and Linux with hands-on labs and mentor support. Build skills that power today\'s connected world.',
            level: 'Level',
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Digital Marketing',
            description: 'Learn how to ship SEO, Google Ads, social campaigns, and content deliverables every week. Graduate with a portfolio that local brands and agencies already trust.',
            level: 'Level',
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
            title: 'Fashion Designing',
            description: 'Transform imagination into reality—master illustration, garment construction, Aari embroidery, CAD pattern making, and boutique management to shape your future in fashion.',
            level: 'Level',
        },
    ];

    return (
        <section className={styles.latestCoursesSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Latest Courses</h2>

                <div className={styles.coursesGrid}>
                    {courses.map((course) => (
                        <div key={course.id} className={styles.courseCard}>
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
                                    <button className={styles.learnMoreButton}>
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.floatingButtons}>
                <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                    aria-label="Contact us on WhatsApp"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 2C8.268 2 2 8.268 2 16C2 18.592 2.736 21.008 4.004 23.036L2.172 29.828L9.164 28.028C11.116 29.164 13.408 29.828 15.828 29.996H16C23.732 29.996 30 23.728 30 15.996C30 12.272 28.552 8.78 25.996 6.224C23.444 3.668 19.952 2.192 16 2ZM16 4C19.464 4 22.712 5.316 25.068 7.672C27.428 10.032 28.828 13.28 28.828 16C28.828 23.072 23.072 28.828 16 28.828H15.856C13.608 28.66 11.448 27.996 9.572 26.892L9.164 26.636L4.828 27.796L5.996 23.58L5.716 23.148C4.508 21.208 3.828 18.972 3.828 16.636C3.828 9.396 9.396 3.828 16 3.828V4ZM11.6 9.176C11.368 9.176 11.016 9.272 10.72 9.624C10.424 9.976 9.572 10.772 9.572 12.392C9.572 14.012 10.748 15.576 10.916 15.808C11.084 16.04 13.212 19.388 16.496 20.772C19.244 21.936 19.78 21.72 20.352 21.664C20.924 21.608 22.272 20.856 22.544 20.076C22.816 19.296 22.816 18.628 22.732 18.488C22.648 18.348 22.416 18.264 22.064 18.096C21.712 17.928 20.096 17.132 19.772 17.02C19.448 16.908 19.216 16.852 18.984 17.204C18.752 17.556 18.152 18.292 17.948 18.524C17.744 18.756 17.54 18.784 17.188 18.616C16.836 18.448 15.672 18.068 14.3 16.852C13.232 15.9 12.508 14.724 12.304 14.372C12.1 14.02 12.284 13.824 12.452 13.656C12.604 13.504 12.804 13.252 12.972 13.048C13.14 12.844 13.196 12.696 13.308 12.464C13.42 12.232 13.364 12.028 13.28 11.86C13.196 11.692 12.484 10.072 12.188 9.368C11.908 8.692 11.62 8.78 11.416 8.768C11.212 8.756 10.98 8.756 10.748 8.756L11.6 9.176Z" fill="white" />
                    </svg>
                </a>

                <a
                    href="tel:your-number"
                    className={styles.phoneButton}
                    aria-label="Call us"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M10.8 5.6C10.4 5.6 10 5.8 9.8 6.2L7.4 10.4C7 11 7.2 11.8 7.8 12.2C9.4 13.4 10.8 14.8 12 16.4C13.2 18 14.2 19.8 15 21.6C15.2 22.2 15.8 22.6 16.4 22.6C16.6 22.6 16.8 22.6 17 22.4L21 20C21.6 19.6 21.8 18.8 21.4 18.2L19 14.8C18.6 14.2 17.8 14 17.2 14.4L15.6 15.4C14.8 13.6 13.6 12 12 10.8L13 9.2C13.4 8.6 13.2 7.8 12.6 7.4L9.2 5C9 5.8 8.8 5.6 8.6 5.6H10.8Z" fill="white" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default LatestCourses;