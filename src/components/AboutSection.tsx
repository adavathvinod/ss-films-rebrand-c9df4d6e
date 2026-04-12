import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LazyVideo from "@/components/ui/LazyVideo";
import aboutVideo1 from "@/videos/AI_ad_for_202604121829.mp4";
import aboutVideo2 from "@/videos/AI_ad_for_202604121830.mp4";
import aboutVideo3 from "@/videos/AI_ad_for_202604121831.mp4";
import aboutVideo4 from "@/videos/AI_ad_for_202604121832.mp4";
import aboutVideo5 from "@/videos/AI_ad_for_202604121834.mp4";
import aboutVideo6 from "@/videos/creative_video_like_202604121812.mp4";

interface BentoCard {
  title: string;
  subtitle?: string;
  video: string;
  span: string;
  overlay?: "dark" | "light" | "gradient";
  titlePosition?: "bottom" | "top";
  extraContent?: React.ReactNode;
}

const cards: BentoCard[] = [
  {
    title: "Concept Development",
    subtitle: "We start with a blank page. Just the problem, and a way through it.",
    video: aboutVideo1,
    span: "col-span-1 row-span-2",
    overlay: "dark",
    titlePosition: "bottom",
  },
  {
    title: "AI-Generated Storyboarding",
    video: aboutVideo2,
    span: "col-span-1 row-span-1",
    overlay: "dark",
    titlePosition: "bottom",
    extraContent: (
      <p className="text-sm mb-2 font-medium text-left text-white/85">
        AI lets us move <strong>faster</strong>.<br />
        So we spend time where<br />it <strong className="text-primary">matters</strong>.
      </p>
    ),
  },
  {
    title: "Production without Production",
    video: aboutVideo3,
    span: "col-span-1 row-span-2",
    overlay: "dark",
    titlePosition: "bottom",
  },
  {
    title: "Creative Partnership",
    subtitle: "We work with you, not just for you.",
    video: aboutVideo4,
    span: "col-span-1 row-span-1",
    overlay: "dark",
    titlePosition: "bottom",
  },
  {
    title: "AI Editing & Post",
    subtitle: "Cut, color, and finish at lightning speed.",
    video: aboutVideo5,
    span: "col-span-1 row-span-1",
    overlay: "dark",
    titlePosition: "bottom",
  },
  {
    title: "Ta da!!",
    subtitle: "Banger videos for socials, ads, and campaigns.",
    video: aboutVideo6,
    span: "col-span-1 row-span-1",
    overlay: "dark",
    titlePosition: "bottom",
    extraContent: (
      <div className="flex items-center gap-1 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
      </div>
    ),
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Not another ad agency.
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto text-lg">
            We're a new kind of film studio. AI-native. Strategy-led. Built for brands who don't want to sound like everyone else.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${card.span}`}
            >
              {/* Video or gradient background */}
              {card.video ? (
                <LazyVideo
                  src={card.video}
                  fallbackSrc="/videos/showreel.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-muted/80 to-muted" />
              )}

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
              />

              {/* Content */}
              <div
                className={`relative z-10 h-full flex flex-col p-6 ${
                  card.titlePosition === "bottom" ? "justify-end" : "justify-start"
                }`}
              >
                {card.extraContent && card.titlePosition === "top" && card.extraContent}
                <h3
                  className="text-lg md:text-xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p
                    className="text-sm mt-1 text-white/75"
                  >
                    {card.subtitle}
                  </p>
                )}
                {card.extraContent && card.titlePosition !== "top" && card.extraContent}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
