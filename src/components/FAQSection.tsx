import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "What exactly does SS FILMS do?",
    a: "We create high-quality ad films using AI — from concept to final cut. No cameras, no traditional crews. Just bold ideas powered by cutting-edge AI tools and deep creative strategy.",
  },
  {
    q: "How is AI-made content different from traditional production?",
    a: "AI allows us to iterate faster, explore more creative directions, and deliver cinematic-quality content at a fraction of traditional costs and timelines. The result is just as impactful — sometimes more so.",
  },
  {
    q: "What types of brands do you work with?",
    a: "We work with next-gen brands across fashion, tech, food, automotive, and lifestyle. If your brand has a bold vision, we can bring it to life.",
  },
  {
    q: "How long does a project take?",
    a: "Depending on complexity, we deliver ad films in 1-4 weeks. AI-native production dramatically shortens timelines without sacrificing quality.",
  },
  {
    q: "Do you handle strategy or just production?",
    a: "Both. Every project starts with strategy — brand positioning, audience insights, narrative direction. Then we produce with purpose.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-20 md:py-28 px-6 md:px-10 bg-background">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="heading-lg text-foreground mb-16 text-center"
        >
          FAQ
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-body text-foreground text-base md:text-lg font-medium pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-foreground flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-body text-muted-foreground pb-6 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
