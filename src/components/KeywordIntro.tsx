import { motion } from 'motion/react';

export default function KeywordIntro() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-[2rem] border border-slate-200 p-8 md:p-12"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-orange mb-5">
            Dubai Growth Infrastructure
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-6 leading-[1.06]">
            CKR Creatives is a Dubai-based digital growth agency specializing in web design, social media marketing, SEO, GEO, AI automation, cybersecurity, and video production.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            We help businesses across the UAE, Middle East, and global markets scale through performance-driven digital systems engineered for discoverability, trust, and conversion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base text-slate-700 font-medium mb-8">
            <p>Built for ambitious startups, SMEs, and enterprise teams across Dubai and the UAE.</p>
            <p>Structured for Google ranking, AI visibility, and measurable pipeline outcomes.</p>
            <p>Designed for long-term authority with SEO, AEO, GEO, and LLMO architecture.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-base font-bold">
            <a href="/seo/web-design-agency-dubai.html" className="text-brand-orange hover:text-brand-orange-dark transition-colors">
              web design services in Dubai
            </a>
            <a href="/seo/seo-geo-services-dubai.html" className="text-brand-orange hover:text-brand-orange-dark transition-colors">
              SEO agency UAE
            </a>
            <a href="/seo/ai-automation-agency-uae.html" className="text-brand-orange hover:text-brand-orange-dark transition-colors">
              AI automation solutions UAE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
