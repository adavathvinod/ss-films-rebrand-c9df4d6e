import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import footerArt from "@/assets/footer-art.png";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" ref={ref} className="section-dark py-16 md:py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background Art Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerArt}
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/90 to-dark-surface/60" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-md"
          >
            <p className="text-body text-dark-surface-foreground font-semibold text-lg md:text-xl leading-relaxed">
              We want to make important work, have a vision, and see it through.
            </p>
            <a
              href="mailto:hello@ssfilms.com"
              className="inline-flex items-center gap-2 border border-dark-surface-foreground px-6 py-3 mt-8 uppercase tracking-widest text-sm font-medium text-dark-surface-foreground hover:bg-dark-surface-foreground hover:text-dark-surface transition-all duration-300"
            >
              Let's Create Together
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="flex flex-col gap-2">
              {["Work", "Services", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-dark-surface-foreground text-2xl md:text-3xl font-bold hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <div className="space-y-6">
              <div>
                <span className="text-dark-surface-foreground/60 text-sm">Business Enquiries</span>
                <a
                  href="mailto:hello@ssfilms.com"
                  className="block text-dark-surface-foreground text-lg md:text-xl font-semibold mt-1 hover:text-primary transition-colors"
                >
                  hello@ssfilms.com
                </a>
              </div>
              <div>
                <span className="text-dark-surface-foreground/60 text-sm">Work with us</span>
                <a
                  href="mailto:hello@ssfilms.com"
                  className="block text-dark-surface-foreground text-lg md:text-xl font-semibold mt-1 hover:text-primary transition-colors"
                >
                  hello@ssfilms.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Giant logo watermark */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 0.15, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="heading-display text-primary leading-none"
          style={{ fontSize: "clamp(6rem, 25vw, 20rem)" }}
        >
          SS FILMS
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-6 border-t border-dark-surface-foreground/10 text-dark-surface-foreground/40 text-xs uppercase tracking-widest">
          <span>© SS FILMS 2025 · ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-dark-surface-foreground/80 transition-colors">Terms</span>
            <span>·</span>
            <span className="cursor-pointer hover:text-dark-surface-foreground/80 transition-colors">Privacy</span>
            <span className="ml-8 cursor-pointer hover:text-dark-surface-foreground/80 transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
