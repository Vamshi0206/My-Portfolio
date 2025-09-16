import React from 'react';
import AnimatedProjectCard from './AnimatedProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <AnimatedProjectCard title="Learniverse: A Tailored Learning Platform for UTA" details="Dec 2023">
          <ul>
            <li className="list-item">Engineered a full-stack learning platform to streamline student-educator interaction.</li>
            <li className="list-item">Applied user-friendly UI in ReactJS and Coordinated Spring Boot APIs for robust backend functionality.</li>
            <li className="list-item">Launched application on UTA Cloud, supporting seamless access for 1000+ users.</li>
          </ul>
        </AnimatedProjectCard>
        
        <AnimatedProjectCard title="Walmart sales prediction using Machine Learning" details="Dec 2023">
          <ul>
            <li className="list-item">Created a Random Forest model to predict sales, analyzing holidays, fuel prices, and weather data.</li>
            <li className="list-item">Achieved over 85% accuracy in sales forecasting.</li>
            <li className="list-item">Designed an interactive Streamlit dashboard enabling real-time sales strategy visualization.</li>
          </ul>
        </AnimatedProjectCard>
        
        <AnimatedProjectCard title="Real time mask Detection using Deep Learning" details="Jan 2023">
          <ul>
            <li className="list-item">Built a deep learning-based real-time mask detection system using MobileNetV2, ensuring 95% accuracy.</li>
            <li className="list-item">Integrated OpenCV for live camera feed analysis.</li>
          </ul>
        </AnimatedProjectCard>
      </div>
    </section>
  );
};

export default Projects;