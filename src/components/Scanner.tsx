import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Scanner = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setScanResult(null);

    try {
      // First, submit URL for scanning
      const scanResponse = await fetch('https://www.virustotal.com/api/v3/urls', {
        method: 'POST',
        headers: {
          'x-apikey': import.meta.env.VITE_VIRUSTOTAL_API_KEY,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `url=${encodeURIComponent(url)}`
      });

      if (!scanResponse.ok) {
        throw new Error('Failed to submit URL for scanning');
      }

      const scanData = await scanResponse.json();
      const analysisId = scanData.data.id;

      // Wait for analysis to complete (you might want to implement polling)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Get analysis results
      const resultResponse = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
        method: 'GET',
        headers: {
          'x-apikey': import.meta.env.VITE_VIRUSTOTAL_API_KEY
        }
      });

      if (!resultResponse.ok) {
        throw new Error('Failed to fetch scan results');
      }

      const resultData = await resultResponse.json();
      setScanResult(resultData.data.attributes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter URL to scan..."
          className="flex-1 p-4 rounded-lg bg-cyber-dark border border-cyber-purple-400 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`px-8 py-4 bg-cyber-blue text-white rounded-lg font-semibold transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyber-blue/90'
            }`}
          disabled={isLoading}
        >
          {isLoading ? 'Scanning...' : 'Scan Now'}
        </button>
      </form>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-red-500/20 border border-red-500 text-red-500 rounded-lg"
        >
          {error}
        </motion.div>
      )}

      {scanResult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-cyber-dark border border-cyber-purple-400 rounded-lg"
        >
          <pre className="text-white overflow-x-auto">
            {JSON.stringify(scanResult, null, 2)}
          </pre>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Scanner;
