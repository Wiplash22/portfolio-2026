import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.card}>
                    <h2 style={styles.heading}>GET IN <span style={{ color: 'var(--secondary-color)' }}>TOUCH</span></h2>
                    <p style={styles.subtitle}>
                        Ready to start a project?
                    </p>

                    <div style={styles.grid}>
                        <a href="mailto:antonyjporuthukkaran33290@gmail.com" style={styles.item}>
                            <span style={styles.label}>Email</span>
                            <span style={styles.value}>antonyjporuthukkaran33290@gmail.com</span>
                        </a>
                        <div style={styles.item}>
                            <span style={styles.label}>Phone</span>
                            <span style={styles.value}>+91 799 404 5884</span>
                        </div>
                        <a href="https://linkedin.com/in/antony-jimson-poruthukkaran-0396bb198" target="_blank" rel="noopener noreferrer" style={styles.item}>
                            <span style={styles.label}>Social</span>
                            <span style={styles.value}>LinkedIn Profile &rarr;</span>
                        </a>
                    </div>

                    <div style={styles.action}>
                        <a href="mailto:antonyjporuthukkaran33290@gmail.com" className="btn">Say Hello</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        background: 'transparent',
        padding: '8rem 0',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        maxWidth: '700px',
        background: 'linear-gradient(180deg, rgba(30, 30, 30, 0.5) 0%, rgba(20, 20, 20, 0.8) 100%)',
        padding: '4rem 2rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    heading: {
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#fff',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
    },
    grid: {
        display: 'grid',
        gap: '1.5rem',
        maxWidth: '500px',
        margin: '0 auto 3rem auto',
        textAlign: 'left',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.02)',
        transition: 'background 0.3s ease',
    },
    label: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    value: {
        color: 'var(--primary-color)',
        fontWeight: '600',
    },
    action: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default Contact;
