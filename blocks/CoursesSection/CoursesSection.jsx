// components/CoursesSection/CoursesSection.tsx
import Link from 'next/link';
import styles from './CoursesSection.module.scss';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 7,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
    },
    {
      id: 8,
      title: 'Digital Marketing',
      description: 'Facebook/ Instagram ad setup highly valuable for business & freelance',
      coursesCount: 4,
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
            <span class="material-symbols-outlined">
              arrow_circle_right
            </span>
          </Link>
        </div>

        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <Link href={'/courses'} key={course.id} >
              <div className={styles.courseCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.59 13.51L15.42 17.49"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.41 6.51L8.59 10.49"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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