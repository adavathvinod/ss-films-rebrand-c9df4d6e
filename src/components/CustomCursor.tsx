import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom magnetic cursor: a small dot (tight spring) + a lagging ring.
 * Renders only on pointer-fine (non-touch) devices.
 * Enlarges ring on interactive elements (a, button, input, label…).
 */
const CustomCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  // Dot — tight spring for precise tracking
  const dotX = useSpring(cursorX, { damping: 35, stiffness: 900, mass: 0.3 });
  const dotY = useSpring(cursorY, { damping: 35, stiffness: 900, mass: 0.3 });

  // Ring — looser spring for satisfying lag
  const ringX = useSpring(cursorX, { damping: 28, stiffness: 200, mass: 0.8 });
  const ringY = useSpring(cursorY, { damping: 28, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest(
          "a, button, [role='button'], input, label, select, textarea, [data-cursor-pointer]"
        )
      );
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Always call all hooks above before any conditional return
  if (isTouchDevice) return null;

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border border-foreground/25"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: isPointer ? 46 : 30,
          height: isPointer ? 46 : 30,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          width: 5,
          height: 5,
          backgroundColor: "hsl(var(--primary))",
        }}
      />
    </>
  );
};

export default CustomCursor;
