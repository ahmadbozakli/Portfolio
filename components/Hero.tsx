"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Avatar Emoji or Icon */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        ></motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 border border-white/20"
        >
          <span className="inline-block h-2 w-2 bg-green-400 rounded-full mr-2" />
          Available for new projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-3xl"
        >
          FullStack Devolper
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-400 max-w-xl text-sm sm:text-base md:text-lg"
        >
          I specialize in transforming designs into functional, high-performing
          web applications. Let’s discuss your next project.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          {/* Replaced Next.js Link component with a standard <a> tag */}
          <a
            href="#projects"
            className="px-6 py-2 text-sm font-medium text-black bg-accent hover:bg-accent/90 transition rounded-full"
          >
            Explore My Work
          </a>
          {/* Replaced Next.js Link component with a standard <a> tag */}
          <a
            href="#contact"
            className="px-6 py-2 text-sm font-medium border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            👋 Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
