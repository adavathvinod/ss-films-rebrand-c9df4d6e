import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const ShowreelSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Scanline Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground) / 0.1) 2px, hsl(var(--foreground) / 0.1) 4px)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary font-medium mb-6"
        >
          Showreel 2025
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="heading-xl text-primary-foreground mb-8"
        >
          OUR WORK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-body text-primary-foreground/70 max-w-md text-sm md:text-base"
        >
          Bold ideas. AI-crafted films. Stories that move.
        </motion.p>
      </motion.div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 border border-primary-foreground/20 rounded-full text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors backdrop-blur-sm"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </section>
  );
};

export default ShowreelSection;
