// components/ContactForm/ContactForm.tsx
import { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Message sent successfully!');
        // Reset form
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section className={styles.contactSection}>

            <div className={styles.container}>
                <h2 className={styles.title}>
                    Have Any Questions! Send a <br /> Message
                </h2>
                 <div className={styles.decorativeDots}></div>

                <div className={styles.formWrapper}>
                    <div className={styles.formContent}>
                       



                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    rows={5}
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Send Message
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={styles.arrowIcon}
                                >
                                    <path
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg"
                            alt="Customer support representative"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;