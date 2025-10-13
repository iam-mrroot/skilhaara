'use client';
import { useRef } from 'react';
import Slider from 'react-slick';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
    const sliderRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'Aparna',
            course: 'UIUX , Batch 03',
            image: '/images/student1.jpg',
            rating: 5,
            feedback:
                '"What I appreciate most about Zentora is the focus on practical learning. The assignments and resources are not just theoretical – they actually prepare you for real work."',
        },
        {
            id: 2,
            name: 'Aparna',
            course: 'UIUX , Batch 03',
            image: '/images/student2.jpg',
            rating: 5,
            feedback:
                '"The environment was very supportive and interactive. Loved how each session was structured."',
        },
        {
            id: 3,
            name: 'Rajesh',
            course: 'Web Development , Batch 05',
            image: '/images/student3.jpg',
            rating: 5,
            feedback:
                '"The course structure is excellent and the instructors are very supportive. I learned so much in a short period of time."',
        },
        {
            id: 4,
            name: 'Priya',
            course: 'Digital Marketing , Batch 02',
            image: '/images/student4.jpg',
            rating: 5,
            feedback:
                '"Amazing platform for learning new skills. The content is up-to-date and relevant to industry needs."',
        },
        {
            id: 5,
            name: 'Vishnu',
            course: 'Data Science , Batch 01',
            image: '/images/student5.jpg',
            rating: 5,
            feedback:
                '"Instructors really know their stuff and care about your growth. Highly recommend Zentora!"',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <section className={styles.testimonialsSection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Student Feedback</span>
                    <h2 className={styles.title}>Success Stories from Learners</h2>
                </div>

                <div className={styles.carouselWrapper}>
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((t) => (
                            <div key={t.id} className={styles.testimonialCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.avatar}>
                                        <img
                                            src="https://images.pexels.com/photos/1181599/pexels-photo-1181599.jpeg"
                                            alt={t.name}
                                        />
                                    </div>

                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.rating}>
                                        {[...Array(t.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="#FFC107"
                                            >
                                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className={styles.feedback}>{t.feedback}</p>

                                    <div className={styles.studentInfo}>
                                        <p className={styles.name}>{t.name}</p>
                                        <p className={styles.course}>{t.course}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className={styles.navigation}>
                    <button
                        onClick={handlePrevious}
                        className={styles.navButton}
                        aria-label="Previous testimonial"
                    >
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg> */}
                        <span class="material-symbols-outlined">
                            arrow_back
                        </span>
                    </button>
                    <button
                        onClick={handleNext}
                        className={styles.navButton}
                        aria-label="Next testimonial"
                    >
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg> */}
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;