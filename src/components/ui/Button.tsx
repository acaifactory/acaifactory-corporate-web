import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/40 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-magenta text-white hover:bg-magenta-hot glow-magenta hover:scale-[1.03] active:scale-[0.98] px-6 py-3.5 text-sm md:text-base",
  secondary:
    "bg-yellow text-ink hover:bg-yellow-deep hover:scale-[1.03] active:scale-[0.98] px-6 py-3.5 text-sm md:text-base shadow-lg shadow-yellow/30",
  ghost:
    "border border-magenta/20 bg-white/80 text-ink hover:border-magenta/40 hover:bg-white px-5 py-3 text-sm backdrop-blur-sm",
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-ink px-6 py-3.5 text-sm md:text-base",
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

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
  external,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href: string;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Button variant={variant} className={className} href={href} external={external}>
      {children}
    </Button>
  );
}
