import { motion } from 'motion/react';

const points = [
  {
    title: 'Leading Digital Agency in Dubai',
    detail:
      'We combine conversion-led creative, full-stack development, and growth engineering to help brands compete at a premium level in Dubai and across the UAE.'
  },
  {
    title: 'Trusted by UAE Brands',
    detail:
      'Our systems are designed for founders and teams who need predictable growth, stronger market positioning, and measurable returns from every marketing dirham.'
  },
  {
    title: 'Performance Marketing Agency UAE',
    detail:
      'From web design and SEO to social media growth, AI automation, cybersecurity, and content production, we build integrated engines that keep compounding.'
  }
];

export default function WhyCKR() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mb-12 md:mb-14">
          <p className="text-brand-orange font-black tracking-[0.22em] text-[11px] uppercase mb-4">Why CKR Creatives</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[1.02] mb-5">
            Built for Brands That Want Category Authority in Dubai, the UAE, and Beyond.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
            We are a growth-focused digital partner for organizations that want clear positioning, better-qualified demand, and robust digital infrastructure that scales globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 p-7 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight mb-3">{point.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{point.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
