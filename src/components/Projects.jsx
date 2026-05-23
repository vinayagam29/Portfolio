import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(null);

  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });

  // scroll-based animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const radius = useTransform(scrollYProgress, [0.9, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0.9, 1], [0.98, 1]);

  const shadowOpacity = useTransform(scrollYProgress, [0.9, 1], [0.4, 0.2]);

  return (
    <motion.section
      ref={ref}
      initial={{ y: 120, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        scale,
      }}      
      className="bg-neutral-950 relative min-h-screen z-20"
    >
        <p className="text-white flex justify-center text-5xl bebas-neue-regular pt-8 tracking-wider">projects</p>

        <div className="flex justify-center items-center h-screen px-10">
        {/* left */}
        <div className="text-white w-60% ">
          <p className="bebas-neue-regular text-5xl border-b-2 border-white/60 w-full pb-4">portfolio website</p>
          <p className="font-semibold text-xl py-4">personal porfolio built with react and tailwind css and framermotion</p>
          <div className="flex gap-4 py-4">
            <p className="bg-linear-to-r from-gray-500 to-white/80 text-black bebas-neue-regular text-center rounded-2xl px-4 pt-1">react</p>
            <p className="bg-linear-to-r from-gray-500 to-white/80 text-black bebas-neue-regular text-center rounded-2xl px-4 pt-1">tailwind css</p>
            <p className="bg-linear-to-r from-gray-500 to-white/80 text-black bebas-neue-regular text-center rounded-2xl px-4 pt-1">framer motion</p>
          </div>
          <div className="py-4">
          <button
          onMouseEnter={() => setActive("work")}
          onMouseLeave={() => setActive(null)}
          className={`
            lg:px-8 px-4 md:py-2 md:text-base text-sm py-1 rounded-lg mr-6 font-semibold border-2 transition-all duration-300 active:scale-95
            ${
              active === "work"
                ? "bg-white/70 text-black  scale-105 shadow-md" 
                : active === "contact"
                ? "bg-white text-black border-black"
                : "bg-white text-black border-black" 
            }
          `}>
          live demo
        </button>            
        <button
         onMouseEnter={() => setActive("contact")}
          onMouseLeave={() => setActive(null)}
          className={`
            md:px-8 px-6 md:py-2 py-0 md:text-base text-[12px] rounded-lg md:font-semibold font-normal border-2 transition-all duration-300 active:scale-100
            ${
              active === "contact"
                ? "bg-white/70 text-black border-black scale-105 shadow-md" 
                : active === "work"
                ? "bg-white text-black border-black" 
                : "bg-white/70 text-black border-black" 
            }
          `}>
            view code
            </button>
          </div>
        </div>

        {/* right */}
        <div className="w-50% ">
          <img className="w-140 h-90" src="src/assets/portfolio-preview.png" alt="" />
        </div>
        </div>
    </motion.section>
  );
};

export default Projects;