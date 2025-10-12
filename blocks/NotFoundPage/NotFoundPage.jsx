import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
    const router = useRouter();

    const benefits = [
        "Customised teamwear to showcase your unique identity",
        "Priority support for smooth bulk order processing",
        "Updates on new collections, offers, and sportswear trends"
    ];

    return (
        <section className={styles.notFoundSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Content */}
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            Page not found
                        </h1>

                        <p className={styles.description}>
                            The page you’re looking for doesn’t exist or might have been moved.
                        </p>

                        <div className={styles.appPromotion}>
                            <p className={styles.promoText}>
                                While you’re here, check out what <Link href="https://www.skillhaara.com/" target="_blank" className={styles.appLink}>Skillhaara</Link> has to offer.
                                Explore a platform built to help you upskill, grow, and connect with real-world opportunities.
                            </p>

                            <ul className={styles.benefitsList}>
                                <li className={styles.benefitItem}>Learn from experienced mentors</li>
                                <li className={styles.benefitItem}>Access practical, career-focused courses</li>
                                <li className={styles.benefitItem}>Get recognised skill certifications</li>
                                <li className={styles.benefitItem}>Build your professional profile</li>
                            </ul>
                        </div>

                        <div className={styles.actionButtons}>
                            <Link href="/" className={styles.homeButton}>
                                Go to Homepage
                            </Link>
                        </div>
                    </div>


                    <div className={styles.imageContent}>
                        <div className={styles.appShowcase}>
                            <div className={styles.phoneContainer}>
                                <div className={styles.phone}>
                                    <img className={styles.phoneScreen} src="https://images.pexels.com/photos/8837787/pexels-photo-8837787.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                </div>

                                <div className={styles.phoneSecondary}>
                                    <img className={styles.phoneScreen} src="https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                </div>
                            </div>

                            {/* <div className={styles.qrSection}>
                                <div className={styles.qrCode}>
                                    <Image
                                        src="/qr-code.png" // Replace with your QR code
                                        alt="Download App QR Code"
                                        width={120}
                                        height={120}
                                        className={styles.qrImage}
                                    />
                                </div>
                                <div className={styles.qrText}>
                                    <p className={styles.scanText}>SCAN THE QR CODE</p>
                                    <p className={styles.downloadText}>DOWNLOAD THE APP</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};