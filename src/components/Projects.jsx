import React from 'react';

const projectsData = [
    {
        title: 'Decoding Sentiments Online',
        description: 'Transformer-Based Analysis of X (Twitter) Content. Multilingual DistilBERT model achieving 82% accuracy. (Bachelor Thesis)',
        tags: ['Python', 'NLP', 'Transformers', 'Hugging Face'],
        link: 'https://github.com/Wiplash22/Bachelor-Thesis-ISMA-2025',
        paperLink: 'http://www.baltijapublishing.lv/omp/index.php/bp/catalog/download/642/17032/36275-1?inline=1'
    },
    {
        title: 'Python Django Project',
        description: 'A full-stack web application built with Python and Django. Features robust backend logic and scalable architecture.',
        tags: ['Python', 'Django', 'Web Development'],
        link: 'https://github.com/Wiplash22/Python_Django_project1'
    },

    {
        title: 'Streaming Platform',
        description: 'Online streaming platform for everyone. A software engineering project demonstrating full-stack capabilities.',
        tags: ['Software Engineering', 'Web Development'],
        link: 'https://github.com/Wiplash22/SoftwareEngineering'
    },
    {
        title: 'Daugavpils City Web',
        description: 'Basic sample website for Daugavpils City. Demonstrates front-end web development skills.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/Wiplash22/Mini-Project'
    },
    {
        title: 'AI Workflow Analysis',
        description: 'Practical AI assignment using Orange tool and dataset analysis. Showcases data workflow understanding.',
        tags: ['AI', 'Data Analysis', 'Orange'],
        link: 'https://github.com/Wiplash22/AI-Practical-Assignment-2'
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-heading">LATEST <span style={{ color: 'var(--accent-color)' }}>PROJECTS</span></h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} style={styles.card} className="project-card" onClick={() => window.open(project.link, '_blank')}>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.description}>{project.description}</p>
                                <div style={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <div style={styles.ctaGroup}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link} onClick={(e) => e.stopPropagation()}>
                                        View on GitHub &rarr;
                                    </a>
                                    {project.paperLink && (
                                        <a href={project.paperLink} target="_blank" rel="noopener noreferrer" style={styles.secondaryLink} onClick={(e) => e.stopPropagation()}>
                                            Read Paper &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
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
        // Moved to index.css .projects-grid
    },
    card: {
        background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        padding: '2.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--primary-color)',
    },
    description: {
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        lineHeight: '1.6',
        fontSize: '1rem',
        flex: 1,
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        marginBottom: '2rem',
    },
    tag: {
        padding: '0.4rem 1rem',
        background: 'rgba(0, 243, 255, 0.1)',
        color: 'var(--primary-color)',
        borderRadius: '20px',
        fontSize: '0.85rem',
        border: '1px solid rgba(0, 243, 255, 0.2)',
    },
    ctaGroup: {
        marginTop: 'auto',
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        display: 'inline-block',
        color: '#fff',
        fontWeight: '600',
        borderBottom: '1px solid var(--accent-color)',
        paddingBottom: '2px',
    },
    secondaryLink: {
        display: 'inline-block',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        fontWeight: '500',
        borderBottom: '1px solid var(--text-secondary)',
        paddingBottom: '2px',
        transition: 'color 0.3s ease',
    }
};

export default Projects;
