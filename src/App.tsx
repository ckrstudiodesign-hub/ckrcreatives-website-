import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate, useSpring, useMotionValue } from 'motion/react';
import { Fish } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import PageTransitionOverlay from './components/PageTransitionOverlay';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 200, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 200, mass: 0.5 });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4
  });
  const purpleAmbientOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.08, 0.16, 0.24]);
  const purpleAmbientScale = useTransform(smoothProgress, [0, 1], [0.95, 1.12]);
  const purpleAmbientY = useTransform(smoothProgress, [0, 1], [0, -120]);

  // Page-like background stages: white -> purple -> orange -> white, with soft blend windows.
  const bgTop = useTransform(
    smoothProgress,
    [0, 0.24, 0.32, 0.49, 0.57, 0.74, 0.82, 1],
    ['#ffffff', '#ffffff', '#f3e9ff', '#f3e9ff', '#ffe8d2', '#ffe8d2', '#ffffff', '#ffffff']
  );
  const bgMid = useTransform(
    smoothProgress,
    [0, 0.24, 0.32, 0.49, 0.57, 0.74, 0.82, 1],
    ['#ffffff', '#ffffff', '#eadbff', '#eadbff', '#ffd7b4', '#ffd7b4', '#ffffff', '#ffffff']
  );
  const bgBottom = useTransform(
    smoothProgress,
    [0, 0.24, 0.32, 0.49, 0.57, 0.74, 0.82, 1],
    ['#ffffff', '#ffffff', '#dfcbff', '#dfcbff', '#ffc998', '#ffc998', '#ffffff', '#ffffff']
  );
  const scrollBackground = useMotionTemplate`linear-gradient(180deg, ${bgTop} 0%, ${bgMid} 52%, ${bgBottom} 100%)`;
  const scrollBackgroundOpacity = useTransform(smoothProgress, [0, 0.08, 0.5, 0.9, 1], [0, 0.34, 0.52, 0.22, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavigate = (page: string) => {
    if (page === activePage) return;
    
    setIsNavigating(true);
    
    // Halfway through the 0.6s overlay animation, we switch the content
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo(0, 0);
    }, 400);

    // After animation completes, we hide overlay
    setTimeout(() => {
      setIsNavigating(false);
    }, 800);
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <TrustLogos />
            <Services />
            <Work onNavigate={handleNavigate} />
            <About />
            <FinalCTA onNavigate={handleNavigate} />
          </>
        );
      case 'services':
        return <Services />;
      case 'work':
        return <Work isFull />;
      case 'about':
        return (
          <>
            <About />
            <Process />
            <Testimonials />
          </>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <PageTransitionOverlay isTransitioning={isNavigating} />
      
      <motion.div
        style={{ background: scrollBackground, opacity: scrollBackgroundOpacity }}
        className="fixed inset-0 pointer-events-none z-[1] mix-blend-multiply"
      />

      {/* Dynamic Background Blobs - Visible on desktop only for optimized performance and theme consistency */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          style={{ opacity: purpleAmbientOpacity, scale: purpleAmbientScale, y: purpleAmbientY }}
          className="absolute inset-[-20%] bg-[radial-gradient(circle_at_65%_35%,rgba(167,139,250,0.42)_0%,rgba(124,58,237,0.18)_32%,rgba(124,58,237,0.08)_52%,transparent_72%)] will-change-transform"
        />
        <motion.div 
          animate={{ 
            x: activePage === 'services' ? [40, 140, 40] : [0, 100, 0],
            y: activePage === 'about' ? [200, 350, 200] : [50, 200, 50],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            x: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 10, repeat: Infinity, ease: "linear" },
            opacity: { duration: 10, repeat: Infinity, ease: "linear" },
            default: { duration: 1, ease: "easeInOut" } 
          }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full transform-gpu will-change-transform"
        />
        <motion.div 
          animate={{ 
            x: activePage === 'work' ? [-50, -150, -50] : [0, -100, 0],
            y: activePage === 'contact' ? [150, 50, 150] : [300, 100, 300],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            x: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 15, repeat: Infinity, ease: "linear" },
            opacity: { duration: 15, repeat: Infinity, ease: "linear" },
            default: { duration: 1, ease: "easeInOut" } 
          }}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-purple/20 blur-[160px] rounded-full transform-gpu will-change-transform"
        />
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 60, opacity: 0 }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl font-display font-bold tracking-tighter origin-center transform-gpu will-change-transform"
            >
              CKR<span className="text-brand-orange">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen selection:bg-brand-orange selection:text-white overflow-x-hidden cursor-none md:cursor-auto flex flex-col">
        {/* Custom Cursor for Desktop */}
        <motion.div 
          style={{ x: smoothMouseX, y: smoothMouseY, marginLeft: -12, marginTop: -12 }}
          className="hidden md:flex fixed w-6 h-6 text-brand-orange pointer-events-none z-[99] items-center justify-center drop-shadow-md"
        >
          <Fish className="w-full h-full fill-brand-orange -scale-x-100 -rotate-45" />
        </motion.div>
        
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer onNavigate={handleNavigate} />
        <BackToTop />
      </div>
    </>
  );
}
