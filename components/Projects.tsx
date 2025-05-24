"use client";

import Image from "next/image";
import { CodeXml } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Booky - Smart Library System",
    description:
      "A modern library management platform with real-time book search, borrowing system, authentication, admin panel, recommendations, and responsive UI. Built using Next.js, Tailwind CSS, Prisma, PostgreSQL, and Supabase for realtime features.",
    image: "https://ik.imagekit.io/xt6hfeibgz/nrotfilio/bg.png",
    imageHint: "Library system dashboard and book list preview",
    live: "https://booky-amber.vercel.app/",
    github: "https://github.com/your-username/booky",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "NextAuth",
      "React",
      "Shadcn UI",
      "Open AI",
    ],
  },
  {
    title: "Furniture AR Store",
    description:
      "An immersive cross-platform furniture shopping experience that allows users to preview 3D products in their real space using Augmented Reality. Features real-time product management, authentication, admin panel, secure checkout with Stripe, and responsive web UI built with modern web technologies.",
    image: "https://ik.imagekit.io/xt6hfeibgz/furniterBG.png",
    imageHint: "AR-based furniture store with 3D preview and checkout",
    live: "#",
    github: "#",
    tags: [
      "Firebase",
      "JavaScript",
      "HTML",
      "CSS",
      "ARCore",
      "Node.js",
      "Express.js",
      "3D",
      "Stripe",
      "Bootstrap",
      "Augmented Reality",
    ],
  },
  {
    title: "Planto - Smart Plant Identifier",
    description:
      "A web-based plant diagnosis system that allows users to identify plant types and health conditions by name or image. Built using Django, Python, VGG16, and SQLite. It aims to help non-experts take better care of their plants through deep learning and image recognition.",
    image: "https://ik.imagekit.io/xt6hfeibgz/planto.png",
    imageHint: "Plant diagnosis app with image recognition UI",
    live: "#",
    github: "#",
    tags: [
      "Python",
      "Django",
      "VGG16",
      "Transfer Learning",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQLite",
      "Image Recognition",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 mx-10">
      <div className="text-center mb-16 md:mb-20">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="p-3 bg-white/5 border border-white/10 rounded-full shadow-inner backdrop-blur">
            <CodeXml className="h-5 w-5 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-2xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        <div className="w-40  h-[2px] bg-gray-400/50 mx-auto mb-4 rounded-full" />

        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          A showcase of my recent work and side projects
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
      >
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className={`group flex flex-col overflow-hidden backdrop-blur-sm bg-black/40 border border-gray-800/50 hover:border-gray-700/80 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 rounded-2xl ${
              index === 0 ? "md:col-span-2 xl:col-span-1" : ""
            }`}
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-4 right-4 z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>
            </div>

            <CardHeader className="pb-4 pt-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400 text-base leading-relaxed min-h-[3.5rem]">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow pb-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className={`px-3 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300 rounded-full ${
                      tagIndex < 3 ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            {/* <CardFooter className="flex gap-3 pt-4 pb-6 px-6 border-t border-gray-800/30">
              <Button
                asChild
                size="sm"
                className="flex-1 bg-gray-800/80 hover:bg-gray-700/90 text-white border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 rounded-lg"
              >
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent hover:bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-gray-600/70 hover:text-white transition-all duration-300 rounded-lg"
              >
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </CardFooter> */}
          </Card>
        ))}
      </motion.div>
      {/* 
      <div className="text-center mt-16">
        <Button
          asChild
          size="lg"
          className="bg-gray-800/80 hover:bg-gray-700/90 text-white border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 rounded-xl px-8 py-3"
        >
          <Link href="/projects">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div> */}
    </section>
  );
}
