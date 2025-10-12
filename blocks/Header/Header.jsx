"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/gallery", label: "Gallery" },
    { href: "/brouchers", label: "Brouchers" },
    { href: "/certificate", label: "Certificate" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/images/logo.png"
            alt="Skill Haara"
            width={200}
            height={200}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.authButtons}>
          <Link href="/contact" className={styles.signupBtn}>
            SignUp
          </Link>
          <Link href="/contact" className={styles.loginBtn}>
            LogIn
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FiMenu size={26} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""
          }`}
      >
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <FiX size={26} />
        </button>

        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileAuth}>
          <Link href="/contact" className={styles.signupBtn} onClick={() => setMenuOpen(false)}>
            SignUp
          </Link>
          <Link href="/contact" className={styles.loginBtn} onClick={() => setMenuOpen(false)}>
            LogIn
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
