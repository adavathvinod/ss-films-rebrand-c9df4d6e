import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTopOrb = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

      setProgress(nextProgress);
      setIsVisible(scrollTop > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ringStyle = {
    background: `conic-gradient(hsl(var(--primary)) ${progress}%, hsl(var(--muted)) ${progress}% 100%)`,
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.85, pointerEvents: "none" }
      }
      whileHover={{ y: -6, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-[2px] shadow-[0_20px_40px_-15px_hsl(var(--foreground)/0.45)]"
      style={ringStyle}
    >
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background">
        <motion.span
          className="absolute inset-1 rounded-full border border-border/60"
          animate={{ scale: [1, 1.09, 1] }}
          transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
        />
        <ArrowUp className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute -top-10 rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Back to top
        </span>
      </div>
    </motion.button>
  );
};

export default ScrollToTopOrb;
