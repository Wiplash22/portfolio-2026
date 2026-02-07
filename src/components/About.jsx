import React from 'react';
/* Reusing profile image if we want, or a different graphic. For now, text focused layout. */

const About = () => {
    return (
        <section id="about" className="section" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.card}>
                    <h2 className="section-heading" style={{ marginBottom: '1rem' }}>ABOUT <span style={{ color: 'var(--secondary-color)' }}>ME</span></h2>
                    <div style={styles.divider}></div>
                    <p style={styles.paragraph}>
                        I recently graduated with a <strong>Bachelor of Science in Computer Systems Engineering</strong> from Riga Technical University and ISMA University.
                        My academic journey has equipped me with a solid foundation in software development, algorithms, and computer systems.
                    </p>
                    <p style={styles.paragraph}>
                        Professionally, I have experience as a <strong>Junior Consultant at Dyninno</strong>, where I developed strong problem-resolution skills.
                        I am passionate about <span style={{ color: 'var(--accent-color)' }}>Machine Learning</span>, <span style={{ color: 'var(--accent-color)' }}>NLP</span>, and building innovative solutions.
                    </p>

                    <div style={styles.divider}></div>

                    <h3 style={{ ...styles.heading, fontSize: '2rem' }}>PUBLICATIONS</h3>
                    <div style={styles.publication}>
                        <h4 style={styles.pubTitle}>
                            <a href="http://www.baltijapublishing.lv/omp/index.php/bp/catalog/download/642/17032/36275-1?inline=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>
                                Decoding Sentiments Online: Transformer-Based Analysis of X Content
                            </a>
                        </h4>
                        <p style={styles.pubText}>
                            <strong>Antony Jimson Poruthukkaran</strong>, Amit Joshi <br />
                            <em>24th International Scientific Conference, Riga, Latvia (2025)</em>
                        </p>
                        <a href="http://www.baltijapublishing.lv/omp/index.php/bp/catalog/download/642/17032/36275-1?inline=1" target="_blank" rel="noopener noreferrer" style={styles.pubLink}>
                            View Paper &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        background: 'transparent',
        position: 'relative',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '4rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 0 50px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
    },
    heading: {
        // Moved to index.css .section-heading
    },
    divider: {
        width: '60px',
        height: '4px',
        background: 'var(--primary-color)',
        margin: '0 auto 3rem auto',
        boxShadow: 'var(--glow-primary)',
    },
    paragraph: {
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
        textAlign: 'center',
    },
    publication: {
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'rgba(0, 243, 255, 0.05)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(0, 243, 255, 0.1)',
        textAlign: 'left',
    },
    pubTitle: {
        fontSize: '1.2rem',
        color: '#fff',
        marginBottom: '0.5rem',
    },
    pubText: {
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
        fontSize: '1rem',
    },
    pubLink: {
        color: 'var(--primary-color)',
        fontWeight: '600',
        fontSize: '0.9rem',
    },
};

export default About;
