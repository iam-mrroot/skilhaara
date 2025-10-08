// components/Testimonials/Testimonials.tsx
'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'Aparna',
            course: 'UIUX , Batch 03',
            image: '/images/student1.jpg',
            rating: 5,
            feedback: '"What I appreciate most about Zentora is the focus on practical learning. The assignments and resources are not just theoretical – they actually prepare you for real work."',
        },
        {
            id: 2,
            name: 'Aparna',
            course: 'UIUX , Batch 03',
            image: '/images/student2.jpg',
            rating: 5,
            feedback: '"What I appreciate most about Zentora is the focus on practical learning. The assignments and resources are not just theoretical – they actually prepare you for real work."',
        },
        {
            id: 3,
            name: 'Aparna',
            course: 'UIUX , Batch 03',
            image: '/images/student3.jpg',
            rating: 5,
            feedback: '"What I appreciate most about Zentora is the focus on practical learning. The assignments and resources are not just theoretical – they actually prepare you for real work."',
        },
        {
            id: 4,
            name: 'Rajesh',
            course: 'Web Development , Batch 05',
            image: '/images/student4.jpg',
            rating: 5,
            feedback: '"The course structure is excellent and the instructors are very supportive. I learned so much in a short period of time."',
        },
        {
            id: 5,
            name: 'Priya',
            course: 'Digital Marketing , Batch 02',
            image: '/images/student5.jpg',
            rating: 5,
            feedback: '"Amazing platform for learning new skills. The content is up-to-date and relevant to industry needs."',
        },
    ];

    const handlePrevious = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.querySelector(`.${styles.testimonialCard}`)?.clientWidth || 0;
            const gap = 24; // Gap between cards
            const scrollAmount = cardWidth + gap;

            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });

            setCurrentIndex((prev) => Math.max(0, prev - 1));
        }
    };

    const handleNext = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.querySelector(`.${styles.testimonialCard}`)?.clientWidth || 0;
            const gap = 24;
            const scrollAmount = cardWidth + gap;

            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });

            setCurrentIndex((prev) => Math.min(testimonials.length - 3, prev + 1));
        }
    };

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Student Feedback</span>
                    <h2 className={styles.title}>Success Stories from Learners</h2>
                </div>

                <div className={styles.carouselWrapper}>
                    <div ref={scrollContainerRef} className={styles.testimonialsList}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className={styles.testimonialCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.avatar}>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <div className={styles.rating}>
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <svg key={index} width="24" height="24" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <p className={styles.feedback}>{testimonial.feedback}</p>

                                <div className={styles.studentInfo}>
                                    <p className={styles.name}>{testimonial.name}</p>
                                    <p className={styles.course}>{testimonial.course}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.navigation}>
                    <button
                        onClick={handlePrevious}
                        className={styles.navButton}
                        disabled={currentIndex === 0}
                        aria-label="Previous testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className={styles.navButton}
                        disabled={currentIndex >= testimonials.length - 3}
                        aria-label="Next testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;