import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
        isScrolled
          ? 'py-4 bg-[rgba(255,246,238,0.82)] backdrop-blur-2xl border-brand-orange/20 shadow-[0_14px_40px_rgba(249,115,22,0.12)]'
          : 'py-5 bg-[rgba(255,249,244,0.62)] backdrop-blur-xl border-brand-orange/15 shadow-[0_8px_30px_rgba(249,115,22,0.08)]'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer p-0"
        >
          <div className="w-14 h-14 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:border-brand-orange/30 transition-colors">
            <img 
              src="/logo.png" 
              alt="CKR" 
              className="w-full h-full object-contain p-1" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xl md:text-2xl font-display font-black tracking-tight text-slate-900">
              CKR<span className="text-brand-orange"> Creatives</span>
            </span>
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.35em] text-slate-400 mt-0.5">
              Dubai
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "text-[15px] font-black uppercase tracking-[0.14em] transition-all duration-300 link-underline",
                activePage === link.id ? "text-brand-orange" : "text-slate-600 hover:text-black"
              )}
            >
              {link.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => handleNavClick('contact')}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "group relative overflow-hidden flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[14px] font-black uppercase tracking-[0.13em] transition-all duration-500",
              activePage === 'contact' 
                ? "bg-brand-orange text-white shadow-2xl shadow-brand-orange/25" 
                : "bg-surface text-white hover:bg-brand-orange hover:shadow-2xl hover:shadow-brand-orange/35"
            )}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-orange-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2.5">
              Start Project <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-[rgba(255,247,240,0.94)] backdrop-blur-3xl md:hidden overflow-hidden border-t border-brand-orange/15"
          >
            <div className="container-custom py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "text-3xl font-display font-black tracking-tighter text-left transition-all",
                    activePage === link.id ? "text-brand-orange" : "text-slate-900"
                  )}
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-black/5 w-full my-2" />
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-brand-orange text-white px-8 py-5 rounded-2xl text-center font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-orange/20"
              >
                Initialize Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
