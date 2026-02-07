import React from 'react';
import profileImg from '../assets/media/profile.jpg';
import cvFile from '../assets/media/resume.pdf';

const Hero = () => {
    return (
        <section id="home" style={styles.heroSection}>
            <div className="container" style={styles.container}>
                <div style={styles.imageWrapper}>
                    <img src={profileImg} alt="Antony Jimson Poruthukkaran" style={styles.profileImage} />
                    <div style={styles.imageGlow}></div>
                </div>
                <div style={styles.content}>
                    <h1 style={styles.title}>
                        HELLO, I'M <span style={styles.highlight}>ANTONY</span>
                    </h1>
                    <h2 style={styles.subtitle}>
                        Python & Django Developer
                    </h2>
                    <p style={styles.description}>
                        Specializing in <span style={styles.techText}>Python (Django)</span> and <span style={styles.techText}>Backend Development</span>.
                        Building robust, scalable software solutions with AI & Cloud technologies.
                    </p>
                    <div style={styles.ctaGroup}>
                        <a href="#projects" className="btn">View Projects</a>
                        <a href={cvFile} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            View CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    heroSection: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at top right, rgba(0, 243, 255, 0.1), transparent 40%), radial-gradient(circle at bottom left, rgba(188, 19, 254, 0.1), transparent 40%)',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap-reverse', // Image on top on mobile, right on desktop
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    },
    content: {
        flex: '1 1 300px', // Allow shrinking
        maxWidth: '600px',
        textAlign: 'center', // Center text on mobile by default, override in media query if needed but center looks good generally
    },
    title: {
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: '800',
        marginBottom: '0.5rem',
        color: '#fff',
        lineHeight: '1.1',
        textShadow: '0 0 20px rgba(0,0,0,0.5)',
    },
    highlight: {
        background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
    },
    subtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        color: 'var(--text-primary)',
        marginBottom: '2rem',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: '1.125rem',
        color: 'var(--text-secondary)',
        marginBottom: '2.5rem',
        lineHeight: '1.8',
    },
    techText: {
        color: 'var(--primary-color)',
        fontWeight: '600',
    },
    ctaGroup: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
    imageWrapper: {
        flex: '0 1 350px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        maxWidth: '350px',
        aspectRatio: '1/1',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '4px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 0 50px rgba(0, 243, 255, 0.2)',
    },
    imageGlow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'conic-gradient(var(--primary-color), var(--secondary-color), var(--accent-color), var(--primary-color))',
        filter: 'blur(30px)',
        opacity: 0.5,
        zIndex: 1,
        animation: 'spin 10s linear infinite',
    },
};

export default Hero;
