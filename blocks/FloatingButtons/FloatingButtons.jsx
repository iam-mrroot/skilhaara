// components/FloatingButtons/FloatingButtons.jsx
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from "./FloatingButtons.module.scss";

export default function FloatingButtons() {
  return (
    <div className={styles.floatingButtons}>
      <a
        href="https://wa.me/919539128888"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </a>

      <a
        href="tel:+919539128888"
        className={`${styles.button} ${styles.phone}`}
        aria-label="Call Us"
      >
        <PhoneIcon sx={{ fontSize: 32 }} />
      </a>
    </div>
  );
}