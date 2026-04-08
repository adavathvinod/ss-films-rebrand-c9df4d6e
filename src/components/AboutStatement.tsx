import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const AboutStatement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const words = "NO CAMERAS. NO CREWS. JUST BOLD IDEAS TURNED INTO AD FILMS MADE WITH AI.".split(" ");

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden bg-background">
      {/* Floating images like the reference */}
      <motion.img
        src={project1}
        alt="Project"
        loading="lazy"
        width={200}
        height={150}
        className="absolute top-16 left-[5%] w-32 md:w-48 object-cover -rotate-6 shadow-lg hidden md:block"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 0.7, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.img
        src={project2}
        alt="Project"
        loading="lazy"
        width={200}
        height={150}
        className="absolute top-[30%] right-[3%] w-36 md:w-52 object-cover rotate-3 shadow-lg hidden md:block"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 0.7, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        src={project3}
        alt="Project"
        loading="lazy"
        width={200}
        height={150}
        className="absolute bottom-20 right-[20%] w-28 md:w-40 object-cover -rotate-3 shadow-lg hidden md:block"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 0.7, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="heading-xl text-foreground text-center md:text-left">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.15 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="max-w-[1400px] mx-auto mt-20 h-[1px] bg-border origin-left"
      />
    </section>
  );
};

export default AboutStatement;
