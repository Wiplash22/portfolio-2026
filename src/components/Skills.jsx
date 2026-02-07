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
        <section id="skills" className="section" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-heading">TECHNICAL <span style={{ color: 'var(--primary-color)' }}>SKILLS</span></h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card"
                            style={{ '--skill-color': skill.color }}
                        >
                            <div className="icon-wrapper">
                                <span className="icon">{skill.icon}</span>
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="bar-container">
                                <div
                                    className="bar"
                                    style={{ width: skill.level === 'Advanced' ? '90%' : '65%' }}
                                ></div>
                            </div>
                            <p className="skill-level">{skill.level}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
