import { AnimatePresence } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlitchEffect from './components/animations/GlitchEffect';
import ScannerCursor from './components/animations/ScannerCursor';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { HistoryProvider } from './context/HistoryContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <HistoryProvider>
        <div className="min-h-screen bg-cyber-black text-white font-cyber flex flex-col relative overflow-hidden">
          <GlitchEffect />
          <ScannerCursor />
          <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10 pointer-events-none"></div>
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </HistoryProvider>
    </Router>
  );
}

export default App;
