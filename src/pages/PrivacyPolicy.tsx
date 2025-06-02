import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
                <h1 className="text-4xl font-bold mb-8 text-cyber-blue">Privacy Policy</h1>

                <div className="space-y-6 text-cyber-purple-200">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
                        <p>When you use CyberScan, we collect:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>URLs submitted for scanning</li>
                            <li>Scan results and timestamps</li>
                            <li>Basic usage statistics</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Provide URL scanning services</li>
                            <li>Improve our threat detection capabilities</li>
                            <li>Enhance user experience</li>
                            <li>Maintain service security</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your information
                            from unauthorized access, disclosure, or destruction.
                        </p>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PrivacyPolicy;
