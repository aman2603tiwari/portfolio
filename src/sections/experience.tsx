"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experience";
import { Bot, Users, BookOpen, Heart } from "lucide-react";

const typeIcons = {
  work: Bot,
  leadership: Users,
  research: BookOpen,
  volunteering: Heart,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" as const } 
  },
};

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Glows for subtle lab aesthetic */}
      <div className="absolute top-1/4 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Experience & Research"
          subtitle="Leadership, autonomous systems, and applied intelligence"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-12 md:mt-20"
        >
          {/* Vertical Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-accent-blue/60 via-accent-cyan/20 to-transparent md:left-1/2 md:-translate-x-px" 
          />

          {experiences.map((exp, i) => {
            const Icon = typeIcons[exp.type];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-12 flex flex-col md:mb-16 md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Glowing Timeline Node */}
                <div className="absolute left-6 z-20 md:left-1/2 md:-translate-x-1/2">
                  <div className="relative flex h-12 w-12 items-center justify-center -translate-x-1/2 md:translate-x-0">
                    <div className="absolute inset-0 rounded-full bg-accent-blue/20 blur-md" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-accent-blue/30 bg-background-card text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <Icon size={18} className="stroke-[1.5]" />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="group glass glow-border rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-white/[0.03] to-transparent">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-accent-blue transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex shrink-0 items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 w-fit">
                          {exp.current && (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
                          )}
                          <span className="text-[11px] font-medium text-foreground-muted tracking-wider uppercase">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-accent-cyan/80">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mb-6 space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start text-sm text-foreground-dim leading-relaxed">
                          <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue/50" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-glass-border">
                      {exp.techUsed.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-[11px] font-medium text-foreground-muted bg-white/5 border border-white/10 rounded-md transition-colors group-hover:border-accent-blue/30 group-hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
