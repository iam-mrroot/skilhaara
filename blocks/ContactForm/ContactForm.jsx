import { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        center: '',
        course: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email address';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.center.trim()) newErrors.center = 'Center is required';
        if (!formData.course.trim()) newErrors.course = 'Course is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Form submitted:', formData);

        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);

        setFormData({
            name: '',
            phone: '',
            email: '',
            location: '',
            center: '',
            course: '',
            message: '',
        });
        setErrors({});
    };

    return (
        <section className={styles.contactSection} data-aos="zoom-in">
            <div className={styles.container}>
                <h2 className={styles.title}>Have Any Questions! Send a Message</h2>
                <div className={styles.decorativeDots}></div>

                <div className={styles.formWrapper}>
                    <div className={styles.formContent}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {errors.name && <p className={styles.error}>{errors.name}</p>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                            </div>

                            <div className={styles.inlineGroup}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="location" className={styles.label}>Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                    {errors.location && <p className={styles.error}>{errors.location}</p>}
                                </div>
                            </div>

                            <div className={styles.inlineGroup}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="center" className={styles.label}>Center</label>
                                    <input
                                        type="text"
                                        id="center"
                                        name="center"
                                        value={formData.center}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                    {errors.center && <p className={styles.error}>{errors.center}</p>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="course" className={styles.label}>Course</label>
                                    <input
                                        type="text"
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                    {errors.course && <p className={styles.error}>{errors.course}</p>}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Message <span style={{ color: '#9ca3af' }}>(optional)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    rows={5}
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

                        {showToast && (
                            <div className={styles.toast}>
                                Lead form submitted successfully!
                            </div>
                        )}

                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/images/gallery.jpg"
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
