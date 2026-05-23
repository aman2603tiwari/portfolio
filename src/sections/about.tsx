"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Brain, Eye, Bot, Cpu, GraduationCap, Zap } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+", icon: Zap },
  { label: "Tech Domains", value: "5+", icon: Brain },
  { label: "ML Models", value: "15+", icon: Eye },
  { label: "Systems Deployed", value: "8+", icon: Cpu },
];

const tags = [
  "Computer Vision",
  "Large Language Models",
  "Embedded AI",
  "Multi-Agent Systems",
  "RAG Pipelines",
  "Robotics Perception",
  "SDR Optimization",
  "Autonomous Intelligence",
];

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Multi-agent orchestration, LLM pipelines, RAG systems, and reinforcement learning for intelligent decision-making.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time object detection, quality inspection, OCR processing, and visual SLAM for autonomous systems.",
    color: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "Robotics & Autonomy",
    description:
      "Autonomous navigation, sensor fusion, perception pipelines, and human-robot interaction systems.",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Cpu,
    title: "Embedded & SDR",
    description:
      "FPGA-based signal processing, ZedBoard implementations, and real-time embedded system design.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Engineering intelligent systems that bridge the physical and digital worlds"
        />

        {/* IIT Roorkee Badge + Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-sm font-medium text-accent-blue">
            <GraduationCap size={14} />
            IIT Roorkee
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
            AI/ML Engineer
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            Robotics
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 w-full max-w-3xl"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base lg:text-lg">
              <span className="font-semibold text-foreground">
                Aman Tiwari
              </span>{" "}
              is an AI/ML and Robotics engineer at{" "}
              <span className="text-accent-blue font-medium">IIT Roorkee</span>{" "}
              specializing in{" "}
              <span className="text-accent-cyan">Computer Vision</span>,{" "}
              <span className="text-accent-cyan">Large Language Models</span>,{" "}
              <span className="text-accent-cyan">Embedded AI Systems</span> and{" "}
              <span className="text-accent-cyan">Autonomous Intelligence</span>.
              His work spans multi-agent AI systems, real-time RAG pipelines,
              robotics perception, SDR optimization and intelligent automation
              systems. He combines research-oriented engineering with scalable AI
              system design.
            </p>
          </div>
        </motion.div>

        {/* Specialization Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12 flex w-full max-w-3xl flex-wrap justify-center gap-2"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
              className="tech-badge"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="glass rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 sm:p-5"
            >
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-accent-blue" />
              <div className="text-xl font-bold text-foreground sm:text-2xl">
                {stat.value}
              </div>
              <div className="text-xs text-foreground-muted sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass glow-border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6"
            >
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3`}
              >
                <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.iconColor}`} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-foreground-muted sm:text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
