"use client";

import type { ProductEffect, ProductTheme } from "@/lib/product-themes";

function Particles({ count = 12, color }: { count?: number; color: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="scene-particle absolute rounded-full"
          style={{
            background: color,
            width: `${4 + (i % 5) * 2}px`,
            height: `${4 + (i % 5) * 2}px`,
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
            animationDelay: `${i * 0.35}s`,
            opacity: 0.5 + (i % 3) * 0.15,
          }}
        />
      ))}
    </>
  );
}

function EffectLayer({ effect }: { effect: ProductEffect }) {
  switch (effect) {
    case "earthquake":
      return (
        <>
          <div className="scene-earthquake-cracks absolute inset-0 opacity-40" />
          <div className="scene-earthquake-shake absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-deep/60 to-transparent" />
            {["🍒", "💥", "🍒"].map((e, i) => (
              <span
                key={i}
                className="scene-float absolute text-2xl md:text-3xl"
                style={{ left: `${20 + i * 30}%`, top: `${30 + i * 10}%`, animationDelay: `${i * 0.4}s` }}
              >
                {e}
              </span>
            ))}
          </div>
        </>
      );
    case "volcano":
      return (
        <>
          <div className="scene-lava absolute bottom-0 left-0 right-0 h-2/5" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="scene-bubble absolute bottom-[10%] rounded-full bg-yellow/80"
              style={{
                width: 8 + i * 4,
                height: 8 + i * 4,
                left: `${15 + i * 18}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </>
      );
    case "twister":
      return <div className="scene-twister absolute inset-0 opacity-50" />;
    case "tsunami":
      return (
        <>
          <div className="scene-wave scene-wave-1 absolute bottom-0 left-0 right-0 h-1/3" />
          <div className="scene-wave scene-wave-2 absolute bottom-0 left-0 right-0 h-1/4" />
        </>
      );
    case "storm":
      return (
        <>
          <div className="scene-lightning absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/50 via-transparent to-magenta/30" />
        </>
      );
    case "galaxy":
      return <div className="scene-galaxy absolute inset-0" />;
    case "eclipse":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="scene-eclipse h-3/5 w-3/5 rounded-full" />
        </div>
      );
    case "snow":
    case "arctic":
    case "iceberg":
      return (
        <>
          <Particles count={20} color="rgba(255,255,255,0.8)" />
          <div className="scene-snowfall absolute inset-0" />
        </>
      );
    case "rain":
    case "flood":
      return <div className="scene-rain absolute inset-0" />;
    default:
      return <Particles count={10} color="rgba(255,207,0,0.6)" />;
  }
}

export function ProductAnimatedBackground({
  theme,
  compact = false,
}: {
  theme: ProductTheme;
  compact?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${compact ? "" : "scene-cinematic"}`}
      style={{
        background: `radial-gradient(ellipse 120% 80% at 50% 120%, ${theme.secondary}55 0%, transparent 55%),
          radial-gradient(ellipse 80% 60% at 20% 20%, ${theme.primary}44 0%, transparent 50%),
          radial-gradient(ellipse 70% 50% at 80% 30%, ${theme.tertiary}40 0%, transparent 45%),
          linear-gradient(160deg, ${theme.primary}22 0%, ${theme.tertiary}18 40%, ${theme.secondary}15 100%)`,
      }}
    >
      {/* Brand color orbs — always present */}
      <div
        className="absolute -left-8 top-1/4 h-32 w-32 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: theme.primary, opacity: 0.45 }}
      />
      <div
        className="absolute -right-6 bottom-1/4 h-28 w-28 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: theme.secondary, opacity: 0.4, animationDelay: "1s" }}
      />
      <div
        className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full blur-2xl animate-pulse-glow"
        style={{ background: theme.tertiary, opacity: 0.35, animationDelay: "2s" }}
      />

      <EffectLayer effect={theme.effect} />

      {/* Film grain + vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,10,20,0.35)_100%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      {!compact && (
        <p className="absolute bottom-3 left-0 right-0 z-10 text-center font-display text-[0.6rem] font-bold uppercase tracking-[0.35em] text-white/70 mix-blend-overlay md:text-xs">
          {theme.scene}
        </p>
      )}
    </div>
  );
}
