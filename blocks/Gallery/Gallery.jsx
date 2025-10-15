import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.scss';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const galleries = {
        celebrities: [
            { id: 1, image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" },
            { id: 2, image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" },
            { id: 3, image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg" },
            { id: 4, image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg" },
            { id: 5, image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg" },
            { id: 6, image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg" },
            { id: 7, image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg" },
            { id: 8, image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg" },
        ],
        newLaunch: [
            { id: 1, image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" },
            { id: 2, image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg" },
            { id: 3, image: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg" },
            { id: 4, image: "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg" },
        ],
        team: [
            { id: 1, image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" },
            { id: 2, image: "https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg" },
            { id: 3, image: "https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg" },
            { id: 4, image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg" },
        ],
        events: [
            { id: 1, image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" },
            { id: 2, image: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg" },
            { id: 3, image: "https://images.pexels.com/photos/2774558/pexels-photo-2774558.jpeg" },
            { id: 4, image: "https://images.pexels.com/photos/2774559/pexels-photo-2774559.jpeg" },
        ],
    };

    const tabs = [
        { id: 'all', label: 'ALL' },
        { id: 'celebrities', label: 'Celebrities' },
        { id: 'newLaunch', label: 'New Launch' },
        { id: 'team', label: 'Team' },
        { id: 'events', label: 'Events' },
    ];

    const combinedImages = activeTab === 'all'
        ? Object.values(galleries).flat()
        : galleries[activeTab];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === combinedImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? combinedImages.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImageIndex, combinedImages.length]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (Math.abs(distance) < minSwipeDistance) return;

        if (distance > 0) {
            nextImage();
        } else {
            prevImage();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className={styles.gallerySection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.mainDivBar}>
                    <div className={styles.categoriesBar}>
                        <span className={styles.categoriesLabel}>Gallery</span>
                        <div className={styles.categoriesButtons}>
                            {tabs.map((category) => (
                                <button
                                    key={category.id}
                                    className={`${styles.categoryButton} ${activeTab === category.id ? styles.active : ''}`}
                                    onClick={() => setActiveTab(category.id)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.galleryGrid}>
                    {combinedImages.map((item, index) => (
                        <div
                            key={`${activeTab}-${index}`}
                            className={styles.galleryItem}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={item.image}
                                alt={`${activeTab} ${item.id}`}
                                className={styles.galleryImage}
                                width={300}
                                height={200}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {lightboxOpen && (
                <div
                    className={styles.lightboxOverlay}
                    onClick={closeLightbox}
                >
                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.lightboxClose}
                            onClick={closeLightbox}
                            aria-label="Close lightbox"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            className={styles.lightboxArrowPrev}
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15 18l-6-6 6-6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            className={styles.lightboxArrowNext}
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 18l6-6-6-6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div
                            className={styles.lightboxImageContainer}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Image
                                src={combinedImages[currentImageIndex].image}
                                alt={`${activeTab} ${combinedImages[currentImageIndex].id}`}
                                className={styles.lightboxImage}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority
                            />
                        </div>

                        <div className={styles.lightboxCounter}>
                            {currentImageIndex + 1} / {combinedImages.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;