import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold uppercase tracking-[0.12em] text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/40 focus-visible:ring-offset-2";

const variants = {
  primary: "btn-3d-primary text-white px-7 py-4 md:text-base",
  secondary: "btn-3d-secondary text-ink px-7 py-4 md:text-base",
  ghost: "btn-3d-ghost text-ink px-6 py-3.5",
  outline:
    "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm shadow-floating hover:bg-white hover:text-ink px-7 py-4",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className,
  children,
  href,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
