import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <h2 className="heading-lg text-foreground mb-8">ABOUT SS FILMS</h2>
            <div className="space-y-6 text-body text-muted-foreground max-w-lg">
              <p>
                Not another ad agency. We're a new kind of film studio. AI-native. Strategy-led.
              </p>
              <p>
                SS FILMS was born from a bold belief: the future of advertising doesn't need cameras or crews. It needs vision, strategy, and the right technology.
              </p>
              <p>
                We combine cutting-edge AI tools with deep creative instincts to produce ad films that rival traditional production — at a fraction of the cost and timeline.
              </p>
              <p>
                Every project starts with strategy. Every frame is intentional. Every deliverable is designed to move your brand forward.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Studio</span>
                <p className="heading-display text-2xl md:text-3xl text-foreground mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  SS FILMS
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Focus</span>
                <p className="heading-display text-2xl md:text-3xl text-foreground mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  AI Ad Films
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Approach</span>
                <p className="heading-display text-2xl md:text-3xl text-foreground mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  AI-Native
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
