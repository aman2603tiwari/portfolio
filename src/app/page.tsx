"use client";

import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorGlow } from "@/components/cursor-glow";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Projects } from "@/sections/projects";
import { Experience } from "@/sections/experience";
import { Awards } from "@/sections/awards";
import { Skills } from "@/sections/skills";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
