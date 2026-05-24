"use client";

import { motion } from "framer-motion";
import { FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Gradient Background */}
      <div className="gradient-bg">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-grid" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* Name */}
        <motion.h1
          variants={item}
          className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="block text-foreground">AMAN</span>
          <span className="block gradient-text mt-1 sm:mt-2">TIWARI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-4 text-base font-medium tracking-wide text-foreground-muted sm:mt-6 sm:text-lg md:text-xl"
        >
          AI/ML{" "}
          <span className="text-accent-blue">•</span> Robotics{" "}
          <span className="text-accent-cyan">•</span> Computer Vision
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground-dim sm:mt-6 sm:max-w-2xl sm:text-base md:text-lg"
        >
          Building intelligent systems at the intersection of AI, robotics, and
          embedded engineering. Passionate about pushing the boundaries of what
          machines can perceive, decide, and do.
        </motion.p>

        {/* Highlights */}
        <motion.div variants={item} className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* IIT Roorkee Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pl-2 pr-4 backdrop-blur-md transition-all hover:bg-white/10">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-blue/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue z-10"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <span className="text-sm font-semibold tracking-wide text-foreground">
              B.Tech @ <span className="text-accent-blue">IIT Roorkee</span>
            </span>
          </div>

          {/* JEE Rank Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-md transition-colors hover:bg-white/10">
            <div className="flex items-center justify-center text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-left">
              <span className="text-sm font-semibold text-foreground tracking-tight">AIR-797 in JEE Advanced</span>
              <span className="hidden sm:inline text-foreground-dim text-xs">•</span>
              <span className="text-xs font-medium text-foreground-dim">AIR-640 (99.95%ile) in JEE Mains</span>
            </div>
          </div>

          {/* Research Publication Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-md transition-colors hover:bg-white/10">
            <div className="flex items-center justify-center text-accent-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-left">
              <span className="text-sm font-semibold text-foreground tracking-tight">IEEE ANTS 2025</span>
              <span className="hidden sm:inline text-foreground-dim text-xs">•</span>
              <span className="text-xs font-medium text-foreground-dim">Research Publication</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
        >
          <a
            href="https://github.com/aman2603tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-glass-border bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:scale-105 sm:w-auto"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-glass-border bg-accent-blue/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent-blue/10 hover:border-accent-blue/30 hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/10 sm:w-auto"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/aman-tiwari-027b9128b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/5 hover:scale-105 sm:w-auto"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={item} className="mt-16 sm:mt-20">
          <motion.button
            onClick={() => {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            className="text-foreground-dim transition-colors hover:text-accent-blue"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
