import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navbarVariants = {
    scrolled: {
      backgroundColor: 'rgba(19, 19, 31, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(94, 53, 167, 0.3)',
      borderBottom: '1px solid rgba(94, 53, 167, 0.3)',
      padding: '0.5rem 0',
    },
    top: {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(94, 53, 167, 0)',
      padding: '1rem 0',
    },
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      variants={navbarVariants}
      animate={isScrolled ? 'scrolled' : 'top'}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Shield className="text-cyber-pink mr-2 h-8 w-8" />
              <span className="font-bold text-2xl tracking-wider">
                <span className="text-cyber-blue">Cyber</span>
                <span className="text-cyber-pink">Scan</span>
              </span>
            </motion.div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-cyber-pink" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-blue" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuItemVariants}
              >
                <Link
                  to={link.path}
                  className={`relative px-2 py-1 text-lg font-medium transition-colors duration-300 hover:text-cyber-pink ${
                    location.pathname === link.path
                      ? 'text-cyber-pink'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-cyber-pink"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 border-t border-cyber-purple-700 pt-4"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={menuItemVariants}
                >
                  <Link
                    to={link.path}
                    className={`block px-2 py-2 font-medium transition-colors duration-300 hover:text-cyber-pink hover:bg-cyber-purple-900 ${
                      location.pathname === link.path
                        ? 'text-cyber-pink bg-cyber-purple-900'
                        : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;