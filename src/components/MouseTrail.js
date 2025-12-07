import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MouseTrail = () => {
  const [particles, setParticles] = useState([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const distance = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);
      
      // Only spawn if moved enough pixels to prevent too many particles
      if (distance > 5) {
        lastPos.current = { x: clientX, y: clientY };
        const id = Date.now() + Math.random();
        
        // Colors extracted from the image (Purple, Pink, Gold/Orange)
        const colors = [
          '#A855F7', // Purple-500
          '#D946EF', // Fuchsia-500
          '#F59E0B', // Amber-500
          '#EC4899', // Pink-500
          '#8B5CF6', // Violet-500
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.random() * 15 + 5; // 5px to 20px

        setParticles((prev) => [
          ...prev,
          {
            id,
            x: clientX,
            y: clientY,
            color: randomColor,
            size: randomSize,
          },
        ]);

        // Cleanup particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 600); // Lifetime of particle
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              opacity: 0.5, 
              scale: 0.5,
              x: particle.x - particle.size / 2, 
              y: particle.y - particle.size / 2 
            }}
            animate={{ 
              opacity: 0, 
              scale: 1.5,
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut" 
            }}
            style={{
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
              filter: 'blur(1px)',
              left: 0,
              top: 0,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MouseTrail;
