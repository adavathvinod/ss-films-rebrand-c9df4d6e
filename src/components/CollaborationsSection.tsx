import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brandRows = [
  [
    "Warner Music", "FILA", "Gillette", "Foot Locker", "Roquette",
    "IFF", "Hogarth", "Dentsu", "Emirates NBD", "LIWA",
    "Virgin Music", "Infectious", "FORM", "Museum of the Future",
  ],
  [
    "Adani", "Schbang", "Almost Gods", "Nykaa", "Kotak Life",
    "Sun TV", "Yash Raj Films", "Sudhir Mishra", "Atlee",
    "Shekhar Kapur", "Anupam Kher", "Vivek Agarwal", "Kathryn Aboya",
  ],
];

const MarqueeRow = ({
  brands,
  direction = "left",
  speed = 30,
}: {
  brands: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const doubled = [...brands, ...brands];
  const animDir = direction === "left" ? "-50%" : "0%";
  const animStart = direction === "left" ? "0%" : "-50%";

  return (
    <div className="relative overflow-hidden py-5 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-8 md:gap-14 whitespace-nowrap"
        animate={{ x: [animStart, animDir] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" },
        }}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="text-foreground/40 hover:text-foreground text-sm md:text-base font-medium uppercase tracking-widest transition-colors duration-300 cursor-default select-none flex-shrink-0"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const CollaborationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-primary font-medium mb-4">
            Trusted By
          </p>
          <h2
            className="heading-lg text-foreground italic"
            style={{ fontStyle: "italic" }}
          >
            Our Collaborations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-b border-foreground/10"
        >
          <MarqueeRow brands={brandRows[0]} direction="left" speed={35} />
          <div className="border-t border-foreground/5" />
          <MarqueeRow brands={brandRows[1]} direction="right" speed={40} />
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
