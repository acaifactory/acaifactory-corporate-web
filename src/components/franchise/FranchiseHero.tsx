import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { franchiseAssets } from "@/lib/franchise-assets";

export function FranchiseHero() {
  return (
    <section
      aria-label="Franquicias Açaí Factory"
      className="relative w-full bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={franchiseAssets.hero}
        alt="Franquicias Açaí Factory — más que açaí, es un estilo de vida. Conoce nuestros tres modelos de franquicia."
        className="block h-auto w-full"
        width={franchiseAssets.heroWidth}
        height={franchiseAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      {franchiseAssets.buttons.map((button) => (
        <div
          key={button.id}
          className="absolute z-20 box-border"
          style={{
            left: button.left,
            top: button.top,
            width: `${button.widthPercent}%`,
            height: `${button.heightPercent}%`,
          }}
          data-franchise-ui={`button-${button.id}`}
        >
          <Link
            href={button.href}
            className="flex h-full w-full items-center justify-center gap-[0.35em] rounded-[0.45em] bg-yellow px-[0.55em] font-display font-extrabold uppercase leading-none tracking-tight text-ink shadow-[0_4px_14px_rgba(245,183,0,0.45)] transition hover:bg-yellow-deep focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-magenta-neon"
            style={{
              fontSize: `max(${button.fontPt}pt, ${button.desktopFontVw}vw)`,
            }}
            aria-label={`${button.label} — ${button.id.replaceAll("-", " ")}`}
          >
            <span className="whitespace-nowrap">{button.label}</span>
            <span className="flex h-[1.25em] w-[1.25em] shrink-0 items-center justify-center rounded-full border-[0.12em] border-current">
              <ArrowRight
                className="h-[0.75em] w-[0.75em]"
                strokeWidth={3}
                aria-hidden
              />
            </span>
          </Link>
        </div>
      ))}
    </section>
  );
}
