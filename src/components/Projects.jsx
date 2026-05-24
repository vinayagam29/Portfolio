import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import portfoliof from "../assets/prj-1.png";
import macbook from "../assets/macbook-frame.png";
import realestate from "../assets/prj-2.png";

const Projects = () => {
  const [active, setActive] = useState(null);

  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const radius = useTransform(scrollYProgress, [0.9, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0.9, 1], [0.98, 1]);

  const projectsData = [
  {
    title: "PORTFOLIO WEBSITE",
    description:
      "Minimal personal portfolio focused on typography, motion, and clean interactions.",
    tech: ["REACT", "TAILWIND CSS", "FRAMER MOTION"],
    image: portfoliof,
    live: "#",
    github: "#",
  },

  {
    title: "REAL ESTATE WEBSITE",
    description:
      "Modern responsive real estate landing page with clean layouts and smooth animations.",
    tech: ["REACT", "TAILWIND CSS"],
    image: realestate,
    live: "#",
    github: "#",
  },

  {
    title: "REAL ESTATE WEBSITE",
    description:
      "Modern responsive real estate landing page with clean layouts and smooth animations.",
    tech: ["REACT", "TAILWIND CSS"],
    image: realestate,
    live: "#",
    github: "#",
  },
];

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
      className="bg-neutral-950 relative z-20"
    >
      {/* SECTION TITLE */}
      <p className="text-white flex justify-center text-5xl bebas-neue-regular pt-12 pb-30 tracking-[0.2em]">
        PROJECTS
      </p>

      {/* CONTENT */}
      <div className="flex flex-col ">

        {projectsData.map((project, index) => (

          <div
            key={index}
            className={`
              flex
              md:flex-row
              flex-col
              items-center
              justify-center
              lg:gap-20 md:gap-10 gap-0
              md:px-10 px-8
              py-10
              lg:border-0
              border-b
              border-gray-300
              ${index % 2 !== 0 ? "md:flex-row-reverse flex-col" : ""}
            `}
          >

            {/* TEXT SIDE */}
            <div className="text-white md:w-[50%] w-full ">

              <p
                className="
                  bebas-neue-regular
                  lg:text-6xl md:text-4xl text-4xl 
                  md:text-start text-center
                  tracking-wide
                  border-b
                  border-white/20
                  w-full
                  pb-6
                "
              >
                {project.title}
              </p>

              <p
                className="
                  text-white/70
                  md:text-lg
                  text-sm
                  leading-relaxed
                  py-6
                  md:max-w-150
                  w-full
                "
              >
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex gap-4 py-4 flex-wrap">

                {project.tech.map((item, i) => (
                  <p
                    key={i}
                    className="
                      bg-white/10
                      border
                      border-white/10
                      text-white/80
                      bebas-neue-regular
                      rounded-2xl
                      px-4
                      py-1
                      tracking-wide
                    "
                  >
                    {item}
                  </p>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="py-8 flex items-center gap-4">

                <button
                  onMouseEnter={() => setActive(`work-${index}`)}
                  onMouseLeave={() => setActive(null)}
                  className={`
                    px-8 py-3 rounded-xl font-semibold
                    transition-all duration-300 border

                    ${
                      active === `work-${index}`
                        ? "bg-white text-black border-white scale-[1.03]"
                        : active === `contact-${index}`
                        ? "bg-transparent text-white/70 border-white/30"
                        : "bg-white text-black border-white"
                    }
                  `}
                >
                  Live Demo
                </button>

                <button
                  onMouseEnter={() => setActive(`contact-${index}`)}
                  onMouseLeave={() => setActive(null)}
                  className={`
                    px-8 py-3 rounded-xl font-semibold
                    transition-all duration-300 border

                    ${
                      active === `contact-${index}`
                        ? "bg-white text-black border-white scale-[1.03]"
                        : active === `work-${index}`
                        ? "bg-transparent text-white/70 border-white/30"
                        : "bg-transparent text-white/70 border-white/30"
                    }
                  `}
                >
                  View Code
                </button>

              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="md:w-[50%] w-full flex justify-center">

              <div
                className="
                  relative
                  w-[90%]
                  max-w-200
                  transition-all
                  ease-in-out
                  duration-500
                  lg:scale-95
                  md:scale-105
                  hover:scale-100
                "
              >

                <img
                  src={project.image}
                  alt=""
                  className="
                    absolute
                    top-[20%]
                    left-[15%]
                    w-[70%]
                    md:h-[42%]
                    h-40
                    object-fit
                    rounded-md
                  "
                />

                <img
                  src={macbook}
                  alt=""
                  className="relative z-10 w-full h-auto "
                />

              </div>

            </div>

          </div>
        ))}

      </div>    
      </motion.section>
  );
};

export default Projects;