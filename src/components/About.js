import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2>About Me</h2>
                <p>I am a Software Engineer with over two years of experience building secure, scalable applications, APIs, and microservices using Java, Spring Boot, PostgreSQL, and Kafka. I am proven in optimizing performance and ensuring scalability across large-scale systems. I have experience with front-end technologies like ReactJS and Angular, and I'm ready to drive innovation with a full-stack approach.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/vamshi-krishna-donthula/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="mailto:donthulavamshi06@gmail.com"><FaEnvelope /></a>
                </div>
            </div>
        </section>
    );
};

export default About;