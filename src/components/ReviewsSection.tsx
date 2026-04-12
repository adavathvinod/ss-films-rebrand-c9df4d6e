import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Founder, BrandWave",
    text: "Chitram Labs delivered what we thought was impossible — a full commercial entirely AI-generated, and it looked better than anything we'd done with traditional shoots. Absolutely game-changing.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Creative Director, NeonEdge",
    text: "The quality and speed were unreal. We went from brief to final cut in under a week. Their AI pipeline is the future of content production.",
    rating: 5,
  },
  {
    name: "Ravi Krishnan",
    role: "CEO, PixelForge Studios",
    text: "Working with Chitram Labs felt like working with a team from the future. The RUPAM AI system is extraordinary — synthetic humans that actually feel real.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Marketing Head, TerraGlow",
    text: "They understood our vision instantly and translated it into something cinematic. No cameras, no delays, just pure creative execution. Highly recommend.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Producer, Indie Collective",
    text: "We needed a devotional short film with a specific aesthetic — Chitram Labs nailed it on the first pass. Their attention to emotional detail is remarkable.",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? "hsl(var(--primary))" : "none"}
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-10 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-primary font-medium mb-4">
            Testimonials
          </p>
          <h2 className="heading-lg text-foreground">
            WHAT THEY SAY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative p-8 border transition-all duration-500 cursor-default ${
                hoveredIdx === i
                  ? "border-primary/50 bg-primary/5 scale-[1.02] shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)]"
                  : "border-foreground/10 bg-secondary/50"
              } ${i === 3 ? "lg:col-span-2" : ""}`}
            >
              <StarRating rating={review.rating} />
              <p className="text-body text-foreground/80 mt-5 mb-6 text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-foreground/10 pt-4">
                <p className="text-body text-foreground font-semibold text-sm">{review.name}</p>
                <p className="text-body text-muted-foreground text-xs uppercase tracking-wider mt-1">
                  {review.role}
                </p>
              </div>

              {/* Quote mark decoration */}
              <div className="absolute top-4 right-6 text-foreground/5 text-6xl font-serif leading-none select-none pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
