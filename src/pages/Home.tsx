import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Lock, Zap } from 'lucide-react';
import Scanner from '../components/Scanner';
import ScanHistory from '../components/ScanHistory';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-28 pb-16"
    >
      <div className="text-center mb-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-cyber-blue">Detect</span>{' '}
          <span className="text-white">Cyber</span>{' '}
          <span className="text-cyber-pink">Threats</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-cyber-purple-200 text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          Scan any URL for phishing, malware, and other online threats with our
          advanced cybersecurity scanner. Stay protected in the digital world.
        </motion.p>
      </div>

      {/* Scanner Component */}
      <Scanner />

      {/* Scan History Component */}
      <ScanHistory />

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-cyber-blue">Core</span>{' '}
          <span className="text-white">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck className="h-10 w-10 text-cyber-blue" />,
              title: 'Phishing Detection',
              description: 'Identify and avoid sophisticated phishing attempts designed to steal your personal information.'
            },
            {
              icon: <AlertTriangle className="h-10 w-10 text-cyber-pink" />,
              title: 'Malware Analysis',
              description: 'Detect malicious code, trojans, and other harmful software before they infect your device.'
            },
            {
              icon: <Lock className="h-10 w-10 text-cyber-green" />,
              title: 'Safe Browsing',
              description: 'Browse with confidence knowing that your online activities are protected from cyber threats.'
            },
            {
              icon: <Zap className="h-10 w-10 text-cyber-yellow" />,
              title: 'Real-time Protection',
              description: 'Get instant results with our lightning-fast scanning technology and comprehensive threat database.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card p-6 hover:shadow-[0_0_15px_rgba(94,53,167,0.5)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-cyber-purple-200">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;