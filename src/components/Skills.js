import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    <div className="card">
                        <h3>Programming Languages</h3>
                        <p>Java, Python, SQL, JavaScript, C, C++</p>
                    </div>
                    <div className="card">
                        <h3>Databases</h3>
                        <p>PostgreSQL, MySQL, MongoDB, Oracle</p>
                    </div>
                    <div className="card">
                        <h3>Frameworks & Tools</h3>
                        <p>Spring Boot, ReactJS, Angular, Node.js, Flask, CSS, HTML5, Bootstrap, Kafka, OAuth2, JWT</p>
                    </div>
                    <div className="card">
                        <h3>DevOps & Tools</h3>
                        <p>AWS, Docker, Kubernetes, Jenkins, GitHub Workflows, CI/CD, Git</p>
                    </div>
                    <div className="card">
                        <h3>Testing & Tools</h3>
                        <p>Postman, JUnit, JMeter, JIRA, Code Analysis</p>
                    </div>
                    <div className="card">
                        <h3>Concepts</h3>
                        <p>Data Structures, Algorithms, Object-Oriented Design, Design Patterns</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;