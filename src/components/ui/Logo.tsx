"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: { image: 44, className: "h-11 w-11" },
  md: { image: 56, className: "h-14 w-14" },
  lg: { image: 80, className: "h-20 w-20" },
};

export function Logo({ size = "md", showWordmark = false, className = "" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-magenta/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <Image
          src="/brand/logo.png"
          alt="Açaí Factory"
          width={s.image}
          height={s.image}
          className={`${s.className} relative rounded-full object-cover shadow-floating ring-2 ring-white`}
          priority
        />
      </div>
      {showWordmark && (
        <div className="leading-none">
          <p className="font-script text-3xl text-magenta">Açaí</p>
          <p className="font-display text-[0.65rem] font-extrabold uppercase tracking-[0.35em] text-ink">
            Factory
          </p>
        </div>
      )}
    </Link>
  );
}
