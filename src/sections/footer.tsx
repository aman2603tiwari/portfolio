"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border bg-background-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <span className="text-base font-bold gradient-text sm:text-lg">
              Aman Tiwari
            </span>
            <p className="mt-1 text-xs text-foreground-dim sm:text-sm">
              AI Systems Engineer • IIT Roorkee
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/aman2603tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-foreground-muted transition-all hover:bg-white/10 hover:text-foreground hover:-translate-y-0.5 sm:h-10 sm:w-10"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-tiwari-027b9128b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-foreground-muted transition-all hover:bg-white/10 hover:text-foreground hover:-translate-y-0.5 sm:h-10 sm:w-10"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:tiwariaman2603@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-foreground-muted transition-all hover:bg-white/10 hover:text-foreground hover:-translate-y-0.5 sm:h-10 sm:w-10"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t border-glass-border pt-4 text-center sm:mt-8 sm:pt-6">
          <p className="text-xs text-foreground-dim sm:text-sm">
            © {currentYear} Aman Tiwari. Built with{" "}
            <Heart size={12} className="inline text-rose-400" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
