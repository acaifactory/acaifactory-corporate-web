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
  lg: { image: 72, className: "h-[4.5rem] w-[4.5rem]" },
};

export function Logo({ size = "md", showWordmark = false, className = "" }: LogoProps) {
  const s = sizes[size];

  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/logo.png"
        alt="Açaí Factory"
        width={s.image}
        height={s.image}
        className={`${s.className} rounded-full object-cover shadow-md ring-2 ring-magenta/15`}
        priority
      />
      {showWordmark && (
        <div className="leading-none">
          <p className="font-script text-2xl text-magenta md:text-3xl">Açaí</p>
          <p className="-mt-1 font-display text-xs font-extrabold uppercase tracking-[0.25em] text-ink">
            Factory
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Link href="/" className="group inline-flex shrink-0 transition-transform hover:scale-[1.02]">
      {content}
    </Link>
  );
}
