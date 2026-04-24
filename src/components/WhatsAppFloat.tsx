import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const WHATSAPP_URL =
  'https://wa.me/971521046611?text=Hi%20CKR%20Creatives,%20I%20am%20interested%20in%20your%20services%20(Web%20Design,%20SEO,%20Social%20Media%20Marketing).%20Please%20guide%20me.';

interface WhatsAppFloatProps {
  isHidden?: boolean;
}

export default function WhatsAppFloat({ isHidden = false }: WhatsAppFloatProps) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('#site-footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterInView(entry.isIntersecting),
      { threshold: 0.18 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (isHidden) return null;

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.85, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed right-6 md:right-8 z-[85] transition-[bottom] duration-300 ${isFooterInView ? 'bottom-28 md:bottom-32' : 'bottom-6 md:bottom-8'}`}
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_28px_rgba(37,211,102,0.55)] hover:shadow-[0_16px_34px_rgba(37,211,102,0.62)] transition-shadow duration-300">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35" />
        <motion.span
          animate={{ y: [0, -2, 0], rotate: [0, -4, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
            <path d="M16 .8C7.7.8.9 7.6.9 15.9c0 2.9.8 5.7 2.4 8.2L.9 31.2l7.3-2.3c2.4 1.3 5 2 7.8 2h.1c8.3 0 15.1-6.8 15.1-15.1C31.1 7.6 24.3.8 16 .8zm0 27.5h-.1c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-4.3 1.4 1.4-4.2-.3-.5A12.3 12.3 0 0 1 3.7 16C3.7 9.2 9.2 3.6 16 3.6c6.8 0 12.4 5.5 12.4 12.4S22.8 28.3 16 28.3zm6.8-9.3c-.4-.2-2.1-1-2.4-1.1-.3-.1-.5-.2-.8.2-.2.4-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.4-.2-1.5-.6-2.8-1.9-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.1-.7.2-.2.4-.4.5-.6.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.8-2-1.1-2.8-.3-.7-.5-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2 0 1.9 1.4 3.8 1.6 4 .2.2 2.8 4.3 6.8 6 .9.4 1.7.7 2.3.9 1 .3 1.8.3 2.5.2.8-.1 2.1-.9 2.4-1.8.3-.9.3-1.6.2-1.8 0-.1-.3-.2-.7-.4z" />
          </svg>
        </motion.span>
      </span>
    </motion.a>
  );
}
