import styles from './VideoGallery.module.scss';




const VideoGallery = () => {

    const defaultVideos = [
        {
            id: 1,
            title: 'Intro to AI & Data Science',
            url: 'https://www.youtube.com/embed/1YyAzVmP7Ew',
        },
        {
            id: 2,
            title: 'How to build a dashboard with Power BI',
            url: 'https://www.youtube.com/embed/2lAe1cqCOXo',
        },
        {
            id: 3,
            title: 'ChatGPT + ML in Action',
            url: 'https://www.youtube.com/embed/VlZdeJFn9xI',
        },
             {
            id: 1,
            title: 'Intro to AI & Data Science',
            url: 'https://www.youtube.com/embed/1YyAzVmP7Ew',
        },
        {
            id: 2,
            title: 'How to build a dashboard with Power BI',
            url: 'https://www.youtube.com/embed/2lAe1cqCOXo',
        },
        {
            id: 3,
            title: 'ChatGPT + ML in Action',
            url: 'https://www.youtube.com/embed/VlZdeJFn9xI',
        },
             {
            id: 1,
            title: 'Intro to AI & Data Science',
            url: 'https://www.youtube.com/embed/1YyAzVmP7Ew',
        },
        {
            id: 2,
            title: 'How to build a dashboard with Power BI',
            url: 'https://www.youtube.com/embed/2lAe1cqCOXo',
        },
        {
            id: 3,
            title: 'ChatGPT + ML in Action',
            url: 'https://www.youtube.com/embed/VlZdeJFn9xI',
        },
    ];

    return (
        <section className={styles.videoGallery}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Video Gallery</h2>
                    <p className={styles.subtitle}>See our training sessions, demos, and learner journeys</p>
                </div>

                <div className={styles.grid}>
                    {defaultVideos.map((video) => (
                        <div key={video.id} className={styles.videoCard}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <p className={styles.videoTitle}>{video.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
