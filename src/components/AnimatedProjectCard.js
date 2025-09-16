import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { scale: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  hover: { scale: 1.05, boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }
};

const AnimatedProjectCard = ({ title, details, children }) => {
  return (
    <motion.div
      className="card project-item"
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
    >
      <h3>{title}</h3>
      <p className="project-details">{details}</p>
      {children}
    </motion.div>
  );
};

export default AnimatedProjectCard;