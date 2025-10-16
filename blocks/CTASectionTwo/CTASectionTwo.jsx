// components/CTASection/CTASection.tsx
import Link from 'next/link';
import styles from './CTASectionTwo.module.scss';

const CTASectionTwo = ({ ctaSection }) => {
  return (
    <section className={styles.ctaSection} data-aos="zoom-in">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {ctaSection.title}
          </h2>

          <p className={styles.description}>
            {ctaSection.desc}
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/contact" className={styles.primaryButton}>
              Join Now
              {/* <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path 
                  d="M10 8L14 12L10 16" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg> */}
              <span className={`${styles.icon} material-symbols-outlined`}>
                arrow_circle_right
              </span>
            </Link>

            <Link href="/courses" className={styles.secondaryButton}>
              Explore our courses
              {/* <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M10 8L14 12L10 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              <span className={`${styles.icon} material-symbols-outlined`}>
                arrow_circle_right
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionTwo;