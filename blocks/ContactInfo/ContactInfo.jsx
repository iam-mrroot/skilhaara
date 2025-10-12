// components/ContactInfo/ContactInfo.tsx
import Link from 'next/link';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
    const contactDetails = [
        {
            id: 1,
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10.8 5.6C10.4 5.6 10 5.8 9.8 6.2L7.4 10.4C7 11 7.2 11.8 7.8 12.2C9.4 13.4 10.8 14.8 12 16.4C13.2 18 14.2 19.8 15 21.6C15.2 22.2 15.8 22.6 16.4 22.6C16.6 22.6 16.8 22.6 17 22.4L21 20C21.6 19.6 21.8 18.8 21.4 18.2L19 14.8C18.6 14.2 17.8 14 17.2 14.4L15.6 15.4C14.8 13.6 13.6 12 12 10.8L13 9.2C13.4 8.6 13.2 7.8 12.6 7.4L9.2 5C9 5.8 8.8 5.6 8.6 5.6H10.8Z" fill="white" />
                    <path d="M24 8C24 7.2 24.4 6.6 25 6.2C25.6 5.8 26.4 5.8 27 6.2L28.8 7.4C29.4 7.8 29.6 8.6 29.2 9.2C28.8 9.8 28 10 27.4 9.6L26 8.8L25.4 10.2C25 10.8 24.2 11 23.6 10.6C23 10.2 22.8 9.4 23.2 8.8L24 8Z" fill="white" />
                    <path d="M23 13C23 12.2 23.4 11.6 24 11.2C24.6 10.8 25.4 10.8 26 11.2C26.6 11.6 27 12.2 27 13C27 13.8 26.6 14.4 26 14.8C25.4 15.2 24.6 15.2 24 14.8C23.4 14.4 23 13.8 23 13Z" fill="white" />
                </svg>
            ),
            label: 'Phone',
            value: '+8801798155521',
            link: 'tel:+8801798155521'
        },
        {
            id: 2,
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 8C4 6.9 4.9 6 6 6H26C27.1 6 28 6.9 28 8V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V8Z" fill="white" />
                    <path d="M6 8L16 16L26 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: 'Email',
            value: 'skillhaara@gmail.com',
            link: 'mailto:skillhaara@gmail.com'
        },
        {
            id: 3,
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C11.6 4 8 7.6 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.6 20.4 4 16 4ZM16 15C14.3 15 13 13.7 13 12C13 10.3 14.3 9 16 9C17.7 9 19 10.3 19 12C19 13.7 17.7 15 16 15Z" fill="white" />
                </svg>
            ),
            label: 'Location',
            value: 'Trivandrum',
            link: 'https://maps.google.com/?q=Trivandrum'
        }
    ];

    return (
        <section className={styles.contactInfoSection}>
            <div className={styles.container}>
                {contactDetails.map((detail) => (
                    <Link
                        key={detail.id}
                        href={detail.link}
                        className={styles.contactCard}
                        target={detail.id === 3 ? '_blank' : undefined}
                        rel={detail.id === 3 ? 'noopener noreferrer' : undefined}
                    >
                        <div className={styles.iconWrapper}>
                            {detail.icon}
                        </div>
                        <div className={styles.textContent}>
                            <h3 className={styles.label}>{detail.label}</h3>
                            <p className={styles.value}>{detail.value}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ContactInfo;