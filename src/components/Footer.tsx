import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Shield, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ei-sanu', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://x.com/SomeshR82674271', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/somesh-biswal-b73576320/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:someshranjanbiswal13678@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <footer className="relative bg-cyber-dark border-t border-cyber-purple-700 pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo and Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center mb-4">
              <Shield className="text-cyber-pink mr-2 h-6 w-6" />
              <span className="font-bold text-xl tracking-wider">
                <span className="text-cyber-blue">Cyber</span>
                <span className="text-cyber-pink">Scan</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Protecting you from cyber threats with advanced URL scanning technology.
              Stay safe in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-cyber-purple-300 hover:text-cyber-pink transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:ml-auto"
          >
            <h3 className="text-lg font-semibold mb-4 text-cyber-blue">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-cyber-pink transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-cyber-purple-900 mt-10 pt-6 text-center text-gray-500"
        >
          <p>© {currentYear} CyberScan. All rights reserved.</p>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
