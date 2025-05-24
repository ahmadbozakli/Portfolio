// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/10 border border-white/20"
        >
          <span className="inline-block h-2 w-2 bg-green-400 rounded-full mr-2" />
          Open for projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tight"
        >
          Full Stack <br />
          Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-muted-foreground max-w-xl text-sm md:text-base"
        >
          Building web apps that load fast, look stunning,
          <br />
          and feel like magic — powered by Next.js, Tailwind, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
     <Link href="#projects" data-cursor="View"

            className="inline-block mt-4 px-6 py-2 text-sm font-medium text-black bg-accent hover:bg-accent/80 transition rounded-full"
          >
            View Projects
          </Link>
          <button data-cursor="Play">Start</button>

        </motion.div>
      </div>
    </section>
  );
}
