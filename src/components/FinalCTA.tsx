import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onNavigate?: (page: string) => void;
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-brand-orange rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1]"
            >
              Let’s Build Something That <br/>Actually Grows Your Business
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            >
              Stop settling for digital decor. Get a performance-first growth system designed for the modern economy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => onNavigate?.('contact')}
                className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-white text-brand-orange px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-xl shadow-black/10 border-none cursor-pointer"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
