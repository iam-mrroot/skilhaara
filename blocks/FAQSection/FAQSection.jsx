// components/FAQSection/FAQSection.tsx
import { useState } from 'react';
import styles from './FAQSection.module.scss';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'Short heading goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            question: 'Short heading goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            question: 'Short heading goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            question: 'Short heading goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.contentGrid}>
                    <div className={styles.faqColumn}>
                        <span className={styles.badge}>FAQ</span>
                        <h2 className={styles.title}>Get the answers you need</h2>
                        <p className={styles.description}>
                            Explore these FAQs to start your learning journey with confidence.
                        </p>

                        <div className={styles.faqList}>
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                                >
                                    <button
                                        className={styles.faqButton}
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <div className={styles.iconWrapper}>
                                            {/* <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className={styles.icon}
                                            >
                                                <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                                            </svg> */}
                                            <div className={styles.iconDiv}></div>

                                        </div>
                                        <span className={styles.faqQuestion}>{faq.question}</span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            className={styles.chevron}
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    {openIndex === index && (
                                        <div className={styles.faqAnswer}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.imageColumn}>
                        <img
                            src={"/assets/images/faqsection.jpg"}
                            alt="Workspace with learning materials"
                            className={styles.faqImage}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQSection;