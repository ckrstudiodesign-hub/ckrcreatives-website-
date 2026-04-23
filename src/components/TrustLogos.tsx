import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const logos = [
  'Golden Legacy', 'Tonic Lounge', 'Tiger Bar', 'Oak Live', 'Keyss', 'High Sos'
];

const subheaders = [
  'Strategic Partnerships',
  'Global Trust'
];

export default function TrustLogos() {
  const [headerIndex, setHeaderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeaderIndex((prev) => (prev + 1) % subheaders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const logoItems = [...logos, ...logos];

  const marqueeContent = (
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      className="flex w-max whitespace-nowrap gap-24 items-center"
    >
      {logoItems.map((logo, i) => (
        <div
          key={`${logo}-${i}`}
          className="text-2xl md:text-4xl font-display font-black tracking-tighter transition-colors duration-500 cursor-default px-4 uppercase"
        >
          {logo}
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-16 border-y border-black/[0.03] bg-white overflow-hidden relative group">
      <div className="container-custom mb-10 text-center h-6 md:h-8 relative flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p 
            key={headerIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 absolute"
          >
            {subheaders[headerIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Base Layer: Gray Logos */}
        <div className="text-slate-200">
          {marqueeContent}
        </div>

        {/* Highlight Layer: Orange Logos (only visible in center) */}
        <div 
          className="absolute inset-0 z-10 text-brand-orange pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 20%, black 45%, black 55%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 20%, black 45%, black 55%, transparent 80%)'
          }}
        >
          {marqueeContent}
        </div>
        
        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />
      </div>
    </section>
  );
}
