import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { AboutMe } from "@/components/Aboutme";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { ContactMe } from "@/components/ContactMe";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </section>
  );
}
