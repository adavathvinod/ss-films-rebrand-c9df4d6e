import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import vid1 from "@/assets/project-video-1.mp4.asset.json";
import vid2 from "@/assets/project-video-2.mp4.asset.json";
import vid3 from "@/assets/project-video-3.mp4.asset.json";
import vid4 from "@/assets/project-video-4.mp4.asset.json";
import vid5 from "@/assets/project-video-5.mp4.asset.json";
import vid6 from "@/assets/project-video-6.mp4.asset.json";

const lines = ["WE ARE", "AI-NATIVE", "WE CREATE", "EMOTION"];

const BigTextSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [typedLineIndex, setTypedLineIndex] = useState(0);
  const [typedCharCount, setTypedCharCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    if (typedLineIndex >= lines.length) {
      const loopTimer = window.setTimeout(() => {
        setTypedLineIndex(0);
        setTypedCharCount(0);
      }, 1200);

      return () => window.clearTimeout(loopTimer);
    }

    const currentLine = lines[typedLineIndex];
    const lineDone = typedCharCount >= currentLine.length;
    const timer = window.setTimeout(() => {
      if (lineDone) {
        setTypedLineIndex((prev) => prev + 1);
        setTypedCharCount(0);
      } else {
        setTypedCharCount((prev) => prev + 1);
      }
    }, lineDone ? 220 : 55);

    return () => window.clearTimeout(timer);
  }, [inView, typedCharCount, typedLineIndex]);

  return (
    <section ref={ref} className="pt-0 md:pt-2 pb-20 md:pb-28 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {lines.map((line, i) => {
          const visibleText =
            i < typedLineIndex
              ? line
              : i === typedLineIndex
                ? line.slice(0, typedCharCount)
                : "";

          return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="heading-mega text-foreground min-h-[1em]"
              animate={inView && i <= typedLineIndex ? { y: [0, -6, 0] } : { y: 0 }}
              transition={{ duration: 1.25, delay: i * 0.08, repeat: Infinity, ease: "easeInOut" }}
            >
              {visibleText}
            </motion.h2>
          </motion.div>
          );
        })}

        {/* Message section */}
        <div className="mt-16 md:mt-24 max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-body text-xl md:text-2xl text-muted-foreground italic leading-relaxed"
          >
            "Jack of all trades but master of ONE — create without limits."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.98, ease: [0.22, 1, 0.36, 1] }}
            className="text-body text-sm text-muted-foreground/70 mt-6 uppercase tracking-widest"
          >
            We believe the future of creativity is not restricted by tools, budgets, or physical constraints. Only by imagination.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BigTextSection;
