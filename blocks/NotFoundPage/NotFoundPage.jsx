import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const launchDate = new Date('2024-12-31T00:00:00').getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = launchDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    const features = [
        {
            icon: "🚀",
            title: "Innovative Platform",
            description: "Cutting-edge technology for modern learning"
        },
        {
            icon: "🎯",
            title: "Career Focused",
            description: "Skills that matter in today's job market"
        },
        {
            icon: "👥",
            title: "Expert Mentors",
            description: "Learn from industry professionals"
        },
        {
            icon: "📱",
            title: "Mobile First",
            description: "Learn anywhere, anytime"
        }
    ];

    return (
        <section className={styles.comingSoonSection}>
            <div className={styles.container}>
                {/* Background Elements */}
                <div className={styles.backgroundElements}>
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle3}></div>
                </div>

                <div className={styles.content}>
                    {/* Main Content */}
                    <div className={styles.mainContent}>
                        <div className={styles.badge}>
                            🚀 Coming Soon
                        </div>
                        
                        <h1 className={styles.title}>
                            Something Amazing
                            <span className={styles.highlight}> Is Coming</span>
                        </h1>
                        
                        <p className={styles.description}>
                            We're working hard to bring you an incredible learning experience. 
                            Get ready to transform your career with Skillhaara's innovative platform.
                        </p>

                        {/* Countdown Timer */}
                        <div className={styles.countdown}>
                            <div className={styles.countdownItem}>
                                <span className={styles.countdownNumber}>{timeLeft.days}</span>
                                <span className={styles.countdownLabel}>Days</span>
                            </div>
                            <div className={styles.countdownItem}>
                                <span className={styles.countdownNumber}>{timeLeft.hours}</span>
                                <span className={styles.countdownLabel}>Hours</span>
                            </div>
                            <div className={styles.countdownItem}>
                                <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
                                <span className={styles.countdownLabel}>Minutes</span>
                            </div>
                            <div className={styles.countdownItem}>
                                <span className={styles.countdownNumber}>{timeLeft.seconds}</span>
                                <span className={styles.countdownLabel}>Seconds</span>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    {/* <div className={styles.featureIcon}>{feature.icon}</div> */}
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.actionButtons}>
                            <Link href="https://www.skillhaara.com/" target="_blank" className={styles.primaryButton}>
                                Visit Current Website
                            </Link>
                            <Link href="/" className={styles.secondaryButton}>
                                Go to Homepage
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socialSection}>
                            <p className={styles.socialText}>Follow us for updates</p>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>Twitter</a>
                                <a href="#" className={styles.socialLink}>LinkedIn</a>
                                <a href="#" className={styles.socialLink}>Instagram</a>
                                <a href="#" className={styles.socialLink}>Facebook</a>
                            </div>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className={styles.illustration}>
                        <div className={styles.illustrationContainer}>
                            <div className={styles.floatingElement1}>📚</div>
                            <div className={styles.floatingElement2}>💻</div>
                            <div className={styles.floatingElement3}>🎓</div>
                            <div className={styles.mainIllustration}>
                                <div className={styles.rocket}>🚀</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}