// components/FAQ/FAQ.tsx
import { useState } from 'react';
import styles from './FAQ.module.scss';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'Are these courses available in Trivandrum, Kochi (Aluva), and Thrissur?',
            answer: 'Yes, all our courses are available across multiple locations including Trivandrum, Kochi (Aluva), and Thrissur. We have well-equipped training centers in each city to provide you with the best learning experience.'
        },
        {
            id: 2,
            question: 'What is the duration of the courses?',
            answer: 'Course durations vary depending on the program. Most of our professional courses range from 3 to 12 months. We offer both weekday and weekend batches to accommodate different schedules. Contact us for specific course duration details.'
        },
        {
            id: 3,
            question: 'Do you provide placement assistance?',
            answer: 'Yes, we provide comprehensive placement assistance to all our students. Our dedicated placement team works with leading companies and helps with resume building, interview preparation, and connecting you with potential employers.'
        },
        {
            id: 4,
            question: 'What are the course fees and payment options?',
            answer: 'Course fees vary based on the program selected. We offer flexible payment options including installment plans to make education accessible. Please contact our admissions team for detailed fee structure and available payment plans.'
        },
        {
            id: 5,
            question: 'Do you offer online or hybrid learning options?',
            answer: 'Yes, we offer both in-person and online learning options for most courses. Our hybrid model allows you to choose the learning style that best fits your schedule and preferences, ensuring quality education from anywhere.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>
                        Frequently Asked Questions offers quick answers to common queries, guiding users through features and functionalities effortlessly.
                    </p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className={styles.questionText}>{faq.question}</span>
                                <span className={styles.iconWrapper}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={styles.icon}
                                    >
                                        <path
                                            d="M12 5V19M5 12H19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <div className={styles.faqAnswerWrapper}>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;