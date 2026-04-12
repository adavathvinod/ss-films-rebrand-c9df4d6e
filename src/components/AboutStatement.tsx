import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sideTopLeft from "@/assets/section 2 (1).jpeg";
import sideTopRight from "@/assets/section 2 (2).jpeg";
import sideBottomLeft from "@/assets/section 2 (3).jpeg";
import sideBottomRight from "@/assets/section 2 (4).jpeg";

const AboutStatement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start reveal closer to section entry to avoid early black fill.
    offset: ["start 70%", "end 15%"],
  });

  // Reveal starts at first line (0%) and progresses with scroll to full text height.
  const revealPercent = useTransform(scrollYProgress, [0.06, 0.74], [0, 115]);
  const frontClipPath = useTransform(
    revealPercent,
    (v) => `polygon(0% 0%, 100% 0%, 100% ${v}%, 0% ${v}%)`
  );
  const imagesParallaxY = useTransform(scrollYProgress, [0, 1], ["-3%", "10%"]);

  const lines = [
    "WE DON'T JUST GENERATE VISUALS,",
    "WE ENGINEER THEM",
    "FROM CONCEPT TO FINAL FRAME",
  ];

  return (
    <section ref={ref} className="relative h-[120vh] mt-12 md:mt-16 bg-background overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden px-4 md:px-8 isolate">
        <motion.div className="absolute inset-0 z-50 pointer-events-none" style={{ y: imagesParallaxY }}>
          <img
            src={sideTopLeft}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute top-[-2%] left-[1.8%] w-[20vw] min-w-[140px] max-w-[340px] object-cover shadow-2xl opacity-90 mix-blend-multiply"
          />
          <img
            src={sideTopRight}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute top-[25%] right-[1.8%] w-[21vw] min-w-[150px] max-w-[360px] object-cover shadow-2xl opacity-90 mix-blend-multiply"
          />
          <img
            src={sideBottomLeft}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute bottom-[9%] left-[0.6%] w-[21vw] min-w-[145px] max-w-[350px] object-cover shadow-2xl opacity-90 mix-blend-multiply"
          />
          <img
            src={sideBottomRight}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute bottom-[8%] right-[2.8%] w-[21vw] min-w-[145px] max-w-[350px] object-cover shadow-2xl opacity-90 mix-blend-multiply"
          />
        </motion.div>

        <div className="relative z-30 h-full w-full flex items-center justify-center">
          <div className="relative w-full max-w-[1250px] text-center">
            {/* Back layer: pale full text always visible */}
            <div className="select-none">
              {lines.map((line) => (
                <h2
                  key={`back-${line}`}
                  className="font-display font-bold uppercase tracking-[-0.04em] text-foreground/10 leading-[0.86]"
                  style={{ fontSize: "clamp(2.8rem, 10.8vw, 9.8rem)" }}
                >
                  {line}
                </h2>
              ))}
            </div>

            {/* Front layer: clipped reveal, same text */}
            <motion.div className="absolute inset-0 z-40" style={{ clipPath: frontClipPath }}>
              {lines.map((line, index) => (
                <motion.h2
                  key={`front-${line}`}
                  className="font-display font-bold uppercase tracking-[-0.04em] text-foreground leading-[0.86]"
                  style={{ fontSize: "clamp(2.8rem, 10.8vw, 9.8rem)" }}
                  animate={index === 0 ? { y: [0, -6, 0] } : undefined}
                  transition={
                    index === 0
                      ? {
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : undefined
                  }
                >
                  {line}
                </motion.h2>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatement;
