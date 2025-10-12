import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Footer.module.scss';
import { Facebook, Twitter, Instagram, GitHub } from "@mui/icons-material";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <div className={styles.footer}>
            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterLeft}>
                            <h2 className={styles.newsletterTitle}>Subscribe to our newsletter</h2>
                        </div>
                        <div className={styles.newsletterRight}>
                            <p className={styles.newsletterDescription}>
                                Subscribe to get the latest courses, learning tips, and  updates delivered to your inbox.
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
                                    src="/assets/images/logo.png"
                                    alt="Skill Haara"
                                    width={300}
                                    height={100}
                                />
                            </Link>
                            <p className={styles.tagline}>
                                Your journey to smarter learning starts here
                            </p>
                            <div className={styles.socialMedia}>
                                <p className={styles.socialTitle}>Social Media</p>
                                <div className={styles.socialIcons}>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                    >
                                        <Twitter fontSize="medium" />
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                    >
                                        <Facebook fontSize="medium" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                    >
                                        <Instagram fontSize="medium" />
                                    </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                    >
                                        <GitHub fontSize="medium" />
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
        </div>
    );
};

export default Footer;