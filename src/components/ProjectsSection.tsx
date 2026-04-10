import { useRef, useEffect, useState } from "react";
import projectVideo1 from "@/assets/project-video-1.mp4.asset.json";
import projectVideo2 from "@/assets/project-video-2.mp4.asset.json";
import projectVideo3 from "@/assets/project-video-3.mp4.asset.json";
import projectVideo4 from "@/assets/project-video-4.mp4.asset.json";
import projectVideo5 from "@/assets/project-video-5.mp4.asset.json";
import projectVideo6 from "@/assets/project-video-6.mp4.asset.json";

const projects = [
  { title: "LuxeAura", category: "AD FILM", video: projectVideo1.url },
  { title: "NeonVibe", category: "BRAND", video: projectVideo2.url },
  { title: "BiteKraft", category: "PRODUCT", video: projectVideo3.url },
  { title: "AutoPulse", category: "AD FILM", video: projectVideo4.url },
  { title: "TechNova", category: "SOCIAL", video: projectVideo5.url },
  { title: "Chronos", category: "PRODUCT", video: projectVideo6.url },
];

const StickyCard = ({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Progress: 0 when card top is at viewport top, 1 when card is fully covered
      const progress = Math.max(0, Math.min(1, -rect.top / windowH));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cards underneath scale down and darken as next card covers them
  const scale = 1 - scrollProgress * 0.08;
  const overlay = scrollProgress * 0.6;

  return (
    <div
      ref={cardRef}
      className="h-screen w-full"
      style={{ zIndex: index + 1 }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center top",
        }}
      >
        {/* Video background */}
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Darken overlay driven by scroll */}
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-none"
          style={{ opacity: overlay }}
        />

        {/* Base gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            {project.category}
          </span>
          <h2
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 border border-white/40 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 13L13 1M13 1H3M13 1V11"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="text-white/50 text-sm tracking-wider uppercase">
              View Project
            </span>
          </div>

          {/* Card index indicator */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 lg:bottom-24 lg:right-24">
            <span className="text-white/20 text-7xl md:text-9xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-background">
      {projects.map((project, i) => (
        <StickyCard
          key={project.title}
          project={project}
          index={i}
          total={projects.length}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
