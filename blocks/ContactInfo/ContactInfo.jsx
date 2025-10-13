// components/ContactInfo/ContactInfo.tsx
import Link from 'next/link';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
    const contactDetails = [
        {
            id: 1,
            icon: (
                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'white' }}>
                    call
                </span>
            ),
            label: 'Phone',
            value: '+8801798155521',
            link: 'tel:+8801798155521'
        },
        {
            id: 2,
            icon: (
                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'white' }}>
                    mail
                </span>
            ),
            label: 'Email',
            value: 'skillhaara@gmail.com',
            link: 'mailto:skillhaara@gmail.com'
        },
        {
            id: 3,
            icon: (
                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'white' }}>
                    location_on
                </span>
            ),
            label: 'Location',
            value: 'Trivandrum',
            link: 'https://maps.google.com/?q=Trivandrum'
        }
    ];


    return (
        <section className={styles.contactInfoSection} data-aos="zoom-in">
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