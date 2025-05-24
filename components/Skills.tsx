"use client";

import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Database,
  Settings,
  BrainCog,
  UserCheck,
  Box,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: <Monitor className="text-accent w-5 h-5" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "Model Viewer",
      "3D Web",
    ],
  },
  {
    title: "Backend",
    icon: <Code className="text-accent w-5 h-5" />,
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Python",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-accent w-5 h-5" />,
    skills: [
      "PostgreSQL",
      "SQLite",
      "Firebase",
      "Supabase",
      "Prisma",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCog className="text-accent w-5 h-5" />,
    skills: [
      "VGG16",
      "Transfer Learning",
      "Image Recognition",
      "Data Processing",
    ],
  },
  {
    title: "Development Tools",
    icon: <Settings className="text-accent w-5 h-5" />,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "VS Code",
      "Google Colab",
      "Project Documentation",
    ],
  },
  {
    title: "Soft Skills",
    icon: <UserCheck className="text-accent w-5 h-5" />,
    skills: [
      "Communication",
      "Team Leadership",
      "Problem Solving",
      "Attention to Detail",
      "Fast Learner",
    ],
  },
];


export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black/5 via-[#000000]/15 to-black/30 text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-accent">Skill Set</span>
        </h2>
        <div className="h-1 w-28 bg-accent mx-auto rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-accent/30 transition"
          >
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-white">
              {cat.icon}
              <span>{cat.title}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-white hover:bg-accent hover:text-black transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
