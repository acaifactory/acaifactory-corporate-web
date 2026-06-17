"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getProductTheme } from "@/lib/product-themes";
import { ProductAnimatedBackground } from "./ProductAnimatedBackground";

export function ProductScene({
  productId,
  name,
  image,
  tier = "menu",
  className,
  priority = false,
  compact = false,
}: {
  productId: string;
  name: string;
  image: string | null;
  tier?: string;
  className?: string;
  priority?: boolean;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const theme = getProductTheme(productId, tier);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      <ProductAnimatedBackground theme={theme} compact={compact} />

      {/* Centered product stage — fixes decentralization */}
      <div className="relative z-20 flex h-full w-full items-center justify-center p-4 md:p-6">
        <div
          className={cn(
            "relative flex items-center justify-center",
            compact ? "h-[82%] w-[82%]" : "h-[85%] w-[85%] max-h-[420px] max-w-[420px]"
          )}
        >
          {image && !failed ? (
            <Image
              src={image}
              alt={name}
              fill
              priority={priority}
              onError={() => setFailed(true)}
              className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-5xl">🥣</span>
              <p className="mt-3 font-script text-2xl text-white drop-shadow-lg">{name}</p>
            </div>
          )}
        </div>
      </div>

      {/* Colorful brand rim */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] ring-1 ring-inset ring-white/20"
        style={{
          boxShadow: `inset 0 0 60px ${theme.primary}22, inset 0 -20px 40px ${theme.tertiary}15`,
        }}
      />
    </div>
  );
}
