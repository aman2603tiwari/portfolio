"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tiwariaman2603@gmail.com",
    href: "mailto:tiwariaman2603@gmail.com",
    color: "text-blue-400 hover:text-blue-300",
    isBrand: false,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "aman2603tiwari",
    href: "https://github.com/aman2603tiwari",
    color: "text-foreground hover:text-foreground/80",
    isBrand: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Aman Tiwari",
    href: "https://www.linkedin.com/in/aman-tiwari-027b9128b/",
    color: "text-cyan-400 hover:text-cyan-300",
    isBrand: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 sm:h-12 sm:w-12">
                  <link.icon size={18} className={link.color} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-foreground-dim sm:text-sm">{link.label}</p>
                  <p className="truncate text-sm font-medium text-foreground sm:text-base">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              className="glass rounded-2xl p-5 sm:p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
                window.location.href = `mailto:tiwariaman2603@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
              }}
            >
              <h3 className="mb-5 text-base font-semibold text-foreground sm:mb-6 sm:text-lg">
                Send a Message
              </h3>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-xs text-foreground-muted sm:mb-1.5 sm:text-sm"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-dim outline-none transition-colors focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 sm:px-4 sm:py-3"
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-xs text-foreground-muted sm:mb-1.5 sm:text-sm"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-dim outline-none transition-colors focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 sm:px-4 sm:py-3"
                />
              </div>

              <div className="mb-5 sm:mb-6">
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-xs text-foreground-muted sm:mb-1.5 sm:text-sm"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  className="w-full resize-none rounded-xl border border-glass-border bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-dim outline-none transition-colors focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 sm:px-4 sm:py-3"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-blue px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] sm:py-3"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
