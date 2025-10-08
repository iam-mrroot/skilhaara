// components/Footer/Footer.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterLeft}>
                            <h2 className={styles.newsletterTitle}>Subscribe to our newsletter</h2>
                        </div>
                        <div className={styles.newsletterRight}>
                            <p className={styles.newsletterDescription}>
                                Subscribe to get the latest courses, learning tips, and updates delivered to your inbox.
                            </p>
                            <form onSubmit={handleSubmit} className={styles.subscribeForm}>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.emailInput}
                                    required
                                />
                                <button type="submit" className={styles.submitButton}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className={styles.footerMain}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        {/* Brand Column */}
                        <div className={styles.brandColumn}>
                            <Link href="/" className={styles.logo}>
                                <Image
                                    src="/logo.png"
                                    alt="Skill Haara"
                                    width={180}
                                    height={60}
                                />
                            </Link>
                            <p className={styles.tagline}>
                                Your journey to smarter learning starts here
                            </p>
                            <div className={styles.socialMedia}>
                                <p className={styles.socialTitle}>Social Media</p>
                                <div className={styles.socialIcons}>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#f3f4f6" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#f3f4f6" strokeWidth="2" />
                                        </svg>
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Main Page Column */}
                        <div className={styles.linkColumn}>
                            <h3 className={styles.columnTitle}>MAIN PAGE</h3>
                            <ul className={styles.linkList}>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/features">Features</Link></li>
                                <li><Link href="/works">Works</Link></li>
                                <li><Link href="/career">Career</Link></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className={styles.linkColumn}>
                            <h3 className={styles.columnTitle}>RESOURCES</h3>
                            <ul className={styles.linkList}>
                                <li><Link href="/ebooks">Free eBooks</Link></li>
                                <li><Link href="/tutorial">Development Tutorial</Link></li>
                                <li><Link href="/blog">How to - Blog</Link></li>
                                <li><Link href="/events">Events</Link></li>
                            </ul>
                        </div>

                        {/* Inner Page Column */}
                        <div className={styles.linkColumn}>
                            <h3 className={styles.columnTitle}>INNER PAGE</h3>
                            <ul className={styles.linkList}>
                                <li><Link href="/terms">Terms & Conditions</Link></li>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <div className={styles.container}>
                    <p className={styles.copyrightText}>
                        © Copyright 2025, All Rights Reserved by SkillHaara - Powered by URBANZI SOLUTIONS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;