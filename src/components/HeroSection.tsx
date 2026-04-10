import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import chitramLogo from "@/assets/chitram-logo.png";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      {/* Logo watermark behind text */}
      <motion.img
        src={chitramLogo}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[55%] w-[50vw] max-w-[600px] pointer-events-none select-none"
        style={{ filter: "blur(1px)" }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-[10%] w-3 h-3 bg-accent rounded-sm"
        animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[15%] w-4 h-4 border border-primary rounded-full"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-[5%] w-2 h-2 bg-primary rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
        <motion.div
          style={mounted ? { rotateX, rotateY, perspective: 1000 } : {}}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="heading-mega text-primary leading-none"
          >
            CHITRAM
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="heading-mega text-primary leading-none -mt-2 md:-mt-6"
          >
            LABS
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 max-w-xl"
        >
          <p className="text-body text-lg md:text-xl text-muted-foreground">
            Next-Gen Films for Next-Gen Brands.
          </p>
          <p className="text-body text-lg md:text-xl text-foreground font-medium mt-2">
            We're an AI-first Creatives Studio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-foreground px-6 py-3 uppercase tracking-widest text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Let's Create Together
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-muted-foreground/50"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
