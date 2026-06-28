import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import InteractiveHeading from "../components/InteractiveHeading";

function About() {
  const sectionRef = useRef(null);

  // Mouse position for the whole section
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-300);
    mouseY.set(-300);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-neutral-950 text-white py-32 px-5 md:px-10 relative"
    >
      {/* Section Label */}
      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-white/40">
          About
        </p>
      </div>

      <div className="flex md:flex-row flex-col flex-wrap gap-20 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <InteractiveHeading
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-xl "
        >
          <p className="text-white/70 text-lg leading-relaxed">
            I'm Vinayagam, a frontend developer passionate about creating
            modern, responsive websites with thoughtful design, smooth
            interactions, and clean, maintainable code.
          </p>

          <p className="text-white/70 text-lg leading-relaxed mt-6">
            I enjoy transforming ideas into polished digital experiences
            using React, Tailwind CSS, and Framer Motion, while continually
            refining both my design sense and development workflow.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Framer Motion",
              "Git",
              "Responsive Design",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  text-white/80
                  text-sm
                  hover:bg-white/10
                  hover:border-white/30
                  transition-colors
                "
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;