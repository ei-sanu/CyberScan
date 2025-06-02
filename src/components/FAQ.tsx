import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: 'Is CyberScan free to use?',
            answer: 'Yes, CyberScan is currently free to use with a limit of 50 scans per month. Our free plan includes basic URL scanning, threat detection, malware checking, and phishing detection.'
        },
        {
            question: 'How accurate is the scanner?',
            answer: 'Our scanner utilizes the VirusTotal API, which combines multiple antivirus engines and website scanners for comprehensive threat detection. While we strive for maximum accuracy, we recommend using the results as part of your overall security assessment.'
        },
        {
            question: 'Does CyberScan store the URLs I scan?',
            answer: 'No, we do not store scanned URLs due to privacy and good intent for the users . However, we do not store any personal data, and all scanned URLs are encrypted and anonymized.'
        },
        {
            question: 'Can CyberScan protect me from all online threats?',
            answer: 'While CyberScan is a powerful tool for detecting various online threats, no single solution can guarantee 100% protection. We recommend using CyberScan alongside other security practices like keeping software updated and using strong passwords.'
        }
    ];

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
                <motion.div
                    key={index}
                    className="border border-cyber-purple-700 rounded-lg overflow-hidden bg-cyber-dark/50"
                    initial={false}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full p-4 flex justify-between items-center text-left hover:bg-cyber-purple-700/10 transition-colors"
                    >
                        <span className="text-lg font-semibold text-white">{item.question}</span>
                        {openIndex === index ? (
                            <ChevronUp className="text-cyber-blue h-5 w-5" />
                        ) : (
                            <ChevronDown className="text-cyber-blue h-5 w-5" />
                        )}
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="p-4 text-cyber-purple-200 border-t border-cyber-purple-700">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default FAQ;
