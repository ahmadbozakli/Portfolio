"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/10 border-t border-white/10 py-8 px-6 text-gray-400 text-sm mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <div className="text-center md:text-left">
          <p>
            © 2025 <span className="text-white font-semibold">Norifolio</span>.
            All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <Link
            href="https://github.com/ahmadbozakli"
            target="_blank"
            className="hover:text-white hover:drop-shadow-glow transition"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahmad-bozakli-a53038367/"
            target="_blank"
            className="hover:text-white hover:drop-shadow-glow transition"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="/privacy"
            className="hover:text-accent hover:drop-shadow-glow transition"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
