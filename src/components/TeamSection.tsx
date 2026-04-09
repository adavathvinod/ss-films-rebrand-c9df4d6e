import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const teamMembers = [
  { name: "Priya Sharma", role: "Creative Director", image: team1 },
  { name: "Arjun Mehta", role: "AI Engineer", image: team2 },
  { name: "Ananya Reddy", role: "Motion Designer", image: team3 },
  { name: "Vikram Das", role: "Cinematographer", image: team4 },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-dark py-24 md:py-36 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs text-primary font-medium mb-16"
        >
          The People Behind SS Films
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[400px] flex-shrink-0"
          >
            <div className="relative group">
              <img
                src={founderImg}
                alt="Founder of SS Films"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                width={512}
                height={640}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-dark-surface-foreground text-2xl font-bold">Sai Kumar</h3>
                <p className="text-primary text-sm uppercase tracking-widest mt-1">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="heading-lg text-dark-surface-foreground mb-6">
              "I started SS Films with one belief — AI isn't replacing creativity, it's unleashing it."
            </h2>
            <p className="text-body text-dark-surface-foreground/60 text-base md:text-lg leading-relaxed mb-6">
              With a background in filmmaking and a deep passion for artificial intelligence, our founder saw the gap between traditional ad production and the future of visual storytelling. SS Films was born to bridge that gap — delivering cinematic-quality ad films at the speed of thought.
            </p>
            <p className="text-body text-dark-surface-foreground/40 text-sm uppercase tracking-widest">
              Hyderabad, India
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="heading-lg text-dark-surface-foreground mb-4">Our Team</h2>
          <p className="text-body text-dark-surface-foreground/50 max-w-lg">
            A lean crew of strategists, AI artists, and storytellers building the future of ad films.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="group relative"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  width={512}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-70" />
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-dark-surface-foreground font-bold text-sm md:text-base">{member.name}</h4>
                <p className="text-primary/80 text-xs uppercase tracking-widest mt-0.5">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
