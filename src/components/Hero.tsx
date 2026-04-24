import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import HeroMesh from './HeroMesh';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = [
    { text: "Elite", class: "text-slate-900" },
    { text: "Design.", class: "text-brand-orange" },
    { text: "Engineered", class: "text-slate-900 block mt-2" },
    { text: "Growth.", class: "text-brand-purple-light" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          src="/projects/quantum.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/88 via-white/78 to-white/92" />

      <HeroMesh />
      
      {/* Floating Abstract Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[20%] right-[10%] w-64 h-64 bg-gradient-to-br from-brand-orange/10 to-brand-orange-light/10 rounded-full blur-3xl -z-10 animate-float"
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-gradient-to-tr from-brand-orange/5 to-brand-orange-light/5 rounded-full blur-3xl -z-10 animate-pulse-slow"
      />

      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        <motion.div style={{ opacity }} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange bg-orange-50/50 backdrop-blur-xl border border-brand-orange/10 rounded-full">
              <Sparkles className="w-3 h-3" /> Dubai Creative Growth Partner
            </span>
          </motion.div>
          
          <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-display font-black leading-[1.1] mb-8 md:mb-10 tracking-[-0.04em]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom py-2">
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.3 + (i * 0.15), 
                    ease: [0.215, 0.61, 0.355, 1] 
                  }}
                  className={`inline-block whitespace-pre ${word.class}`}
                >
                  {word.text}{" "}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed font-medium tracking-tight">
              CKR Creatives helps ambitious brands in Dubai scale with high-performance web experiences, strategic growth systems, and conversion-focused execution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('contact')}
                className="group relative w-full sm:w-auto overflow-hidden bg-surface text-white px-12 py-6 rounded-2xl font-black text-[13px] uppercase tracking-widest transition-all duration-500 hover:glow-orange cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initialize Growth <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-orange-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('work')}
                className="group w-full sm:w-auto glass-dark px-12 py-6 rounded-2xl font-black text-[13px] uppercase tracking-widest text-surface hover:bg-surface hover:text-white transition-all duration-500 hover:glow-orange cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  View Dossier <Play className="w-3 h-3 fill-current transition-transform group-hover:scale-110" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-slate-200 to-transparent"
      />
    </section>
  );
}
