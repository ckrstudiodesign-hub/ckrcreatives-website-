import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail } from 'lucide-react';

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
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/[0.05] blur-[100px] rounded-full -z-10" />
      
      <div className="container-custom">
        <div className="bg-[#FFF9F5] border border-brand-orange/10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 overflow-hidden relative shadow-[0_24px_80px_rgba(249,115,22,0.09)]">
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
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-black mb-6 md:mb-8 text-black tracking-tighter leading-[0.95] max-w-[13ch]">
              Let’s Architect <br/>
              <span className="text-brand-orange italic font-serif font-light">Your Supremacy.</span>
            </h2>
            
            <p className="text-slate-800 mb-8 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed max-w-md font-medium">
              We only take on 3 new partnerships per quarter to ensure elite-level attention. Initialize your project today.
            </p>

            <div className="grid grid-cols-1 gap-4 md:gap-5">
              <div className="flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-brand-orange/5 hover:border-brand-orange/30 transition-all duration-500 group shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Secure Line</p>
                  <p className="text-[13px] sm:text-sm font-bold text-black tracking-tight">+971 52 104 6611</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-brand-orange/5 hover:border-brand-orange/30 transition-all duration-500 group shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Digital Mail</p>
                  <p className="text-[13px] sm:text-sm font-bold text-black tracking-tight break-all">ckrstudiodesign@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              <div className="flex -space-x-4">
                {[
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
                  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces'
                ].map((src, i) => (
                  <img 
                    key={i}
                    src={src}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white object-cover shadow-lg"
                    alt={`Team member ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm font-medium text-center sm:text-left">Join 150+ brands scaling with us.</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-7 md:p-8 lg:p-10 border border-brand-orange/5 relative z-10 shadow-xl">
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit} noValidate>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                  rows={4}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
