"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tierGradients: Record<string, string> = {
  signature: "from-magenta-hot/90 via-purple/80 to-magenta/70",
  premium: "from-purple/90 via-magenta/80 to-yellow/60",
  coco: "from-yellow/80 via-magenta-hot/70 to-purple/80",
  baby: "from-magenta/70 via-yellow/60 to-magenta-hot/80",
  menu: "from-magenta/80 via-purple/70 to-yellow/50",
};

function Placeholder({ name, tier, className }: { name: string; tier: string; className?: string }) {
  const gradient = tierGradients[tier] || tierGradients.menu;
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
      <p className="relative z-10 px-4 text-center font-script text-lg text-white drop-shadow-md">
        {name}
      </p>
    </div>
  );
}

export function ProductImage({
  name,
  image,
  tier = "menu",
  className,
  priority = false,
}: {
  name: string;
  image: string | null;
  tier?: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return <Placeholder name={name} tier={tier} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-cream", className)}>
      <Image
        src={image}
        alt={name}
        fill
        priority={priority}
        onError={() => setFailed(true)}
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
