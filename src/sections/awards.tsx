"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Trophy, Medal, Award, Star, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  {
    id: "jee",
    title: "AIR-797 in JEE Advanced 2023",
    subtitle: "AIR-640 (99.95%ile) in JEE Mains 2023",
    icon: Trophy,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    highlight: true,
  },
  {
    id: "irc",
    title: "10th Rank Globally",
    subtitle: "International Rover Challenge 2025 by Space Robotics Society",
    icon: Target,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    id: "grid",
    title: "4th Place (out of 19000+ teams)",
    subtitle: "Flipkart Grid 6.0 Robotics Track",
    icon: Medal,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    id: "space",
    title: "Finalist & 5th Rank",
    subtitle: "IRDC 2025 Finalist & 5th in International Space Drone Challenge 2025",
    icon: Star,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
  {
    id: "kvpy",
    title: "AIR-372 in KVPY (SA)",
    subtitle: "Rank 197 in NTSE Stage 1 Madhya Pradesh",
    icon: Award,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "olympiads",
    title: "State Topper in NSEC 2022",
    subtitle: "Rank 1 among 36,000+ students. 2x IOQM Merit Awardee (2021, 2022)",
    icon: Medal,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Awards() {
  return (
    <section id="awards" className="section-padding relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Awards & Achievements"
          subtitle="Academic excellence and international robotics competitions"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative flex flex-col justify-center rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                item.highlight
                  ? "bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30 hover:shadow-amber-500/10"
                  : "glass glow-border hover:shadow-accent-blue/10"
              }`}
            >
              <div
                className={`mb-4 inline-flex rounded-xl border p-3 w-fit ${item.color} transition-transform group-hover:scale-110 duration-300`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className={`mb-1.5 text-lg font-bold tracking-tight ${item.highlight ? "text-amber-400" : "text-foreground"}`}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
