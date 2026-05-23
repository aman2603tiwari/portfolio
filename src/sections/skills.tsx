"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/skills";
import { Brain, Eye, Bot, Cpu, Code, Wrench } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Eye,
  Bot,
  Cpu,
  Code,
  Wrench,
};

const categoryGradients = [
  "from-blue-500/20 to-blue-600/5",
  "from-cyan-500/20 to-cyan-600/5",
  "from-purple-500/20 to-purple-600/5",
  "from-emerald-500/20 to-emerald-600/5",
  "from-amber-500/20 to-amber-600/5",
  "from-rose-500/20 to-rose-600/5",
];

const categoryIconColors = [
  "text-blue-400",
  "text-cyan-400",
  "text-purple-400",
  "text-emerald-400",
  "text-amber-400",
  "text-rose-400",
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tech Stack"
          subtitle="The tools and technologies I work with daily"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass glow-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`rounded-xl bg-gradient-to-br ${categoryGradients[i]} p-2.5`}
                  >
                    <Icon
                      className={`h-5 w-5 ${categoryIconColors[i]}`}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.08 + j * 0.03,
                      }}
                      className="tech-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
