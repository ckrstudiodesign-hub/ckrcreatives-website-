import { motion } from 'motion/react';
import { 
  Globe, 
  Search, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  BarChart3,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: 'Web Design & Development',
    description: 'Conversion-focused websites, funnels, and premium digital experiences built for speed, clarity, and scalable growth.',
    icon: Globe,
    linkLabel: 'Explore Web Design',
    linkHref: '#'
  },
  {
    title: 'SEO, GEO & AEO',
    description: 'Search and AI visibility strategies that improve discoverability, authority, and qualified inbound opportunities.',
    icon: Search,
    linkLabel: 'Explore SEO & GEO',
    linkHref: '#'
  },
  {
    title: 'Social Media Marketing',
    description: 'Campaign systems for social growth, paid performance, and creative optimization across key attention channels.',
    icon: BarChart3,
    linkLabel: 'Explore Social Growth',
    linkHref: '#'
  },
  {
    title: 'AI Automation',
    description: 'Automation workflows that remove bottlenecks, accelerate response times, and improve operational consistency.',
    icon: Cpu,
    linkLabel: 'Explore Automation',
    linkHref: '#'
  },
  {
    title: 'Video Production & Branding',
    description: 'Brand storytelling through premium video, campaign visuals, and content systems that elevate market positioning.',
    icon: Palette,
    linkLabel: 'Explore Branding',
    linkHref: '#'
  },
  {
    title: 'Cybersecurity',
    description: 'Practical digital protection systems that secure web assets, reduce risk, and protect brand trust as you scale.',
    icon: ShieldCheck,
    linkLabel: 'Explore Security',
    linkHref: '#'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Noise background for texture */}
      <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />

      <div className="container-custom relative z-10">
        <header className="text-left max-w-4xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-black tracking-[0.25em] text-[11px] uppercase">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter"
          >
            Infrastructure for <br/>
            <span className="text-slate-300 italic font-serif font-light">Digital Supremacy.</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 2,
                zIndex: 20
              }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                scale: { duration: 0.4, ease: "easeOut" },
                rotate: { duration: 0.4, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-full flex flex-col pt-8 md:pt-12 cursor-pointer"
            >
               {/* Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.03] to-transparent rounded-3xl -z-10 group-hover:from-brand-orange/[0.12] transition-all duration-700 blur-2xl group-hover:blur-3xl" />
               
               {/* Animated Gradient Border Container */}
               <div className="relative p-[1px] rounded-3xl overflow-hidden h-full"> 
                 {/* Rotating Border Layer */}
                 <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-brand-orange)_90deg,var(--color-brand-orange-light)_180deg,transparent_270deg)] animate-spin-slow" />
                 </div>

                 {/* Main Content Card */}
                 <div className="relative z-10 p-8 md:p-10 rounded-[23px] glass-card h-full flex flex-col border-none bg-white">
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-6 h-6 text-brand-orange" />
                    </div>

                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-brand-orange group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-brand-orange/20">
                      <service.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-black mb-6 text-slate-900 tracking-tight transition-all duration-300 group-hover:text-brand-orange-dark">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 text-base leading-relaxed mb-6 flex-grow font-medium group-hover:font-bold group-hover:text-slate-700 transition-all duration-300">
                      {service.description}
                    </p>

                    <a
                      href={service.linkHref}
                      className="text-sm font-black uppercase tracking-[0.16em] text-brand-orange hover:text-brand-orange-dark transition-colors mb-4"
                    >
                      {service.linkLabel}
                    </a>

                    <div className="h-[2px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
                  </div>
               </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
