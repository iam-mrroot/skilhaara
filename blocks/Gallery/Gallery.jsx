// components/Gallery/Gallery.tsx
import { useState } from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('celebrities');

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
            { id: 5, image: "https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg" },
            { id: 6, image: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg" },
            { id: 7, image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg" },
            { id: 8, image: "https://images.pexels.com/photos/1181683/pexels-photo-1181683.jpeg" },
        ],
        team: [
            { id: 1, image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" },
            { id: 2, image: "https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg" },
            { id: 3, image: "https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg" },
            { id: 4, image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg" },
            { id: 5, image: "https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg" },
            { id: 6, image: "https://images.pexels.com/photos/3184286/pexels-photo-3184286.jpeg" },
            { id: 7, image: "https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg" },
            { id: 8, image: "https://images.pexels.com/photos/3184284/pexels-photo-3184284.jpeg" },
        ],
        events: [
            { id: 1, image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" },
            { id: 2, image: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg" },
            { id: 3, image: "https://images.pexels.com/photos/2774558/pexels-photo-2774558.jpeg" },
            { id: 4, image: "https://images.pexels.com/photos/2774559/pexels-photo-2774559.jpeg" },
            { id: 5, image: "https://images.pexels.com/photos/2774560/pexels-photo-2774560.jpeg" },
            { id: 6, image: "https://images.pexels.com/photos/2774561/pexels-photo-2774561.jpeg" },
            { id: 7, image: "https://images.pexels.com/photos/2774562/pexels-photo-2774562.jpeg" },
            { id: 8, image: "https://images.pexels.com/photos/2774563/pexels-photo-2774563.jpeg" },
        ],
    };

    const tabs = [
        { id: 'celebrities', label: 'CELEBRITIES' },
        { id: 'newLaunch', label: 'NEW LAUNCH' },
        { id: 'team', label: 'TEAM' },
        { id: 'events', label: 'EVENTS' },
    ];

    return (
        <section className={styles.gallerySection}>
            <div className={styles.container}>
                <div className={styles.tabsContainer}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className={styles.galleryGrid}>
                    {galleries[activeTab].map((item) => (
                        <div key={item.id} className={styles.galleryItem}>
                            <img
                                src={item.image}
                                alt={`${activeTab} ${item.id}`}
                                className={styles.galleryImage}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;