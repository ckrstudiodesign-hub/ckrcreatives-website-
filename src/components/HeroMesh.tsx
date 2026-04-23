import { motion } from 'motion/react';

export default function HeroMesh() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      {/* Aurora Layer 1: Vibrant Orange - Smoothly moving blob */}
      <motion.div
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[20%] w-[100%] h-[100%] rounded-full bg-orange-600/5 blur-[120px]"
      />

      {/* Aurora Layer 2: Subtle Amber - Smoothly moving blob */}
      <motion.div
        animate={{
          x: ['20%', '-20%', '20%'],
          y: ['10%', '-10%', '10%'],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] -right-[20%] w-[100%] h-[100%] rounded-full bg-amber-600/5 blur-[120px]"
      />

      {/* Ambient Color Shift Layer - Warm Tones */}
      <motion.div
        animate={{
          backgroundColor: [
            'rgba(234, 88, 12, 0.015)', // Minimal Orange
            'rgba(217, 119, 6, 0.015)', // Minimal Amber
            'rgba(234, 88, 12, 0.015)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 z-[1]"
      />

      {/* Noise / Grain overlay for that premium editorial texture */}
      <div className="absolute inset-0 opacity-[0.012] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
