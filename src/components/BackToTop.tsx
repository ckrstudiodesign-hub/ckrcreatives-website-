import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  footerSelector?: string;
}

export default function BackToTop({ footerSelector = '#site-footer' }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const footer = document.querySelector(footerSelector);
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterInView(entry.isIntersecting),
      { threshold: 0.18 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerSelector]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && isFooterInView && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[80] w-14 h-14 bg-brand-orange text-white rounded-2xl shadow-2xl shadow-brand-orange/30 flex items-center justify-center hover:bg-orange-700 transition-colors group cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
