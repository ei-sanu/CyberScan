import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 pt-28 pb-16"
        >
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8 text-cyber-blue">Terms of Service</h1>

                <div className="space-y-6 text-cyber-purple-200">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
                        <p>
                            By accessing and using CyberScan, you agree to be bound by these
                            Terms of Service and all applicable laws and regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Use License</h2>
                        <p>
                            CyberScan grants you a personal, non-exclusive, non-transferable
                            license to use our service for URL scanning and threat detection.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Limitations</h2>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>You may not use our service for malicious purposes</li>
                            <li>You may not attempt to bypass our security measures</li>
                            <li>You may not overload or disrupt our services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer</h2>
                        <p>
                            CyberScan provides URL scanning services on an "as is" basis.
                            While we strive for accuracy, we cannot guarantee detection of all threats.
                        </p>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TermsOfService;
