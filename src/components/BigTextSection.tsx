import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BigTextSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const lines = ["WE ARE", "AI-NATIVE", "WE CREATE", "EMOTION"];

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="heading-mega text-foreground">{line}</h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BigTextSection;
