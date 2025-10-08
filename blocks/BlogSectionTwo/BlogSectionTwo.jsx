// components/BlogSectionTwo/BlogSectionTwo.tsx
import { useState } from 'react';
import styles from './BlogSectionTwo.module.scss';

const BlogSectionTwo = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const categories = ['ALL', 'Cyber Security', 'UI\UX', 'Marketing', 'Development'];

    const blogPosts = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            category: 'Tools',
            title: 'Why One-Click Deployment Is a Game Changer for AI-Powered Apps',
            author: {
                name: 'NEETHU',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            },
            date: 'June 30, 2025',
            readTime: '5 min read',
            categoryTag: 'Development'
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            category: 'Tools',
            title: 'Why One-Click Deployment Is a Game Changer for AI-Powered Apps',
            author: {
                name: 'NEETHU',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            },
            date: 'June 30, 2025',
            readTime: '5 min read',
            categoryTag: 'Development'
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            category: 'Tools',
            title: 'Why One-Click Deployment Is a Game Changer for AI-Powered Apps',
            author: {
                name: 'NEETHU',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            },
            date: 'June 30, 2025',
            readTime: '5 min read',
            categoryTag: 'Development'
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
            category: 'Security',
            title: 'Essential Cybersecurity Practices for Modern Businesses',
            author: {
                name: 'NEETHU',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            },
            date: 'June 28, 2025',
            readTime: '7 min read',
            categoryTag: 'Cyber Security'
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
            category: 'Design',
            title: 'The Future of User Experience Design in 2025',
            author: {
                name: 'NEETHU',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            },
            date: 'June 25, 2025',
            readTime: '6 min read',
            categoryTag: 'UI\UX'
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
            category: 'Business',
            title: 'Digital Marketing Strategies That Actually Work',
            author: {
                name: 'NEETHU',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            },
            date: 'June 22, 2025',
            readTime: '8 min read',
            categoryTag: 'Marketing'
        },
    ];

    const filteredPosts = activeCategory === 'ALL'
        ? blogPosts
        : blogPosts.filter(post => post.categoryTag === activeCategory);

    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Blog</span>
                    <h2 className={styles.title}>
                        Empower Your Journey with Expert Career Insights
                    </h2>
                </div>

                <div className={styles.categoriesBar}>
                    <span className={styles.categoriesLabel}>Categories</span>
                    <div className={styles.categoriesButtons}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.blogGrid}>
                    {filteredPosts.map((post) => (
                        <article key={post.id} className={styles.blogCard}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className={styles.blogImage}
                                    loading="lazy"
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <span className={styles.categoryTag}>{post.category}</span>
                                <h3 className={styles.blogTitle}>{post.title}</h3>

                                <div className={styles.authorInfo}>
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className={styles.authorAvatar}
                                    />
                                    <div className={styles.authorDetails}>
                                        <span className={styles.authorName}>{post.author.name}</span>
                                        <div className={styles.postMeta}>
                                            <span>{post.date}</span>
                                            <span className={styles.dot}>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSectionTwo;