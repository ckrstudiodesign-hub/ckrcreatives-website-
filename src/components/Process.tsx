import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    id: '01',
    title: 'Discovery',
    description: 'We audit your current systems and identify leaks in your revenue engine. Understanding your core business logic is our priority.'
  },
  {
    id: '02',
    title: 'Strategy',
    description: 'Developing a custom roadmap focused on high-impact growth levers. We don\'t do guesswork; we do data-informed planning.'
  },
  {
    id: '03',
    title: 'Design',
    description: 'Crafting premium visual experiences that command attention and trust. We blend Swiss minimalism with performance psychology.'
  },
  {
    id: '04',
    title: 'Development',
    description: 'Engineering high-performance solutions with AI automation baked in. Our code is clean, scalable, and optimized for conversion.'
  },
  {
    id: '05',
    title: 'Launch & Optimize',
    description: 'Going live and continuously refining based on real user data. Launch day is only the beginning of your growth journey.'
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      <div className="container-custom" ref={containerRef}>
        <div className="max-w-3xl mb-24 text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-xs uppercase tracking-[0.25em]"
          >
            Our Method
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-black mt-6 mb-8 text-slate-900 tracking-tighter"
          >
            The Blueprint to <br/><span className="text-slate-500">Digital Dominance</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 z-0 hidden sm:block" />
          <motion.div 
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-orange -translate-x-1/2 z-10 hidden sm:block"
          />

          <div className="space-y-24 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ margin: "-100px", once: true }}
                className={`flex flex-col sm:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full text-left sm:text-right ${
                  index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                }`}>
                  <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 text-slate-900">{step.title}</h3>
                  <p className={`text-slate-500 text-lg leading-relaxed max-w-md mx-auto sm:mx-0 ${
                    index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Numbered Hub */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <motion.div 
                    whileInView={{ 
                      scale: [0.8, 1.1, 1],
                      backgroundColor: ['rgba(249, 115, 22, 0)', 'rgba(249, 115, 22, 1)']
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-brand-orange text-white flex items-center justify-center text-xl font-bold font-display z-30 shadow-xl shadow-brand-orange/20"
                  >
                    {step.id}
                  </motion.div>
                  {/* Subtle Outer Ring */}
                  <div className="absolute inset-0 -m-3 rounded-3xl border border-brand-orange/10 animate-pulse" />
                </div>

                {/* Empty Space for layout */}
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
