import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, AlertCircle, AlertTriangle, ExternalLink } from 'lucide-react';

interface ScanResult {
  url: string;
  isMalicious: boolean;
  timestamp: number;
  threatDetails?: string[];
  threatLevel?: 'low' | 'medium' | 'high' | 'critical';
}

interface ResultCardProps {
  result: ScanResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const getStatusIcon = () => {
    if (!result.isMalicious) {
      return <ShieldCheck className="h-12 w-12 text-cyber-green" />;
    }

    switch (result.threatLevel) {
      case 'low':
        return <AlertCircle className="h-12 w-12 text-cyber-yellow" />;
      case 'medium':
        return <AlertTriangle className="h-12 w-12 text-cyber-yellow" />;
      case 'high':
      case 'critical':
        return <ShieldAlert className="h-12 w-12 text-cyber-pink" />;
      default:
        return <ShieldAlert className="h-12 w-12 text-cyber-pink" />;
    }
  };

  const getStatusColor = () => {
    if (!result.isMalicious) return 'cyber-green';
    
    switch (result.threatLevel) {
      case 'low': return 'cyber-blue';
      case 'medium': return 'cyber-yellow';
      case 'high': return 'cyber-pink';
      case 'critical': return 'cyber-pink';
      default: return 'cyber-pink';
    }
  };

  const getStatusText = () => {
    if (!result.isMalicious) return 'Safe';
    
    switch (result.threatLevel) {
      case 'low': return 'Low Risk';
      case 'medium': return 'Medium Risk';
      case 'high': return 'High Risk';
      case 'critical': return 'Critical Risk';
      default: return 'Malicious';
    }
  };

  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch (e) {
      return url;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-cyber-dark border-2 border-${getStatusColor()} rounded-lg overflow-hidden`}
    >
      <div className={`bg-cyber-dark px-6 py-4 flex items-center justify-between border-b border-${getStatusColor()}/30`}>
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {getStatusIcon()}
          </motion.div>
          <div>
            <p className="text-gray-400 text-sm">Scan Result:</p>
            <h3 className={`text-xl font-bold text-${getStatusColor()}`}>
              {getStatusText()}
            </h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Scanned URL:</p>
          <a 
            href={result.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyber-blue hover:text-cyber-pink transition-colors flex items-center gap-1"
          >
            {formatUrl(result.url)}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-white">Analysis Details:</h4>
          {result.isMalicious ? (
            <div>
              <motion.ul className="space-y-2 text-gray-300">
                {result.threatDetails?.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    className="flex items-start"
                  >
                    <AlertTriangle className="h-5 w-5 text-cyber-pink mr-2 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-4 bg-cyber-black/50 border border-cyber-pink/30 rounded-md"
              >
                <p className="text-cyber-yellow font-semibold mb-2">What this means for you:</p>
                <p className="text-gray-400">
                  This URL has been identified as potentially harmful. It may attempt to steal your personal information, 
                  install malware, or cause other damage to your device or data. We recommend avoiding this website.
                </p>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-cyber-black/50 border border-cyber-green/30 rounded-md"
            >
              <p className="text-cyber-green font-semibold mb-2">This URL appears to be safe</p>
              <p className="text-gray-400">
                Our scan did not detect any malicious content or behavior associated with this URL.
                However, always exercise caution when sharing personal information online.
              </p>
            </motion.div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">
            Scan completed on {new Date(result.timestamp).toLocaleString()}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyberpunk-btn"
            onClick={onReset}
          >
            Scan Another URL
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;