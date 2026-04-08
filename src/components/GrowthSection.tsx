import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { label: "AI TOOLS", rotate: -5 },
  { label: "PROCESS", rotate: -2 },
  { label: "STRATEGY", rotate: 2 },
];

const GrowthSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-dark py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-dark-surface-foreground"
            >
              GROWTH &<br />PARTNERSHIP
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body text-dark-surface-foreground/70 mt-12 max-w-md text-base"
            >
              Behind every creative leap is a solid system.
              We connect the dots between creativity and operations.
              We build processes, partnerships, and strategies that help you scale without the chaos.
            </motion.p>
          </div>

          {/* Tilted pillars like the reference */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-4 items-end self-end"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                style={{ rotate: pillar.rotate }}
                className="border border-dark-surface-foreground/30 px-4 py-8 md:px-6 md:py-12 h-48 md:h-64 flex items-end"
              >
                <span
                  className="heading-display text-dark-surface-foreground text-sm md:text-base whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
