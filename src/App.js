import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <motion.a 
            href="#" 
            className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vamshi Krishna Donthula
          </motion.a>
          <nav className="nav-menu">
            <motion.a 
              href="#about"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#skills"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Skills
            </motion.a>
            {/* ... add more nav links with motion props ... */}
          </nav>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Software Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Building secure, scalable applications, APIs, and microservices.
          </motion.p>
          <motion.a
            href="#projects"
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            View My Work
          </motion.a>
        </div>
      </section>

      {/* Other components remain the same for now */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <footer id="contact" className="footer">
        <div className="container">
          <p>Contact: +1-945-426-1929 | donthulavamshi06@gmail.com</p>
          <p>&copy; 2025 Vamshi Krishna Donthula. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;