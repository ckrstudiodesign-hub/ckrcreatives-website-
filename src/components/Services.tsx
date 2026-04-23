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
    description: 'High-performance websites and apps built with React/Next.js for ultimate speed and conversion.',
    icon: Globe,
  },
  {
    title: 'Growth & SEO',
    description: 'Multi-channel search dominance through SEO, AEO, and specialized GEO strategies.',
    icon: Search,
  },
  {
    title: 'AI Automation',
    description: 'Scale your operations with custom LLM integrations and workflow optimizations.',
    icon: Cpu,
  },
  {
    title: 'Branding & Content',
    description: 'Premium visual identities and strategic content that resonates with your target audience.',
    icon: Palette,
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with enterprise-grade security solutions and IT infrastructure.',
    icon: ShieldCheck,
  },
  {
    title: 'Analytics & Optimization',
    description: 'Data-driven insights and continuous optimization to ensure your growth engine never stops.',
    icon: BarChart3,
  }
];

const optimizationFramework = [
  {
    title: 'SEO (Search Engine Optimization)',
    detail: 'SEO ranks your website in traditional search engine link lists.'
  },
  {
    title: 'GEO (Generative Engine Optimization)',
    detail: 'GEO gets your brand cited and summarized within AI-generated responses.'
  },
  {
    title: 'AEO (Answer Engine Optimization)',
    detail: 'AEO optimizes content to become the definitive answer for voice and direct queries.'
  },
  {
    title: 'AIO (AI Optimization)',
    detail: 'AIO prepares digital assets to be understood by artificial intelligence systems.'
  },
  {
    title: 'ASO (App Store Optimization)',
    detail: 'ASO improves visibility and ranking of mobile applications within app stores.'
  },
  {
    title: 'SXO (Search Experience Optimization)',
    detail: 'SXO blends SEO with user experience to maximize engagement and conversion quality.'
  },
  {
    title: 'LLMO (Large Language Model Optimization)',
    detail: 'LLMO structures data so AI models can ingest and recall your brand accurately.'
  }
];

const faqItems = [
  {
    question: 'What does an AI Automation Agency Dubai do for growth brands?',
    answer: 'An AI Automation Agency Dubai streamlines operations, improves lead qualification, and accelerates execution using AI-first workflows.'
  },
  {
    question: 'Why combine SEO and GEO services in Dubai?',
    answer: 'SEO drives visibility in classic search results, while GEO increases brand visibility in AI-generated answers and summaries.'
  },
  {
    question: 'How does Web Development Dubai impact conversions?',
    answer: 'High-performance web development improves speed, clarity, and trust, which directly improves conversion rates and lead quality.'
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
                    
                    <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow font-medium group-hover:font-bold group-hover:text-slate-700 transition-all duration-300">
                      {service.description}
                    </p>

                    <div className="h-[2px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
                  </div>
               </div>
            </motion.article>
          ))}
        </div>

        <section aria-labelledby="ai-optimization-framework" className="mt-16 md:mt-20">
          <header className="mb-10 md:mb-12">
            <p className="text-brand-orange font-black tracking-[0.2em] text-[11px] uppercase mb-3">Search + AI Visibility Framework</p>
            <h2 id="ai-optimization-framework" className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
              AI Automation Agency Dubai Strategy: SEO & GEO Services Dubai
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl">
              We structure brand content for search engines, answer engines, and large language models so your visibility compounds across Google, ChatGPT, Gemini, and voice discovery.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {optimizationFramework.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-lg md:text-xl font-display font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm md:text-base">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-section" className="mt-16 md:mt-20">
          <header className="mb-8 md:mb-10">
            <h2 id="faq-section" className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-3">
              FAQ: Web Development Dubai, SEO, GEO, and LLMO
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl">
              Clear answers for decision-makers evaluating growth infrastructure, AI optimization, and technical search performance.
            </p>
          </header>

          <div className="space-y-4 md:space-y-6">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
                <h3 className="text-lg md:text-2xl font-display font-black text-slate-900 mb-3">{item.question}</h3>
                <p className="text-slate-600 text-sm md:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
