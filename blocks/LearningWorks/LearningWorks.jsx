// components/LearningWorks/LearningWorks.tsx
import Image from 'next/image';
import styles from './LearningWorks.module.scss';

const LearningWorks = ({ learningWorksData }) => {
    if (!learningWorksData) return null;

    const { howLearningWorks, whoThisFits, image } = learningWorksData;

    return (
        <section className={styles.learningWorksSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Column - Text Cards */}
                    <div className={styles.leftColumn}>
                        {[howLearningWorks, whoThisFits].map((section, index) => (
                            <div className={styles.card} key={index}>
                                <h2 className={styles.cardTitle}>{section.title}</h2>
                                <ul className={styles.bulletList}>
                                    {section?.points?.map((point, i) => (
                                        <li className={styles.bulletItem} key={i}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Image */}
                    <div className={styles.rightColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className={styles.image}
                                sizes="(max-width: 968px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningWorks;
