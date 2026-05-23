"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-32 items-center justify-center text-sm text-foreground-dim">
        Loading contribution graph...
      </div>
    ),
  }
);

export function GitHubActivity() {
  return (
    <section id="github" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and development activity"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 grid grid-cols-3 gap-3 sm:mb-12 sm:gap-4"
        >
          <div className="glass rounded-xl p-4 text-center transition-all hover:-translate-y-1 sm:rounded-2xl sm:p-6">
            <GitFork className="mx-auto mb-1.5 h-4 w-4 text-accent-blue sm:mb-2 sm:h-5 sm:w-5" />
            <div className="text-lg font-bold text-foreground sm:text-2xl">20+</div>
            <div className="text-[10px] text-foreground-muted sm:text-sm">Repositories</div>
          </div>
          <div className="glass rounded-xl p-4 text-center transition-all hover:-translate-y-1 sm:rounded-2xl sm:p-6">
            <Star className="mx-auto mb-1.5 h-4 w-4 text-accent-blue sm:mb-2 sm:h-5 sm:w-5" />
            <div className="text-lg font-bold text-foreground sm:text-2xl">⭐</div>
            <div className="text-[10px] text-foreground-muted sm:text-sm">Stars Earned</div>
          </div>
          <div className="glass rounded-xl p-4 text-center transition-all hover:-translate-y-1 sm:rounded-2xl sm:p-6">
            <GithubIcon size={18} className="mx-auto mb-1.5 text-accent-blue sm:mb-2" />
            <div className="text-lg font-bold text-foreground sm:text-2xl">Active</div>
            <div className="text-[10px] text-foreground-muted sm:text-sm">Contributions</div>
          </div>
        </motion.div>

        {/* Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl p-4 sm:rounded-2xl sm:p-6 md:p-8"
        >
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              Contribution Graph
            </h3>
            <a
              href="https://github.com/aman2603tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-foreground-muted transition-colors hover:text-accent-blue sm:text-sm"
            >
              View Profile
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="overflow-x-auto -mx-2 px-2">
            <GitHubCalendar
              username="aman2603tiwari"
              colorScheme="dark"
              blockSize={10}
              blockMargin={3}
              fontSize={11}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
