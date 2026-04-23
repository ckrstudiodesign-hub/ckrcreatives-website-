import { motion } from 'motion/react';

const stats = [
  { label: 'Clients & Projects', value: '23+' },
  { label: 'Average Lead Increase', value: '85%' },
  { label: 'Hours Saved via AI', value: '12k+' },
  { label: 'Client Satisfaction', value: '99%' }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <img 
              src="/projects/about%20ckr%20creatives.png?v=2" 
              alt="CKR Creatives team" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover saturate-110 contrast-110 brightness-105 group-hover:scale-105 transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-6 md:p-8 glass backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2rem] border-white/20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-2">Our Manifesto</p>
              <p className="text-surface font-medium leading-relaxed italic font-serif">"We don't build websites. We engineer digital assets that command authority and capture demand."</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-brand-orange" />
                <span className="text-brand-orange font-black tracking-[0.25em] text-[11px] uppercase">
                  Our Pedigree
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-black mb-12 text-slate-900 tracking-tighter leading-[0.95]">
                Precision. Performance.<br/>
                <span className="text-slate-300 italic font-serif font-light">Digital Ascendance.</span>
              </h2>
              
              <div className="space-y-12 text-slate-500 text-lg leading-relaxed mb-20 max-w-2xl">
                <p className="font-medium text-slate-600">
                  Most agencies trade in aesthetics. We trade in <span className="text-slate-900 font-bold border-b border-brand-orange/20">measurable impact</span>. CKR Creatives is a boutique powerhouse dedicated to Dubai’s high-growth elite.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group border-l-[1px] border-slate-100 pl-8 hover:border-brand-orange transition-all duration-500">
                    <h4 className="text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] mb-4">The Mission</h4>
                    <p className="text-base font-medium">To plug revenue leaks and build sustainable lead generation machines via technical rigor.</p>
                  </div>
                  <div className="group border-l-[1px] border-slate-100 pl-8 hover:border-brand-orange transition-all duration-500">
                    <h4 className="text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] mb-4">The Standard</h4>
                    <p className="text-base font-medium">Refinement beyond the ordinary. We blend Swiss minimalism with performance psychology.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-12">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-2 tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
