import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import popup1 from "@/assets/hero popup images/AI-generated_ads_clothing_202604121443.jpeg";
import popup2 from "@/assets/hero popup images/AI-generated_ads_clothing_202604121443 (1).jpeg";
import popup3 from "@/assets/hero popup images/AI-Generated_Ads_Commercials_202604121444.jpeg";
import popup4 from "@/assets/hero popup images/AI-Generated_Ads_Commercials_202604121444 (1).jpeg";
import popup5 from "@/assets/hero popup images/AI-Generated_Ads_Commercials_202604121446.jpeg";
import popup6 from "@/assets/hero popup images/AI-generated_ads_commercials_202604121451.jpeg";
import popup7 from "@/assets/hero popup images/AI-generated_ads_cool_202604121446.jpeg";
import popup8 from "@/assets/hero popup images/AI-Generated_Ads_Fruity_202604121445.jpeg";
import popup9 from "@/assets/hero popup images/AI-generated_car_commercials_202604121446.jpeg";
import popup10 from "@/assets/hero popup images/AI-generated_perfume_commercials_202604121442.jpeg";

interface FloatingImage {
  id: string;
  x: number;
  y: number;
  src: string;
  rotation: number;
  scale: number;
  createdAt: number;
}

const IMAGES = [
  popup1,
  popup2,
  popup3,
  popup4,
  popup5,
  popup6,
  popup7,
  popup8,
  popup9,
  popup10,
];
const IMAGE_LIFETIME = 5000; // 5 seconds
const SPAWN_CHANCE = 0.24; // 24% chance per mousemove
const MIN_OFFSET = 80; // keep popups close to cursor center
const MAX_OFFSET = 180; // moderate spread around cursor
const MAX_IMAGES = 9;
const SPAWN_COOLDOWN_MS = 40;

const FloatingImages = ({
  isActive,
  areaRef,
}: {
  isActive: boolean;
  areaRef: RefObject<HTMLElement>;
}) => {
  const [images, setImages] = useState<FloatingImage[]>([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    if (!isActive) {
      // Clear any leftovers immediately when hero is not active.
      setImages([]);
    }
  }, [isActive]);

  useEffect(() => {
    const areaEl = areaRef.current;
    if (!isActive || !areaEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < SPAWN_COOLDOWN_MS) return;

      // Random chance to spawn an image
      if (Math.random() > SPAWN_CHANCE) return;

      const randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = MIN_OFFSET + Math.random() * (MAX_OFFSET - MIN_OFFSET);
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;
      const rotation = (Math.random() - 0.5) * 30;
      const scale = 0.6 + Math.random() * 0.5;

      const newImage: FloatingImage = {
        id: `${Date.now()}-${Math.random()}`,
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        src: randomImage,
        rotation,
        scale,
        createdAt: Date.now(),
      };

      lastSpawnRef.current = now;
      setImages((prev) => [...prev, newImage].slice(-MAX_IMAGES));
    };

    areaEl.addEventListener("mousemove", handleMouseMove);

    // Cleanup loop: remove images after their lifetime expires
    const cleanupInterval = setInterval(() => {
      setImages((prev) =>
        prev.filter((img) => Date.now() - img.createdAt < IMAGE_LIFETIME)
      );
    }, 200);

    return () => {
      areaEl.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, [areaRef, isActive]);

  return (
    <AnimatePresence>
      {images.map((img) => (
        <motion.div
          key={img.id}
          initial={{
            x: img.x,
            y: img.y,
            opacity: 0,
            scale: 0,
            rotate: img.rotation - 15,
          }}
          animate={{
            opacity: 1,
            scale: img.scale,
            rotate: img.rotation,
            y: img.y - 40,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            rotate: img.rotation + 15,
            y: img.y + 40,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
            duration: 0.6,
          }}
          className="fixed pointer-events-none z-20 will-change-transform"
          style={{
            left: 0,
            top: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.img
            src={img.src}
            alt=""
            className="w-28 md:w-[150px] h-auto object-cover rounded-[5px] shadow-xl"
            style={{
              aspectRatio: "3/4",
            }}
            animate={{
              filter: [
                "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2))",
                "drop-shadow(0 12px 20px rgba(0, 0, 0, 0.25))",
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default FloatingImages;
