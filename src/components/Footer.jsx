import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="px-6 py-12 bg-black relative text-white">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Vinayagam
            </h2>

            <p className="text-sm text-neutral-500 mt-1">
              Frontend Developer
            </p>
          </div>


          {/* Links */}
          <div className="flex gap-6 text-sm text-neutral-400">

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Resume
            </a>

          </div>


          {/* Back top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3 text-neutral-400 hover:text-white transition"
          >
            <span className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-xl group-hover:-translate-y-1 transition">
              ↑
            </span>

            <span className="text-sm uppercase tracking-widest">
              Back to top
            </span>
          </button>

        </div>


        <p className="text-xs text-neutral-600 mt-8 text-center">
          © 2026 Vinayagam. Built with React & Tailwind.
        </p>


      </motion.div>

    </footer>  )
}

export default Footer