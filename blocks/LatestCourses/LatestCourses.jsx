import Link from 'next/link';
import styles from './LatestCourses.module.scss';

const LatestCourses = () => {
    const courses = [
        {
            id: 1,
            icon: 'computer',
            image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
            title: 'Information Technology & Networking',
            description:
                'Build your IT foundation from the ground up. Master networking, CCNA concepts, Linux, cloud, and cybersecurity with guided labs that simulate real-world troubleshooting. Ideal for students aiming for an IT or network engineering career.',
            level: 'All Levels',
            btnLink: '/courses/information-technology-&-networking',
        },
        {
            id: 2,
            icon: 'public',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
            title: 'Digital Marketing',
            description:
                'Learn how to promote any brand online with SEO, Google Ads, social media, and content marketing. Work on live campaigns that teach you how to attract, engage, and convert real customers  perfect for freelancers and marketing beginners.',
            level: 'All Levels',
            btnLink: '/courses/digital-marketing',
        },
        {
            id: 3,
            icon: 'checkroom',
            image: 'https://images.pexels.com/photos/6311575/pexels-photo-6311575.jpeg',
            title: 'Fashion Designing',
            description:
                'Turn your creativity into a career. Learn illustration, garment construction, Aari embroidery, CAD pattern making, and boutique management  all through guided studio sessions that bring your designs to life.',
            level: 'All Levels',
            btnLink: '/courses/fashion-designing',
        },
        {
            id: 4,
            icon: 'home',
            image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
            title: 'Interior Designing & Architecture',
            description:
                'Discover how to plan, draft, and visualize spaces with AutoCAD, 3ds Max, Revit, and lighting techniques. You’ll work on live interior projects that build confidence to design real homes and commercial spaces.',
            level: 'All Levels',
            btnLink: '/courses/interior-designing-&-architecture',
        },
        {
            id: 5,
            icon: 'palette',
            image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg',
            title: 'Graphic Designing & Animation',
            description:
                'Master Photoshop, Illustrator, CorelDRAW, and motion tools like After Effects and Blender. Learn to design visuals, edit videos, and animate stories  everything you need to start a creative design or animation career.',
            level: 'All Levels',
            btnLink: '/courses/graphic-designing-&-animation',
        },
        {
            id: 6,
            icon: 'smart_toy',
            image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
            title: 'AI, ML, ChatGPT & Data Science',
            description:
                'Understand how data drives decisions. Learn Python, Power BI, machine learning models, and generative AI tools to analyze data and automate insights  skills valued across tech and business industries.',
            level: 'All Levels',
            btnLink: '/courses/ai-ml-chatgpt-&-data-science',
        },
        {
            id: 7,
            icon: 'code',
            image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
            title: 'Software Development & Management',
            description:
                'Build full-stack applications from scratch  HTML, CSS, JavaScript, React, Python, databases, and DevOps. Gain project management and agile skills to deliver software that’s efficient, scalable, and ready for real clients.',
            level: 'All Levels',
            btnLink: '/courses/software-development-&-management',
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

                                        <button className={styles.learnMoreButton}>
                                            Learn more
                                        </button>
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