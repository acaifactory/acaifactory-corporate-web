import { cateringAssets } from "@/lib/catering-assets";

export function CateringOccasions() {
  return (
    <section
      aria-label="Opciones de catering Açaí Factory"
      className="bg-cream px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[110rem]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-display text-base font-extrabold uppercase tracking-[0.18em] text-magenta-neon sm:text-lg lg:text-[24pt]">
            Catering para cada ocasión
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none text-ink sm:text-4xl lg:mt-5 lg:text-[52pt]">
            Llevamos el sabor tropical a tu evento
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {cateringAssets.occasions.map((occasion) => (
            <article
              key={occasion.id}
              className="group overflow-hidden rounded-[3rem] bg-white shadow-[0_24px_60px_rgba(49,0,50,0.16)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={occasion.image}
                  alt={`Catering Açaí Factory para ${occasion.title}`}
                  width={occasion.imageWidth}
                  height={occasion.imageHeight}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-8 py-8 text-center">
                <h3 className="font-display text-2xl font-extrabold uppercase leading-none text-purple sm:text-3xl lg:text-[34pt]">
                  {occasion.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
