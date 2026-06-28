import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/kv-png.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll || currentScroll < 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setOpen(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);


  const links = [
    "HOME",
    "ABOUT",
    "PROJECTS",
    "RESUME"
  ];


  const navAnimation = `
    transition-all
    duration-300
    ${
      showNav
        ? "translate-y-0 opacity-100"
        : "-translate-y-12 opacity-0"
    }
  `;


  return (
    <>


      {/* DESKTOP LOGO */}

      <div
        className={`
          hidden md:flex
          fixed
          top-6
          left-8
          z-50
          ${navAnimation}
        `}
      >

        <div
          className="
            p-2.5
            rounded-full
            bg-black/60
            backdrop-blur-xl
            border
            border-white/30
            shadow-xl
          "
        >

          <img
            src={logo}
            alt="KV Logo"
            className="
              w-11
              h-11
              object-contain
              drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]
            "
          />

        </div>

      </div>




      {/* DESKTOP NAV */}

      <nav
        className={`
          hidden md:flex
          fixed
          top-6
          right-8
          z-50
          ${navAnimation}
        `}
      >

        <div
          className="
            flex
            items-center
            gap-9
            px-6
            py-3
            rounded-full
            bg-black/40
            backdrop-blur-md
            border
            border-white/20
            text-white
            text-sm
          "
        >

          {links.map((link) => (

            <a
              key={link}
              className="
                relative
                group
                cursor-pointer
              "
            >

              {link}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  w-0
                  h-px
                  bg-white
                  transition-all
                  group-hover:w-full
                "
              />

            </a>

          ))}


          <a
            className="
              bg-white
              text-black
              px-5
              py-2
              rounded-full
              cursor-pointer
            "
          >
            CONTACT
          </a>

        </div>

      </nav>





      {/* MOBILE NAV */}

      <nav
        ref={menuRef}
        className={`
          md:hidden
          fixed
          top-5
          left-5
          right-5
          z-50
          ${navAnimation}
        `}
      >

        <div
          className="
            flex
            justify-between
            items-center
            px-4
            py-3
            rounded-full
            bg-black/40
            backdrop-blur-xl
            border
            border-white/20
            shadow-lg
          "
        >

          {/* LOGO */}

          <div
            className="
              p-1.5
              rounded-full
              bg-black/70
              backdrop-blur-xl
              border
              border-white/20
            "
          >

            <img
              src={logo}
              alt="KV Logo"
              className="
                w-9
                h-9
                object-contain
                drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]
              "
            />

          </div>




          {/* MENU BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              flex-col
              gap-1.5
              p-2
              rounded-full
              hover:bg-white/10
            "
          >

            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />

          </button>


        </div>




        <AnimatePresence>

          {open && (

            <motion.div
              initial={{
                opacity:0,
                y:-15
              }}

              animate={{
                opacity:1,
                y:0
              }}

              exit={{
                opacity:0,
                y:-15
              }}

              className="
                mt-4
                p-6
                rounded-2xl
                bg-black/70
                backdrop-blur-xl
                border
                border-white/20
                shadow-xl
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-6
                  text-white
                "
              >

                {links.map((link) => (

                  <a
                    key={link}
                    onClick={() => setOpen(false)}
                    className="
                      cursor-pointer
                      text-sm
                      tracking-wide
                    "
                  >
                    {link}
                  </a>

                ))}


                <a
                  className="
                    bg-white
                    text-black
                    text-center
                    py-3
                    rounded-full
                  "
                >
                  CONTACT
                </a>


              </div>


            </motion.div>

          )}

        </AnimatePresence>


      </nav>


    </>
  );
};

export default Navbar;