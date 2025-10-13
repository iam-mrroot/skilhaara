import styles from './TeachingTeam.module.scss';

const TeachingTeam = () => {
    const teamMembers = [
        {
            id: 1,
            image: '',
            name: 'John Doe',
            role: 'Lead Instructor, Digital Marketing',
        },
        {
            id: 2,
            image: '',
            name: 'Jane Smith',
            role: 'Lead Instructor, Digital Marketing',
        },
        {
            id: 3,
            image: '',
            name: 'Mike Johnson',
            role: 'Lead Instructor, Digital Marketing',
        },
    ];

    return (
        <section className={styles.teachingTeamSection} data-aos="zoom-in">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Our Team</span>
                    <h2 className={styles.title}>Our teaching team</h2>
                </div>

                <div className={styles.teamGrid}>
                    {teamMembers.map((member) => (
                        <div key={member.id} className={styles.teamCard}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={"https://images.pexels.com/photos/15023413/pexels-photo-15023413/free-photo-of-businessman-in-striped-shirt-and-suit-jacket.jpeg?auto=compress&cs=tinysrgb&w=400"}
                                    alt={member.name}
                                    className={styles.memberImage}
                                />
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.memberInfo}>
                                    <p className={styles.memberRole}>{member.role}</p>
                                </div>
                                <button className={styles.arrowButton} aria-label="View profile">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default TeachingTeam;