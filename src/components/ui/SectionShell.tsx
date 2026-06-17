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
  children?: React.ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <section id={id} className={cn("section-padding relative", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className={cn("mb-14 max-w-3xl", centered && "mx-auto text-center")}
          >
            {eyebrow && <p className="eyebrow-luxury mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="heading-luxury text-depth text-4xl text-ink md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 font-display text-base font-medium leading-relaxed text-soft-ink md:text-lg md:leading-8">
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
