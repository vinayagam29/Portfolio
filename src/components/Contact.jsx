import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
     <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24 relative bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          Let's build
          <br />
          something together.
        </h2>

        <p className="mt-8 text-neutral-400 max-w-xl mx-auto text-lg">
          I'm open to frontend opportunities, collaborations, and interesting
          projects. Feel free to reach out.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="mailto:vinayagam2559@gmail.com"
            className="px-8 py-4 rounded-full border scale-90 border-neutral-700 hover:border-2 hover:text-black hover:scale-100 transition"
          >
            Email Me
          </a>

          <a
            href="www.linkedin.com/in/karpagavinayagam029"
            className="px-8 py-4 rounded-full border scale-90 border-neutral-700 hover:border-2 hover:text-black hover:scale-100 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-8 py-4 rounded-full border scale-90 border-neutral-700 hover:border-2 hover:text-black hover:scale-100 transition"
          >
            GitHub
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-8 py-4 rounded-full border scale-90 border-neutral-700 hover:border-2 hover:text-black hover:scale-100 transition"
          >
            Resume
          </a>

        </div>


        <div className="mt-16 text-sm text-neutral-500">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>

      </motion.div>
    </section>
  )
}

export default Contact