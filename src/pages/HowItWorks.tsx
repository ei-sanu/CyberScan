import { motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle, Search, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Replace Link with useNavigate
import FAQ from '../components/FAQ';

export const pricingConfig = {
  free: {
    isActive: true,
    scanLimit: 50,
    features: [
      'Basic URL scanning',
      'Threat detection',
      'Malware checking',
      'Phishing detection'
    ]
  }
};

const HowItWorks = () => {
  const navigate = useNavigate(); // Add this hook

  const handleScanClick = () => {
    navigate('/'); // Navigate to home page
  };

  const steps = [
    {
      title: 'Enter URL',
      description: `Simply paste the URL you want to check into our scanner. It can be any website you're suspicious about.`,
      icon: <Search className="h-12 w-12 text-cyber-blue" />,
    },
    {
      title: 'Scan Process',
      description: 'Our advanced algorithms analyze the URL for known threats, malicious patterns, and suspicious behavior.',
      icon: <Activity className="h-12 w-12 text-cyber-pink" />,
    },
    {
      title: 'Threat Detection',
      description: 'We identify potential risks including phishing attempts, malware, suspicious redirects, and more.',
      icon: <AlertTriangle className="h-12 w-12 text-cyber-yellow" />,
    },
    {
      title: 'Results & Recommendations',
      description: 'Get detailed results about any threats found and recommendations on how to proceed safely.',
      icon: <CheckCircle className="h-12 w-12 text-cyber-green" />,
    },
  ];

  const technologies = [
    {
      name: 'Machine Learning',
      description: 'Our AI models analyze patterns in URLs and website content to identify new and evolving threats.',
    },
    {
      name: 'Threat Intelligence',
      description: 'We maintain a constantly updated database of known malicious websites and emerging threat patterns.',
    },
    {
      name: 'Behavioral Analysis',
      description: 'Advanced algorithms detect suspicious behaviors that might indicate malicious intent.',
    },
    {
      name: 'Real-time Scanning',
      description: 'Our system checks websites in real-time, providing immediate protection against active threats.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-28 pb-16"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">How </span>
          <span className="text-cyber-blue">Cyber</span>
          <span className="text-cyber-pink">Scan </span>
          <span className="text-white">Works</span>
        </h1>
        <p className="text-cyber-purple-200 text-lg md:text-xl max-w-3xl mx-auto">
          Our powerful URL scanning technology uses advanced algorithms and machine learning
          to protect you from phishing attempts, malware, and other online threats.
        </p>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyber-purple-700 transform -translate-x-1/2"></div>
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    <span className="text-cyber-pink">{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-cyber-purple-200">{step.description}</p>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-dark border-2 border-cyber-purple-500 flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                  <div className="absolute w-24 h-24 rounded-full bg-cyber-purple-800/20 animate-pulse"></div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Technology */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Our Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-cyber-blue">{tech.name}</h3>
              <p className="text-cyber-purple-200">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-cyber-blue">Frequently Asked</span>{' '}
          <span className="text-cyber-pink">Questions</span>
        </h2>
        <FAQ />
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-12 px-6 cyber-card max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Stay Protected?</h2>
        <p className="text-cyber-purple-200 mb-8 max-w-2xl mx-auto">
          Start scanning URLs now and take control of your online security.
          Our advanced technology is just a click away.
        </p>
        <motion.button
          onClick={handleScanClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cyberpunk-btn text-lg px-8 py-3"
        >
          <Shield className="inline-block mr-2 h-5 w-5" />
          Scan URL Now
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default HowItWorks;
