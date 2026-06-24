import { locationsAssets } from "@/lib/locations-assets";

export function LocationsHero() {
  return (
    <section aria-label="Ubicaciones Açaí Factory" className="relative w-full bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={locationsAssets.hero}
        alt="Açaí Factory Ubicaciones — Bayamón, Cataño y Corozal. Encuentra tu próximo bowl favorito."
        className="block h-auto w-full"
        width={locationsAssets.heroWidth}
        height={locationsAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      {locationsAssets.stores.map((store) => (
        <a
          key={store.id}
          href={store.directionsUrl}
          aria-label={`Abrir Google Maps para Açaí Factory ${store.city}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute hidden items-center justify-center rounded-full bg-magenta-neon px-3 text-center font-display font-extrabold uppercase leading-none tracking-wide text-white shadow-[0_5px_18px_rgba(226,0,122,0.38)] transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-neon lg:inline-flex"
          style={{
            left: `${store.directionsButton.leftPercent}%`,
            top: `${store.directionsButton.topPercent}%`,
            width: `${store.directionsButton.widthPercent}%`,
            height: `${store.directionsButton.heightPercent}%`,
            fontSize: `max(${store.directionsButton.fontPt}pt, ${store.directionsButton.desktopFontVw}vw)`,
          }}
        >
          {store.directionsButton.label} &gt;
        </a>
      ))}

      <div className="grid gap-4 bg-cream px-4 py-6 sm:grid-cols-3 sm:px-6 lg:hidden">
        {locationsAssets.stores.map((store) => (
          <a
            key={store.id}
            href={store.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-16 items-center justify-center rounded-full bg-magenta-neon px-5 py-4 text-center font-display text-lg font-black uppercase leading-tight text-white shadow-[0_10px_28px_rgba(226,0,122,0.28)]"
            aria-label={`Abrir Google Maps para Açaí Factory ${store.city}`}
          >
            Cómo llegar — {store.city}
          </a>
        ))}
      </div>
    </section>
  );
}
