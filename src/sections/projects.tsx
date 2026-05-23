"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { projects, Project } from "@/data/projects";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/icons";

function ProjectCard({ project, index, showAll }: { project: Project, index: number, showAll: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: showAll ? index * 0.05 : index * 0.1 }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        project.highlight 
          ? "bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/30 shadow-amber-500/5 hover:border-amber-500/50 hover:shadow-amber-500/10" 
          : "glass glow-border hover:shadow-accent-blue/10"
      }`}
    >
      {/* Image Container (Only if image exists) */}
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-background-card">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-card to-transparent opacity-80" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 z-20 flex gap-2">
            {project.highlight && (
              <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-400 ring-1 ring-amber-500/40 backdrop-blur-md uppercase">
                Featured Publication
              </span>
            )}
            {!project.highlight && (
              <span className="inline-flex items-center rounded-full bg-accent-blue/10 px-2.5 py-1 text-[10px] font-medium tracking-wider text-accent-blue ring-1 ring-accent-blue/20 backdrop-blur-md uppercase">
                {project.category.replace("-", " ")}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Category Badge for text-only cards */}
      {!project.image && (
        <div className="px-6 pt-6 pb-2">
          <span className="inline-flex items-center rounded-full bg-accent-blue/10 px-2.5 py-1 text-[10px] font-medium tracking-wider text-accent-blue ring-1 ring-accent-blue/20 uppercase">
            {project.category.replace("-", " ")}
          </span>
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-1 flex-col ${project.image ? "p-4 sm:p-5" : "px-4 pb-4 pt-2 sm:px-5 sm:pb-5"}`}>
        <h3 className="mb-2 text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-accent-blue transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Metrics Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-accent-cyan/10 px-2.5 py-1 text-xs font-semibold text-accent-cyan w-fit border border-accent-cyan/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
          </span>
          {project.metrics}
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground-muted">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-[11px] font-medium text-foreground-muted transition-colors group-hover:border-accent-blue/20 group-hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-glass-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground-dim transition-colors hover:text-accent-blue"
          >
            <GithubIcon size={18} />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-dim transition-colors hover:text-accent-cyan"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const topProjects = projects.slice(0, 6); // First 6
  const remainingProjects = projects.slice(6); // The rest

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of systems I've built — from multi-agent orchestration to real-time perception"
        />

        {/* Grid 1: 3-column layout for the top 6 projects */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {topProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} showAll={showAll} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Grid 2: 2-column layout for the remaining projects when expanded */}
        <AnimatePresence>
          {showAll && (
            <motion.div 
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            >
              {remainingProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 6} showAll={showAll} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* See More Button */}
        {remainingProjects.length > 0 && (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/5 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent-blue/10 hover:border-accent-blue/30"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} className="transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  View All {projects.length} Projects <ChevronDown size={16} className="transition-transform group-hover:translate-y-1" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
