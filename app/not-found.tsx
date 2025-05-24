// app/not-found.tsx
"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl flex flex-col items-center gap-6"
      >
        <Ghost className="h-16 w-16 text-accent" />
        <h1 className="text-4xl sm:text-5xl font-bold">
          Oops! This Page Went <span className="text-accent">Missing</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Either the page is lost in the multiverse, or it never existed. <br />
          Our dev avatar is still debugging...
        </p>

        <Link
          href="/"
          className="mt-4 inline-block bg-accent text-black font-medium px-6 py-2 rounded-full hover:bg-accent/80 transition"
        >
          Back to safety
        </Link>

        <p className="text-sm text-gray-600 mt-6">
          Error 404 – Page not found. But hey, at least you found me.
        </p>
      </motion.div>
    </section>
  );
}
