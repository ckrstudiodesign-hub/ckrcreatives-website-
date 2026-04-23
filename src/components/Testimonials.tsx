import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO at TechFlow Dubai",
    content: "CKR Creatives transformed our digital presence. We saw a 140% increase in lead conversion within the first two months. Their AI automation saved us 20+ hours a week.",
    avatar: "https://picsum.photos/seed/person1/400/400"
  },
  {
    name: "Sarah Al-Fayed",
    role: "Founder of Bloom Hospitality",
    content: "The branding and website they built for our restaurant group are world-class. It's not just a site; it's a booking machine. Highly recommended for any serious business in Dubai.",
    avatar: "https://picsum.photos/seed/person2/400/400"
  },
  {
    name: "Michael Chen",
    role: "Growth Head at StartUpX",
    content: "Professional, fast, and incredibly smart. Their SEO approach put us right in front of users on AI platforms. They truly understand the future of search.",
    avatar: "https://picsum.photos/seed/person3/400/400"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director at Velo",
    content: "Their focus on data-driven design is what sets them apart. They didn't just build a pretty site; they built a conversion engine that actually works.",
    avatar: "https://picsum.photos/seed/person4/400/400"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-orange-light/5 blur-[120px] rounded-full -z-10" />

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
           <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-black tracking-[0.25em] text-[11px] uppercase">
                Global Trust
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter"
            >
              Voice of <br/>
              <span className="text-slate-300 italic font-serif font-light">Efficacy.</span>
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-surface hover:text-white transition-all duration-500 cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-surface hover:text-white transition-all duration-500 cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.02, x: -20 }}
              transition={{ duration: 0.8, ease: [1, 0, 0, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                    <img 
                      src={testimonials[index].avatar} 
                      alt={testimonials[index].name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="mb-10 text-brand-orange/20">
                    <Quote className="w-20 h-20 fill-current" />
                  </div>
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>

                  <blockquote className="text-3xl md:text-5xl font-display font-medium text-slate-900 leading-[1.1] tracking-tight mb-12 italic font-serif">
                    "{testimonials[index].content}"
                  </blockquote>

                  <div>
                    <h4 className="text-xl font-display font-black text-slate-900 tracking-tight">{testimonials[index].name}</h4>
                    <div className="flex items-center gap-3 mt-2">
                       <span className="w-8 h-[1px] bg-slate-300" />
                       <p className="text-[11px] text-slate-400 uppercase font-black tracking-[0.2em]">{testimonials[index].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
