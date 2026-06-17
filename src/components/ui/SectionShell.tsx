"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  className,
  children,
  eyebrow,
  title,
  subtitle,
  centered = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center")}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-magenta">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-soft-ink md:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
