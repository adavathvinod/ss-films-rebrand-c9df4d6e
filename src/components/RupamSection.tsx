import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  "Hyper-realistic AI avatars",
  "Natural voice synthesis",
  "End-to-end generative pipeline",
];

const techStack = ["AI Vision", "Voice AI", "Generative Models", "Automation Pipelines"];

const RupamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-dark py-20 md:py-28 px-6 md:px-10 relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-primary font-medium mb-4">
            Experiments — Flagship
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -70 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-lg text-dark-surface-foreground mb-4"
        >
          RUPAM AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body text-dark-surface-foreground/60 text-lg italic mb-12 max-w-xl"
        >
          Synthetic Humans. Real Presence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-body text-dark-surface-foreground/70 max-w-2xl mb-12"
        >
          A next-generation AI persona system built for scalable storytelling and interaction.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="heading-display text-sm text-primary mb-6 tracking-widest">CAPABILITIES</h3>
            <div className="space-y-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-body text-dark-surface-foreground/80">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h3
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display text-sm text-primary mb-6 tracking-widest"
            >
              TECHNOLOGY
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: 55 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.62 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-dark-surface-foreground/20 px-4 py-2 text-sm text-dark-surface-foreground/70 uppercase tracking-wider hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RupamSection;
