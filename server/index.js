import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated threat database
const knownMaliciousDomains = [
  'evil-phishing-site.com',
  'malware-download.net',
  'fake-bank-login.com',
  'steal-your-data.org',
  'crypto-scam.io',
];

// Randomly generate threat details based on URL and threat type
const generateThreatDetails = (url, threatLevel) => {
  const phishingDetails = [
    'This website attempts to steal login credentials by mimicking a legitimate service.',
    'The page contains hidden form fields designed to capture sensitive information.',
    'This site uses social engineering tactics to trick users into sharing personal data.',
    'The domain was recently registered and exhibits classic phishing characteristics.',
  ];

  const malwareDetails = [
    'This website attempts to download malicious software to your device.',
    'The page contains obfuscated JavaScript that can execute harmful code.',
    'Known malware distribution patterns were detected on this domain.',
    'This site contains drive-by download attempts targeting system vulnerabilities.',
  ];

  const scamDetails = [
    'This website is associated with known scam operations.',
    'The site makes fraudulent claims or offers that are too good to be true.',
    'This domain is linked to financial scams reported by multiple users.',
    'The page uses high-pressure tactics to manipulate visitors into making decisions.',
  ];

  let details = [];

  if (threatLevel === 'critical' || threatLevel === 'high') {
    // Choose 3-4 threat details
    details = [...getRandomItems(phishingDetails, 1), ...getRandomItems(malwareDetails, 1), ...getRandomItems(scamDetails, 1)];
    if (Math.random() > 0.5) {
      details.push(getRandomItems([...phishingDetails, ...malwareDetails, ...scamDetails], 1)[0]);
    }
  } else if (threatLevel === 'medium') {
    // Choose 2-3 threat details
    const threatTypes = [phishingDetails, malwareDetails, scamDetails];
    const selectedTypes = getRandomItems(threatTypes, 2);
    details = [...getRandomItems(selectedTypes[0], 1), ...getRandomItems(selectedTypes[1], 1)];
    if (Math.random() > 0.5) {
      const remainingType = threatTypes.find(type => !selectedTypes.includes(type));
      if (remainingType) details.push(getRandomItems(remainingType, 1)[0]);
    }
  } else {
    // Choose 1-2 threat details for low level threats
    const threatTypes = [phishingDetails, malwareDetails, scamDetails];
    const selectedType = getRandomItems(threatTypes, 1)[0];
    details = getRandomItems(selectedType, Math.random() > 0.5 ? 2 : 1);
  }

  return details;
};

// Helper function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// API endpoint for URL scanning
app.post('/api/scan', (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Extract domain from URL
    let domain;
    try {
      domain = new URL(url).hostname.toLowerCase();
    } catch (error) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Check if domain is in known malicious list
    const isKnownMalicious = knownMaliciousDomains.some(badDomain => 
      domain.includes(badDomain) || badDomain.includes(domain)
    );

    // For demo purposes, we'll randomly determine if non-known URLs are malicious
    // In a real system, this would use sophisticated analysis algorithms
    const randomFactor = Math.random();
    const isMalicious = isKnownMalicious || (domain.includes('scam') || domain.includes('phish')) || randomFactor < 0.3;

    // If malicious, determine threat level and details
    let response = { isMalicious: isMalicious };
    
    if (isMalicious) {
      // Determine threat level
      let threatLevel;
      if (isKnownMalicious || randomFactor < 0.1) {
        threatLevel = 'critical';
      } else if (randomFactor < 0.2) {
        threatLevel = 'high';
      } else if (randomFactor < 0.25) {
        threatLevel = 'medium';
      } else {
        threatLevel = 'low';
      }
      
      response.threatLevel = threatLevel;
      response.threatDetails = generateThreatDetails(url, threatLevel);
    }

    // Simulate analysis delay
    setTimeout(() => {
      res.json(response);
    }, 500);
  } catch (error) {
    console.error('Error scanning URL:', error);
    res.status(500).json({ error: 'Server error while scanning URL' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});