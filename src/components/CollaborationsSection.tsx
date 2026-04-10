import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import collabMadking from "@/assets/collab-madking.png";
import collabSup from "@/assets/collab-sup.png";
import collabEeline from "@/assets/collab-eeline.png";
import collabHoc from "@/assets/collab-hoc.png";

const collaborators = [
  { name: "Mad King Studios", logo: collabMadking },
  { name: "SUP", logo: collabSup },
  { name: "Ee Line Chusava", logo: collabEeline },
  { name: "HOC", logo: collabHoc },
];

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 25,
}: {
  items: typeof collaborators;
  direction?: "left" | "right";
  speed?: number;
}) => {
  const quadrupled = [...items, ...items, ...items, ...items];
  const animDir = direction === "left" ? "-50%" : "0%";
  const animStart = direction === "left" ? "0%" : "-50%";

  return (
    <div className="relative overflow-hidden py-8 group">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
        animate={{ x: [animStart, animDir] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" },
        }}
      >
        {quadrupled.map((collab, i) => (
          <div
            key={`${collab.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 px-4 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default"
          >
            <img
              src={collab.logo}
              alt={collab.name}
              className="h-12 md:h-16 w-auto object-contain"
              style={{ filter: "grayscale(100%) brightness(1.5)", transition: "filter 0.5s" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%) brightness(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) brightness(1.5)")}
            />
          </div>
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
          <MarqueeRow items={collaborators} direction="left" speed={20} />
          <div className="border-t border-foreground/5" />
          <MarqueeRow items={collaborators} direction="right" speed={25} />
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
