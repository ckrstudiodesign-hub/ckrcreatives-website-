import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, CalendarDays, Star } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/971521046611?text=Hi%20CKR%20Creatives,%20I%20am%20interested%20in%20your%20services%20(Web%20Design,%20SEO,%20Social%20Media%20Marketing).%20Please%20guide%20me.';
const CALENDLY_URL = 'https://calendly.com/ckrstudiodesign/30min';

const famousInsights = [
  { author: 'Albert Einstein', quote: 'Curiosity and consistency build extraordinary outcomes.' },
  { author: 'Mahatma Gandhi', quote: 'Progress starts when your daily actions match your values.' },
  { author: 'Nelson Mandela', quote: 'Long-term success is earned through resilience and vision.' },
  { author: 'Steve Jobs', quote: 'Build with intention, and people will feel the difference.' },
  { author: 'Marie Curie', quote: 'Focus on the work itself, and fear loses its power.' },
  { author: 'Warren Buffett', quote: 'Reputation grows from small decisions repeated over time.' },
  { author: 'Oprah Winfrey', quote: 'Excellence appears when preparation meets purpose.' },
  { author: 'Leonardo da Vinci', quote: 'Details are where quality quietly becomes visible.' },
  { author: 'Abraham Lincoln', quote: 'Strong foundations make fast progress sustainable.' },
  { author: 'Rumi', quote: 'What you seek grows when you give it focused energy.' }
];

const reviews = [
  {
    name: 'Daniel Foster',
    role: 'Founder, Ecom Brand',
    rating: 4.5,
    text: 'Smooth process and strong conversion lift within the first month.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Aisha Rahman',
    role: 'Marketing Lead',
    rating: 5,
    text: 'Premium execution and very fast response from strategy to launch.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Michael Torres',
    role: 'Operations Director',
    rating: 4,
    text: 'Clear roadmap, clean handover, and measurable growth outcomes.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Fatima Al Noor',
    role: 'Startup Co-Founder',
    rating: 5,
    text: 'Design quality is elite and the team communication is exceptional.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Ryan Mitchell',
    role: 'CEO, SaaS',
    rating: 4.5,
    text: 'Messaging became clearer and our lead quality improved quickly.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Sara Ibrahim',
    role: 'Brand Manager',
    rating: 4,
    text: 'Practical strategy backed by execution that actually moves KPIs.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Jonathan Lee',
    role: 'CMO',
    rating: 5,
    text: 'One of the best agency partnerships we have had in years.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Mariam Qureshi',
    role: 'Retail Director',
    rating: 4.5,
    text: 'Campaign quality and brand consistency improved across all channels.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Alex Carter',
    role: 'Product Lead',
    rating: 4,
    text: 'Fast delivery, low friction, and reliable support throughout.',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=180&h=180&fit=crop&crop=faces'
  },
  {
    name: 'Noura Saeed',
    role: 'Business Owner',
    rating: 5,
    text: 'Our online presence feels premium now and inquiries increased.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=180&h=180&fit=crop&crop=faces'
  }
];

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path fill="#EA4335" d="M3 6.5v11A2.5 2.5 0 0 0 5.5 20H7V9.9L3 6.5z" />
      <path fill="#34A853" d="M17 20h1.5A2.5 2.5 0 0 0 21 17.5v-11l-4 3.4V20z" />
      <path fill="#FBBC04" d="M17 9.9 21 6.5v-.8A2.7 2.7 0 0 0 18.3 3H5.7A2.7 2.7 0 0 0 3 5.7v.8l4 3.4L12 14l5-4.1z" />
      <path fill="#4285F4" d="M7 20h10V9.9L12 14 7 9.9V20z" />
    </svg>
  );
}

function CalendlyLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#006BFF" />
      <path d="M8 12a4 4 0 0 1 4-4h4v2h-4a2 2 0 1 0 0 4h4v2h-4a4 4 0 0 1-4-4Z" fill="#fff" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: '',
    website: '' // Honeypot field
  });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const cssId = 'calendly-widget-css';
    const scriptId = 'calendly-widget-script';

    if (!document.getElementById(cssId)) {
      const css = document.createElement('link');
      css.id = cssId;
      css.rel = 'stylesheet';
      css.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(css);
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const interval = window.setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    const quoteInterval = window.setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % famousInsights.length);
    }, 5000);

    return () => {
      window.clearInterval(interval);
      window.clearInterval(quoteInterval);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  const sanitizeInput = (value: string) =>
    value
      .replace(/[<>`]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

  const handleInputChange = (field: 'name' | 'email' | 'objective' | 'website', value: string) => {
    const cleaned = field === 'email' ? sanitizeInput(value).toLowerCase() : sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [field]: cleaned }));
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.website) return 'Submission rejected.';
    if (formData.name.length < 2 || formData.name.length > 80) return 'Enter a valid full name.';
    if (!emailPattern.test(formData.email)) return 'Enter a valid email address.';
    if (formData.objective.length < 20 || formData.objective.length > 1200) return 'Objective must be between 20 and 1200 characters.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = Date.now();

    if (now - lastSubmitTime < 10000) {
      setFormMessage('Please wait a few seconds before sending another request.');
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      setFormMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    setFormMessage('Transmitting securely...');

    try {
      const submissionData = new FormData();
      submissionData.append('access_key', '1e5585e5-f8f8-4d9b-9b0f-b7e1b27cd459');
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('objective', formData.objective);
      submissionData.append('subject', `New Collaboration Request from ${formData.name}`);
      submissionData.append('from_name', 'CKR Creatives Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });

      const result = await response.json();
      if (result.success) {
        setFormMessage('Form submitted successfully! We will be in touch shortly.');
        setLastSubmitTime(now);
        setFormData({ name: '', email: '', objective: '', website: '' }); // Clear form
      } else {
        setFormMessage(result.message || 'Transmission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      
      // Enterprise fallback: if adblockers kill the API, open email client directly
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nObjective:\n${formData.objective}`;
      window.location.href = `mailto:ckrstudiodesign@gmail.com?subject=${encodeURIComponent(`New Collaboration Request from ${formData.name}`)}&body=${encodeURIComponent(body)}`;
      
      setFormMessage('API blocked by browser. Redirecting to your secure email client...');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-28 pb-10 bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/[0.05] blur-[100px] rounded-full -z-10" />
      
      <div className="container-custom h-full">
        <div className="max-w-6xl mx-auto bg-[#FFF9F5] border border-brand-orange/10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-9 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 overflow-hidden relative shadow-[0_24px_80px_rgba(249,115,22,0.09)] lg:min-h-[calc(100vh-9rem)] items-center">
          <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.05] pointer-events-none">
            <Mail className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rotate-12 text-brand-orange" />
          </div>

          <div className="relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-black tracking-[0.25em] text-[11px] uppercase">
                Collaboration
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-display font-black mb-5 md:mb-6 text-black tracking-tighter leading-[0.95] max-w-[13ch]">
              Let’s Architect <br/>
              <span className="text-brand-orange italic font-serif font-light">Your Supremacy.</span>
            </h2>
            
            <p className="text-slate-800 mb-7 text-base sm:text-lg leading-relaxed max-w-md font-medium">
              Fill the form and our team will reply quickly with your growth blueprint, timelines, and execution steps.
            </p>

            <div className="grid grid-cols-1 gap-3 md:gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-brand-orange/5 hover:border-[#25D366]/45 transition-all duration-500 group shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">WhatsApp</p>
                  <p className="text-[13px] sm:text-sm font-bold text-black tracking-tight">Chat Instantly with CKR</p>
                </div>
              </motion.a>
              
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-brand-orange/5 hover:border-brand-orange/30 transition-all duration-500 group shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GmailLogo />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Gmail</p>
                  <p className="text-[13px] sm:text-sm font-bold text-black tracking-tight break-all">ckrstudiodesign@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-brand-orange/10 bg-white p-4 sm:p-5 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-3">Client Reviews</p>

              <motion.article
                key={reviewIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="h-[142px]"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={reviews[reviewIndex].image}
                    alt={reviews[reviewIndex].name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-black text-slate-900 truncate">{reviews[reviewIndex].name}</p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-black text-amber-500 shrink-0">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {reviews[reviewIndex].rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400 font-black mb-2">{reviews[reviewIndex].role}</p>
                    <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">"{reviews[reviewIndex].text}"</p>
                  </div>
                </div>
              </motion.article>

              <div className="mt-2 flex items-center gap-1.5 justify-center">
                {reviews.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === reviewIndex ? 'w-5 bg-brand-orange' : 'w-1.5 bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={openCalendly}
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-brand-orange px-6 py-4 text-white font-black uppercase tracking-[0.12em] text-[11px] shadow-[0_14px_34px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-colors"
            >
              <CalendarDays className="w-5 h-5" /> Book 30-min Calendly Call
            </button>
          </div>
          <div className="w-full bg-white rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-7 lg:p-8 border border-brand-orange/5 relative z-10 shadow-xl lg:-mt-3">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-3">
                  <label htmlFor="full-name" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Identity</label>
                  <input 
                    id="full-name"
                    name="full-name"
                    type="text" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-orange bg-transparent outline-none transition-all duration-500 text-black placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="direct-email" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Direct Email</label>
                  <input 
                    id="direct-email"
                    name="direct-email"
                    type="email" 
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    maxLength={160}
                    autoComplete="email"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-orange bg-transparent outline-none transition-all duration-500 text-black placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="project-objective" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">The Objective</label>
                <textarea 
                  id="project-objective"
                  name="project-objective"
                  rows={3}
                  placeholder="Tell us about your conversion goals..."
                  value={formData.objective}
                  onChange={(e) => handleInputChange('objective', e.target.value)}
                  required
                  minLength={20}
                  maxLength={1200}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-orange bg-transparent outline-none transition-all duration-500 resize-none text-black placeholder:text-slate-400 font-medium"
                />
              </div>

              {formMessage && (
                <p className="text-sm font-semibold text-slate-700" role="status" aria-live="polite">
                  {formMessage}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="group relative w-full overflow-hidden bg-black text-white py-5 sm:py-6 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 cursor-pointer shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? 'Transmitting...' : 'Initialize Transmission'} <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>

              <motion.article
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 min-h-[108px]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-2">Famous Insights</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">"{famousInsights[quoteIndex].quote}"</p>
                <p className="text-[11px] font-black tracking-[0.08em] uppercase text-brand-orange">{famousInsights[quoteIndex].author}</p>
              </motion.article>

              <button
                type="button"
                onClick={openCalendly}
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-brand-orange px-6 py-4 text-white font-black uppercase tracking-[0.12em] text-[11px] shadow-[0_14px_34px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-colors"
              >
                <CalendlyLogo /> Book on Calendly
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
