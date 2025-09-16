import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2>Education</h2>
                <div className="card">
                    <h3>University of Texas at Arlington</h3>
                    <p>Master of Science, Computer Science (GPA: 3.8/4)</p>
                    <p className="dates">Jan 2023 - Dec 2024</p>
                </div>
                <div className="card">
                    <h3>CVR College of Engineering</h3>
                    <p>Bachelor of Technology, Computer Science and Engineering (GPA: 3.6/4)</p>
                    <p className="dates">Aug 2017 - May 2021</p>
                </div>
            </div>
        </section>
    );
};

export default Education;