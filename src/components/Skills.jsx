import React from 'react';

const skillsData = [
    { name: 'Python', level: 'Advanced', color: '#3776AB', icon: '🐍' },
    { name: 'Django', level: 'Advanced', color: '#44B78B', icon: '⛓️' },
    { name: 'Backend', level: 'Advanced', color: '#0aff00', icon: '⚙️' },
    { name: 'SQL', level: 'Advanced', color: '#4479A1', icon: '🗄️' },
    { name: 'Machine Learning', level: 'Intermediate', color: '#FF6F00', icon: '🤖' },
    { name: 'NLP', level: 'Intermediate', color: '#009688', icon: '🧠' },
    { name: 'Git', level: 'Intermediate', color: '#F05032', icon: '🐙' },
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-heading">TECHNICAL <span style={{ color: 'var(--primary-color)' }}>SKILLS</span></h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} style={styles.card} className="skill-card">
                            <div style={styles.iconWrapper(skill.color)} className="icon-wrapper">
                                <span style={styles.icon}>{skill.icon}</span>
                            </div>
                            <h3 style={styles.name}>{skill.name}</h3>
                            <div style={styles.barContainer}>
                                <div style={styles.bar(skill.level === 'Advanced' ? '90%' : '65%', skill.color)}></div>
                            </div>
                            <p style={styles.level}>{skill.level}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const styles = {
    section: {
        background: 'transparent',
    },
    heading: {
        // Moved to index.css .section-heading
    },
    grid: {
        // Moved to index.css .skills-grid
    },
    card: {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
    },
    iconWrapper: (color) => ({
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}22, ${color}44)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        boxShadow: `0 0 15px ${color}33`,
        border: `1px solid ${color}44`
    }),
    icon: {
        fontSize: '1.8rem',
    },
    name: {
        color: '#fff',
        fontSize: '1.2rem',
        marginBottom: '1rem',
        fontWeight: '600',
    },
    barContainer: {
        width: '100%',
        height: '6px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        marginBottom: '0.5rem',
        overflow: 'hidden',
    },
    bar: (width, color) => ({
        width: width,
        height: '100%',
        background: color,
        borderRadius: '6px',
        boxShadow: `0 0 10px ${color}`,
    }),
    level: {
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        alignSelf: 'flex-end',
    }

};

export default Skills;
