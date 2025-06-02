import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalAnimationProps {
  url: string;
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({ url }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    // Reset when URL changes
    setLines([]);
    setCurrentLineIndex(0);
    
    const scanSteps = [
      `> INITIALIZING SCAN SEQUENCE...`,
      `> TARGET URL: ${url}`,
      `> VALIDATING URL STRUCTURE...`,
      `> DNS LOOKUP IN PROGRESS...`,
      `> CHECKING SSL CERTIFICATE...`,
      `> ANALYZING HTTP HEADERS...`,
      `> EXAMINING REDIRECT CHAIN...`,
      `> SCANNING FOR MALICIOUS PATTERNS...`,
      `> QUERYING THREAT INTELLIGENCE DATABASE...`,
      `> BEHAVIORAL ANALYSIS IN PROGRESS...`,
      `> ANALYZING WEBPAGE CONTENT...`,
      `> EVALUATING EXTERNAL SCRIPTS...`,
      `> CHECKING DOMAIN REPUTATION...`,
      `> PHISHING SIGNATURE DETECTION...`,
      `> FINALIZING SECURITY ASSESSMENT...`,
      `> GENERATING COMPREHENSIVE REPORT...`,
      `> SCAN COMPLETE.`,
    ];

    let timeout: NodeJS.Timeout;
    
    const addNextLine = (index: number) => {
      if (index < scanSteps.length) {
        setLines(prev => [...prev, scanSteps[index]]);
        setCurrentLineIndex(index + 1);
        
        const nextDelay = Math.random() * 300 + 100; // 100-400ms
        timeout = setTimeout(() => addNextLine(index + 1), nextDelay);
      }
    };

    // Start the animation
    timeout = setTimeout(() => addNextLine(0), 300);

    return () => clearTimeout(timeout);
  }, [url]);

  return (
    <div className="font-terminal text-cyber-green text-sm p-2 h-full overflow-hidden">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-1 flex"
        >
          <span className="mr-2">$</span>
          <span className={line.includes('COMPLETE') ? 'text-cyber-blue' : ''}>
            {line}
          </span>
          {i === lines.length - 1 && !line.includes('COMPLETE') && (
            <span className="animate-pulse">_</span>
          )}
        </motion.div>
      ))}
      
      {/* Visual elements for cyberpunk feel */}
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-cyber-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-cyber-black to-transparent pointer-events-none"></div>
      
      {/* Scan progress */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-1 bg-cyber-dark rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyber-blue"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentLineIndex / 17) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-cyber-purple-300">
          <span>SCAN PROGRESS</span>
          <span>{Math.round((currentLineIndex / 17) * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;