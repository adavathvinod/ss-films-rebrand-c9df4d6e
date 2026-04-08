import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ShowreelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
      />

      {/* Cinematic overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />

      {/* Scanline texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground) / 0.1) 2px, hsl(var(--foreground) / 0.1) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm font-medium text-primary-foreground/70 mb-6"
        >
          Showreel 2025
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-primary-foreground"
        >
          SEE THE
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-primary"
        >
          WORK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-body text-primary-foreground/60 mt-8 max-w-md text-sm md:text-base"
        >
          A glimpse into what happens when bold strategy meets AI-native filmmaking.
        </motion.p>

        {/* Play indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center cursor-pointer hover:border-primary-foreground/60 hover:scale-110 transition-all duration-300"
        >
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            className="ml-1"
          >
            <path d="M0 0L20 12L0 24V0Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.8" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ShowreelSection;
