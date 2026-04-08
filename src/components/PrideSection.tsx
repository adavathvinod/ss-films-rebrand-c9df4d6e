import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PrideSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-foreground"
        >
          WE TAKE PRIDE
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-foreground"
        >
          IN CHALLENGING
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-foreground"
        >
          THE STATUS QUO
        </motion.h2>
      </div>
    </section>
  );
};

export default PrideSection;
