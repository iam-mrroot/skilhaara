import Link from 'next/link';
import styles from './CoursesSection.module.scss';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Information Technology & Networking',
      description:
        'Build your IT foundation from the ground up  master networking, CCNA concepts, Linux, cloud, and cybersecurity with guided labs that simulate real-world troubleshooting. Ideal for students aiming for an IT or network engineering career.',
      coursesCount: 6,
      link: '/courses/information-technology-networking',
      icon: 'router',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description:
        'Learn how to promote any brand online with SEO, Google Ads, social media, and content marketing. Work on live campaigns that teach you how to attract, engage, and convert real customers  perfect for freelancers and marketing beginners.',
      coursesCount: 5,
      link: '/courses/digital-marketing',
      icon: 'campaign',
    },
    {
      id: 3,
      title: 'Fashion Designing',
      description:
        'Turn your creativity into a career. Learn illustration, garment construction, Aari embroidery, CAD pattern making, and boutique management  all through guided studio sessions that bring your designs to life.',
      coursesCount: 5,
      link: '/courses/fashion-designing',
      icon: 'checkroom',
    },
    {
      id: 4,
      title: 'Interior Designing & Architecture',
      description:
        'Discover how to plan, draft, and visualize spaces with AutoCAD, 3ds Max, Revit, and lighting techniques. You’ll work on live interior projects that build confidence to design real homes and commercial spaces.',
      coursesCount: 5,
      link: '/courses/interior-designing-architecture',
      icon: 'architecture',
    },
    {
      id: 5,
      title: 'Graphic Designing & Animation',
      description:
        'Master Photoshop, Illustrator, CorelDRAW, and motion tools like After Effects and Blender. Learn to design visuals, edit videos, and animate stories  everything you need to start a creative design or animation career.',
      coursesCount: 6,
      link: '/courses/graphic-designing-animation',
      icon: 'palette',
    },
    {
      id: 6,
      title: 'AI, ML, ChatGPT & Data Science',
      description:
        'Understand how data drives decisions. Learn Python, Power BI, machine learning models, and generative AI tools to analyze data and automate insights  skills valued across tech and business industries.',
      coursesCount: 6,
      link: '/courses/ai-ml-chatgpt-data-science',
      icon: 'smart_toy',
    },
    {
      id: 7,
      title: 'Software Development & Management',
      description:
        'Build full-stack applications from scratch  HTML, CSS, JavaScript, React, Python, databases, and DevOps. Gain project management and agile skills to deliver software that’s efficient, scalable, and ready for real clients.',
      coursesCount: 7,
      link: '/courses/software-development-management',
      icon: 'code',
    },
  ];

  return (
    <section className={styles.coursesSection} data-aos="zoom-in">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.badge}>Courses</span>
            <h2 className={styles.title}>Explore Courses</h2>
          </div>
          <Link href="/courses" className={styles.viewMoreButton}>
            View More
            <span className="material-symbols-outlined">arrow_circle_right</span>
          </Link>
        </div>

        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <Link href={course.link} key={course.id}>
              <div className={styles.courseCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">{course.icon}</span>
                  </div>
                  <span className={styles.coursesCount}>{course.coursesCount} courses</span>
                </div>

                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
