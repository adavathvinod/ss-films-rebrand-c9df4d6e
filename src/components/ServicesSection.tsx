import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "AI Ad Films",
    items: ["Product Ads", "Brand Stories", "Social Content"],
    description: "Full-length ad films crafted with cutting-edge AI. From concept to final cut — no cameras, no crews, just pure creative vision.",
  },
  {
    num: "02",
    title: "Brand Strategy",
    items: ["Positioning", "Visual Identity", "Market Research"],
    description: "We don't just make films. We build the strategic foundation that makes your brand unforgettable.",
  },
  {
    num: "03",
    title: "Creative Direction",
    items: ["Storyboarding", "Art Direction", "Motion Design"],
    description: "Every frame is intentional. Our AI-powered creative process delivers cinematic quality at startup speed.",
  },
  {
    num: "04",
    title: "Growth & Distribution",
    items: ["Platform Strategy", "Performance", "Optimization"],
    description: "Great content deserves great distribution. We optimize every asset for maximum impact across channels.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Section title - like the reference "WHAT WE DO" */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <h2 className="heading-xl text-foreground">
              WHAT<br />WE<br />DO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="self-end max-w-md"
          >
            <p className="text-body text-foreground font-semibold text-lg">
              AI Ad Films. Brand Strategy. Creative Direction.
            </p>
            <p className="text-body text-muted-foreground mt-4">
              And everything it takes to make them seamless. We combine bold creative instincts with AI-native production to deliver ad films that move brands forward.
            </p>
          </motion.div>
        </div>

        {/* Service cards - tilted like the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -3 : 3 }}
              animate={inView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 } : {}}
              whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-secondary p-6 md:p-8 card-hover cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  {service.items.map((item) => (
                    <p key={item} className="text-body text-sm text-muted-foreground">{item}</p>
                  ))}
                </div>
                <span className="heading-display text-3xl text-foreground/20">{service.num}</span>
              </div>
              <h3 className="heading-display text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-body text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
