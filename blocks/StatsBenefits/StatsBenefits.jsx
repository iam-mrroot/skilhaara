// components/StatsBenefits/StatsBenefits.tsx
import Link from 'next/link';
import styles from './StatsBenefits.module.scss';

const StatsBenefits = () => {
  const stats = [
    { value: '30+', label: 'Instructor' },
    { value: '100+', label: 'Students' },
    { value: '30+', label: 'Courses' },
    { value: '7Y', label: 'Experience' },
  ];

  const benefits = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Your Flexible Path',
      description: 'Learn when it works for you anytime, anywhere, at your own pace.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Your Flexible Path',
      description: 'Learn when it works for you anytime, anywhere, at your own pace.',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Instructors',
      description: 'Learn when it works for you anytime, anywhere, at your own pace.',
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {/* Stats Section */}
        <div className={styles.statsCard}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              {index < stats.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsHeader}>
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