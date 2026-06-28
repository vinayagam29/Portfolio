import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function InteractiveHeading({ mouseX, mouseY }) {
  const headingRef = useRef(null);

  // Local cursor position inside the heading
  const localX = useMotionValue(-300);
  const localY = useMotionValue(-300);

  useEffect(() => {
    if (!mouseX || !mouseY) return;

    const unsubX = mouseX.on("change", (x) => {
      if (!headingRef.current) return;

      const section = headingRef.current.closest("section");
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const headingRect = headingRef.current.getBoundingClientRect();

      localX.set(x - (headingRect.left - sectionRect.left));
    });

    const unsubY = mouseY.on("change", (y) => {
      if (!headingRef.current) return;

      const section = headingRef.current.closest("section");
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const headingRect = headingRef.current.getBoundingClientRect();

      localY.set(y - (headingRect.top - sectionRect.top));
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY]);

  // Smooth cursor
  const smoothX = useSpring(localX, {
    stiffness: 180,
    damping: 24,
  });

  const smoothY = useSpring(localY, {
    stiffness: 180,
    damping: 24,
  });

  // Floating movement
  const moveX = useTransform(smoothX, [-350, 350], [-10, 10]);
  const moveY = useTransform(smoothY, [-220, 220], [-8, 8]);

  // Tilt
  const rotateY = useTransform(smoothX, [-350, 350], [-3, 3]);
  const rotateX = useTransform(smoothY, [-220, 220], [3, -3]);

  // Spotlight reveal
  const mask = useMotionTemplate`
    radial-gradient(
      circle 170px at ${smoothX}px ${smoothY}px,
      white 0%,
      white 35%,
      rgba(255,255,255,.85) 65%,
      transparent 100%
    )
  `;

  return (
    <motion.div
      style={{
        x: moveX,
        y: moveY,
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className="relative inline-block select-none cursor-default"
    >
    <div
      ref={headingRef}
      className="relative inline-block leading-none"
    >
      {/* Base Text */}
      <h1 className="interactive-heading relative z-10 text-white/60">
        I DESIGN &
        <br />
        BUILD MODERN
        <br />
        WEB EXPERIENCES
      </h1>

      {/* Chrome Text */}
        <motion.h1
          aria-hidden="true"
          className="interactive-heading absolute inset-0 z-20 chrome-text pointer-events-none"
          style={{
            WebkitMaskImage: mask,
            maskImage: mask,
          }}
        >
        I DESIGN &
        <br />
        BUILD MODERN
        <br />
        WEB EXPERIENCES
      </motion.h1>
    </div>      
    </motion.div>
  );
}