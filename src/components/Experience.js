import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2>Work Experience</h2>
                <div className="card">
                    <h3>Software Engineer | ACCENTURE</h3>
                    <p className="dates">Dec 2021 - Dec 2022, Hyderabad, India</p>
                    <ul>
                        <li className="list-item">Developed and maintained secure RESTful APIs for a credit card management system, processing 10,000+ transactions per day.</li>
                        <li className="list-item">Integrated Transaction Service with PostgreSQL, optimizing queries and reducing latency by 40%.</li>
                        <li className="list-item">Orchestrated containerized microservices using Docker and Kubernetes, ensuring 99.9% availability on AWS.</li>
                        <li className="list-item">Implemented caching and query optimization, reducing response time by 30%.</li>
                        <li className="list-item">Automated the CI/CD pipeline with Jenkins and GitHub Actions, cutting deployment time by 40%.</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>System Engineer | INFOSYS LIMITED</h3>
                    <p className="dates">Jan 2021 - Nov 2021, Hyderabad, India</p>
                    <ul>
                        <li className="list-item">Designed and delivered a secure, scalable Account Service using Spring Boot, reducing system response time by 25% and improving account management efficiency by 30%.</li>
                        <li className="list-item">Optimized MySQL database queries and schema structures, enhancing data retrieval performance by 20%.</li>
                        <li className="list-item">Built an intuitive, mobile-responsive user interface using HTML, JavaScript and CSS, increasing user satisfaction by 25%.</li>
                        <li className="list-item">Improved system reliability by automating API testing with Postman and conducting performance testing with JMeter, boosting throughput by 20%.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;