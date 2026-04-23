import { motion } from 'motion/react';

export default function PageTransitionOverlay({ isTransitioning }: { isTransitioning: boolean }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isTransitioning ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[110] bg-brand-orange origin-left pointer-events-none"
    />
  );
}
