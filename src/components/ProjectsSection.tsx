import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["ALL WORK", "AD FILM", "BRAND", "PRODUCT", "SOCIAL"];

const projects = [
  { title: "LuxeAura", category: "AD FILM", image: project1 },
  { title: "NeonVibe", category: "BRAND", image: project2 },
  { title: "BiteKraft", category: "PRODUCT", image: project3 },
  { title: "AutoPulse", category: "AD FILM", image: project4 },
  { title: "TechNova", category: "SOCIAL", image: project5 },
  { title: "Chronos", category: "PRODUCT", image: project6 },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("ALL WORK");

  const filtered = filter === "ALL WORK" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Category filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="sticky top-16 md:top-20 z-30 bg-foreground text-background px-4 md:px-8 py-3 flex gap-4 md:gap-8 overflow-x-auto mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`uppercase text-xs md:text-sm tracking-widest font-medium whitespace-nowrap transition-all duration-300 ${
                filter === cat ? "text-background" : "text-background/50 hover:text-background/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              layout
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating accent dots */}
                <motion.div
                  className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="heading-display text-xl text-foreground">{project.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-primary mt-1 block">
                    {project.category}
                  </span>
                </div>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="w-8 h-8 border border-foreground flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
