// components/Header/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Skill Haara"
                        width={180}
                        height={60}
                        priority
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        About
                    </Link>
                    <Link href="/courses" className={styles.navLink}>
                        Courses
                    </Link>
                    <Link href="/gallery" className={styles.navLink}>
                        Gallery
                    </Link>
                    <Link href="/brouchers" className={styles.navLink}>
                        Brouchers
                    </Link>
                    <Link href="/certificate" className={styles.navLink}>
                        Certificate
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                    <Link href="/blog" className={styles.navLink}>
                        Blog
                    </Link>
                </nav>

                <div className={styles.authButtons}>
                    <Link href="/signup" className={styles.signupBtn}>
                        SignUp
                    </Link>
                    <Link href="/login" className={styles.loginBtn}>
                        LogIn
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;