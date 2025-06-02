import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Trash2, ShieldCheck, ShieldAlert } from 'lucide-react';
import { useHistory } from '../context/HistoryContext';

const ScanHistory = () => {
  const { history, clearHistory } = useHistory();

  if (history.length === 0) return null;

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-3xl mx-auto mt-12"
    >
      <div className="cyber-card p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold flex items-center">
            <Clock className="mr-2 text-cyber-blue" />
            <span className="text-white">Recent Scans</span>
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearHistory}
            className="text-cyber-pink hover:text-cyber-blue flex items-center text-sm"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear History
          </motion.button>
        </div>

        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence>
            {history.map((item, index) => (
              <motion.div
                key={`${item.url}-${item.timestamp}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-3 bg-cyber-dark/50 border border-cyber-purple-800/30 rounded-md hover:border-cyber-purple-600/50 transition-all duration-300"
              >
                <div className="flex items-center overflow-hidden">
                  {item.isMalicious ? (
                    <ShieldAlert className="h-5 w-5 text-cyber-pink mr-3 flex-shrink-0" />
                  ) : (
                    <ShieldCheck className="h-5 w-5 text-cyber-green mr-3 flex-shrink-0" />
                  )}
                  <div className="truncate">
                    <p className="text-sm text-white truncate" title={item.url}>
                      {formatUrl(item.url)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center ml-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.isMalicious
                      ? 'bg-cyber-pink/20 text-cyber-pink'
                      : 'bg-cyber-green/20 text-cyber-green'
                  }`}>
                    {item.isMalicious ? 'Threat Detected' : 'Safe'}
                  </span>
                  <span className="text-xs text-gray-500 ml-3">
                    {formatTimestamp(item.timestamp)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ScanHistory;