"use client";

import { useEffect, useState } from "react";
import { Sparkles, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// ✅ Counter component
function Counter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 2000;
    const steps = 100;
    const stepTime = Math.floor(duration / steps);
    const stepValue = target / steps;

    const interval = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-center"
    >
      <p className="text-3xl font-bold text-white">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </motion.div>
  );
}

// ✅ Social link
function Social({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-accent transition"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="sr-only">{label}</span>
      </div>
    </Link>
  );
}

// ✅ Main About Section with Framer Motion
export function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Figma",
    "UI/UX",
    "Zustand",
    "Shadcn UI",
  ];

  return (
    <motion.section
      id="about"
      className="py-20 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.div className="max-w-4xl mx-auto px-4 text-center space-y-12">
        {/* Title */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold inline-flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8 text-accent" />
            About Me
          </h2>
          <div className="mt-2 h-1 w-24 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-lg text-gray-400 space-y-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>
            I'm a passionate full-stack developer who crafts responsive,
            interactive web apps using modern tools like Next.js, Tailwind CSS,
            and more.
          </p>
          <p>
            Outside of coding, I explore new technologies, improve UI/UX, and
            sometimes tweak pixels for fun. Always curious. Always learning.
          </p>
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <Counter target={3} suffix="+" label="Projects Completed" />
          <Counter target={1} suffix="+ yrs" label="Experience" />
          <Counter target={15} suffix="+" label="Technologies Mastered" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
