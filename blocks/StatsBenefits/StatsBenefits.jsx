// components/StatsBenefits/StatsBenefits.tsx
import Link from 'next/link';
import styles from './StatsBenefits.module.scss';

const StatsBenefits = () => {
  const stats = [
    { value: '30+', label: 'Instructor' },
    { value: '500+', label: 'Students' },
    { value: '30+', label: 'Courses' },
    { value: '10Y', label: 'Experience' },
  ];

  const benefits = [
    {
      icon: (
        <span className="material-symbols-outlined text-white text-4xl">
          schedule
        </span>
      ),
      title: 'Your Flexible Path',
      description:
        'Learn when it works for you anytime, anywhere, at your own pace.',
    },
    {
      icon: (
        <span className="material-symbols-outlined text-white text-4xl">
          school
        </span>
      ),
      title: 'Expert Instructors',
      description:
        'Gain insights and mentorship from experienced professionals who guide your learning journey.',
    },
    {
      icon: (
        <span className="material-symbols-outlined text-white text-4xl">
          workspace_premium
        </span>
      ),
      title: 'Recognized Certificates',
      description:
        'Earn industry-recognized certificates to boost your career profile.',
    },
  ];


  return (
    <section className={styles.statsSection} data-aos="zoom-in">
      <div className={styles.container}>
        {/* Stats Section */}
        <div className={styles.statsCard}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem} data-aos="zoom-in">
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              {index < stats.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsHeader} >
          <span className={styles.badge}>Benefits</span>
          <Link href="/about" className={styles.moreButton}>
            More About Us
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <span class="material-symbols-outlined">
              arrow_circle_right
            </span>
          </Link>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                {typeof benefit.icon === 'string' ? (
                  <span className={styles.emoji}>{benefit.icon}</span>
                ) : (
                  benefit.icon
                )}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBenefits;