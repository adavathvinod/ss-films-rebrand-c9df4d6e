import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import chitramLogo from "@/assets/chitram-logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const progress = useMotionValue(0);
  const barWidth = useTransform(progress, [0, 100], ["0%", "100%"]);
  const displayText = useTransform(progress, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 2.2,
      ease: [0.33, 1, 0.68, 1],
      onComplete: () => setTimeout(onComplete, 380),
    });
    return () => controls.stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10"
      >
        <img
          src={chitramLogo}
          alt="Chitram Labs"
          className="h-14 w-auto select-none"
          style={{ filter: "brightness(1.15)" }}
          draggable="false"
        />

        <div className="flex flex-col items-center gap-3">
          {/* Progress bar */}
          <div className="w-60 h-[1px] bg-border relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary"
              style={{ width: barWidth }}
            />
          </div>
          {/* Percentage counter */}
          <motion.span className="text-[11px] uppercase tracking-[0.45em] text-muted-foreground font-medium tabular-nums">
            {displayText}
          </motion.span>
        </div>
      </motion.div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-8 text-[10px] uppercase tracking-[0.5em] text-muted-foreground/40"
      >
        Chitram Labs · AI-First Films
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
