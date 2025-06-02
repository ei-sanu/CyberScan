import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScannerCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-[999] mix-blend-screen"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
      }}
      animate={{
        x: 0,
        y: 0,
        scale: [1, 1.05, 1],
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="8" stroke="#05d9e8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        <circle cx="16" cy="16" r="12" stroke="#ff2a6d" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
        <circle cx="16" cy="16" r="2" fill="#39ff14" />
        <line x1="0" y1="16" x2="12" y2="16" stroke="#05d9e8" strokeWidth="1" />
        <line x1="20" y1="16" x2="32" y2="16" stroke="#05d9e8" strokeWidth="1" />
        <line x1="16" y1="0" x2="16" y2="12" stroke="#05d9e8" strokeWidth="1" />
        <line x1="16" y1="20" x2="16" y2="32" stroke="#05d9e8" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

export default ScannerCursor;