import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlitchEffect = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Random glitch effect timing
    const triggerGlitch = () => {
      const interval = Math.random() * 10000 + 5000; // 5-15 seconds
      setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => {
          setIsGlitching(false);
          triggerGlitch();
        }, Math.random() * 500 + 200); // Glitch lasts 200-700ms
      }, interval);
    };

    triggerGlitch();
  }, []);

  const glitchVariants = {
    normal: {
      opacity: 0,
    },
    glitching: {
      opacity: [0, 0.3, 0.1, 0.2, 0.1, 0, 0.2, 0],
      x: [0, -5, 3, -2, 0, 2, -3, 0],
      y: [0, 2, -1, 0, 1, -1, 0, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1],
      },
    },
  };

  return (
    <motion.div
      variants={glitchVariants}
      animate={isGlitching ? "glitching" : "normal"}
      className="fixed inset-0 pointer-events-none z-[999] mix-blend-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/20 to-cyber-blue/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </motion.div>
  );
};

export default GlitchEffect;