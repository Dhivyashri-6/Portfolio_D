import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextLoader.css';

const TextLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const text = "DHIVYASHRI";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete && onComplete();
      }, 800);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-loader-container"
        >
          <div className="text-loader">
            <div className="gradient-text">
              {text.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="gradient-letter"
                  style={{
                    '--index': index,
                    '--total': text.length
                  }}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* Background particle motion */}
            <div className="particle-background">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="bg-particle"
                  style={{
                    '--delay': `${Math.random() * 5}s`,
                    '--duration': `${Math.random() * 10 + 15}s`,
                    '--x-start': `${Math.random() * 100}%`,
                    '--y-start': `${Math.random() * 100}%`,
                    '--x-end': `${Math.random() * 100}%`,
                    '--y-end': `${Math.random() * 100}%`,
                    '--size': `${Math.random() * 6 + 2}px`,
                    '--opacity': Math.random() * 0.6 + 0.2
                  }}
                />
              ))}
            </div>
            
            {/* Floating particles around text */}
            <div className="floating-particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    '--delay': `${i * 0.2}s`,
                    '--x': `${Math.random() * 100}%`,
                    '--y': `${Math.random() * 100}%`,
                    '--size': `${Math.random() * 4 + 2}px`
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TextLoader;
