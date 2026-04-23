import { useMemo } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    title: 'Quantum Shield AI',
    category: 'Cybersecurity',
    image: '/projects/quantum.mp4',
    stats: 'Real-time Guard',
    link: 'https://quantum-shield-ai.vercel.app/'
  },
  {
    title: 'FitCoach AI',
    category: 'Health & AI',
    image: '/projects/fitcoach.png',
    stats: '95% Engagement',
    link: 'https://fitcoach-cyan-three.vercel.app/'
  },
  {
    title: 'AI Campaign Workflow',
    category: 'AI Automation',
    image: '/projects/flow.gif',
    stats: '12k+ hrs saved',
    link: 'https://ai-powered-campaign-execution-workf.vercel.app/'
  },
  {
    title: 'TeamUp Collaboration',
    category: 'SaaS Platform',
    image: '/projects/teamup.gif',
    stats: 'Efficiency ↑ 50%',
    link: 'https://teamup-4ljr.vercel.app/'
  },
  {
    title: 'High Sos',
    category: 'Rooftop Dining Lounge',
    image: '/projects/high%20so.gif',
    stats: '15k+ Members',
    link: 'https://high-so.vercel.app/'
  },
  {
    title: 'Tonic Russian Lounge',
    category: 'Premium Night Lounge',
    image: '/projects/tonic.gif',
    stats: 'Bookings ↑ 65%',
    link: 'https://tonic-russian-lounge.vercel.app/'
  },
  {
    title: 'Tiger Bar Stock Exchange',
    category: 'Interactive Bar Experience',
    image: '/projects/tiger.gif',
    stats: 'Revenue ↑ 40%',
    link: 'https://tiger-bar-stock-exchange-dubai.vercel.app/'
  },
  {
    title: 'Ora Shisha',
    category: 'Shisha & Social Lounge',
    image: '/projects/ora.gif',
    stats: 'Premium UX',
    link: 'https://ora-shisha.vercel.app/'
  },
  {
    title: 'Nido Restaurant',
    category: 'Fine Dining Restaurant',
    image: '/projects/nido.gif',
    stats: 'Loyalty ↑ 25%',
    link: 'https://nido-restaurant.vercel.app/'
  }
];

interface WorkProps {
  onNavigate?: (page: string) => void;
  isFull?: boolean;
}

export default function Work({ onNavigate, isFull = false }: WorkProps) {
  // Show all projects and shuffle them
  const displayProjects = useMemo(() => {
    const shuffled = [...projects];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <section id="work" className={cn("section-padding bg-white relative", isFull && "pt-32")}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-black tracking-[0.25em] text-[11px] uppercase">
                Selected Works
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter"
            >
              Engineered <br/>
              <span className="text-slate-300 italic font-serif font-light">to Scale.</span>
            </motion.h2>
          </div>
          
          {!isFull && (
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => onNavigate?.('work')}
              className="group flex items-center gap-3 text-[13px] font-black uppercase tracking-widest text-slate-400 hover:text-black transition-all duration-500 pb-2 border-b border-black/5 hover:border-black bg-transparent cursor-pointer"
            >
              Explore Full Archive <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {displayProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative block"
            >
              <div className="relative aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-[0_48px_100px_-22px_rgba(45,15,96,0.22)] bg-white border border-slate-200/70 p-2 md:p-3">
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  {project.image.endsWith('.mp4') ? (
                    <video
                      src={project.image}
                      className="w-full h-full object-contain transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] saturate-110 contrast-110 brightness-[1.03] group-hover:saturate-125"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={project.title}
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] saturate-110 contrast-110 brightness-[1.03] group-hover:saturate-125"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/18 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                {/* Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/45 via-brand-orange/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12">
                  <span className="text-white/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2 md:mb-4">
                    Performance Metric
                  </span>
                  <div className="text-2xl md:text-4xl font-display font-black text-white italic font-serif">
                    {project.stats}
                  </div>
                </div>

                <div className="absolute top-6 right-6 md:top-10 md:right-10 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="bg-white/90 backdrop-blur-2xl p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border border-black/5">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-surface transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-black mb-3 text-slate-900 tracking-tighter group-hover:text-brand-orange transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-[1px] bg-brand-orange" />
                    <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
