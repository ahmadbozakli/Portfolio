"use client";

import type { Experience as ExperienceType } from "@/types";
import { ExperienceItem } from "@/components/ExperienceItem";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const experienceData: ExperienceType[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer – Booky Project",
    company: "Freelancer (Remote)",
    duration: "Apr 2025 – May 2025",
    responsibilities: [
      "Led development of Booky, a full-stack web app for book browsing and recommendation.",
      "Implemented smart content-based recommendation system using OpenAI embeddings.",
      "Built frontend with React, Next.js, and Tailwind CSS focusing on responsive design and accessibility.",
      "Integrated secure authentication via NextAuth (Google and credentials).",
      "Managed backend with Prisma and Supabase, ensuring optimized performance and real-time interaction.",
      "Handled deployment on Vercel and maintained version control with Git and GitHub.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    logoHint: "book app project",
  },
  {
    id: "edu-1",
    role: "B.Sc. in Information Technology Engineering",
    company: "University of Kalamoon",
    duration: "2019 – 2023",
    responsibilities: [
      "Graduated with a GPA of 2.75 / 4.",
      "Completed coursework in web development, software engineering, and database systems.",
      "Built multiple academic projects including a capstone web application.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    logoHint: "university logo",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 text-white bg-gradient-to-t from-black/5 via-[#000000]/15 to-black/30"
    >
      <h2 className="text-4xl font-bold text-center mb-20 relative z-10">
        Professional Experience
        <div className="h-1 w-28 bg-accent mx-auto rounded-full mt-2.5" />
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 z-0" />

        {experienceData.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative w-full flex flex-col md:flex-row items-center mb-20 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Marker (fixed position per item) */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-black flex items-center justify-center">
                  {exp.id.startsWith("edu") && (
                    <GraduationCap className="h-3 w-3 text-accent" />
                  )}
                </div>

                {/* Arrow */}
                <div
                  className={`hidden bg-accent w-2 h-2 rotate-45 absolute top-full mt-1 ${
                    isLeft ? "ml-[2px]" : "-ml-[10px]"
                  }`}
                />
              </div>

              {/* Card */}
              <motion.div
                className={`w-full md:w-1/2 px-4 ${
                  isLeft ? "md:pl-12" : "md:pr-12"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ExperienceItem experience={exp} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
