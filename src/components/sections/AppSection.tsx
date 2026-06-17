import Image from "next/image";
import { Smartphone, Heart, Bell, Zap, Star } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig, isExternalUrl } from "@/lib/site";

const perks = [
  { icon: Zap, text: "Ordena en segundos — sin filas, sin espera" },
  { icon: Heart, text: "Guarda tus bowls favoritos" },
  { icon: Bell, text: "Promociones exclusivas directo a tu teléfono" },
  { icon: Star, text: "Acumula puntos con cada compra" },
];

export function AppSection() {
  return (
    <SectionShell
      id="app"
      eyebrow="Açaí Factory App"
      title="Tu bowl favorito, a un toque de distancia"
      subtitle="Ordena más rápido, gana rewards y recibe ofertas que no encontrarás en ningún otro lugar. La app que convierte antojos en ritual."
      className="relative overflow-hidden bg-gradient-to-br from-ink via-purple-deep to-ink text-white"
    >
      <div className="orb animate-pulse-glow absolute -right-20 top-0 h-64 w-64 bg-magenta/30" />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <ul className="space-y-3">
            {perks.map((p) => (
              <li
                key={p.text}
                className="glass-luxury flex items-center gap-4 rounded-2xl !bg-white/8 px-5 py-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-magenta to-purple shadow-glow-magenta">
                  <p.icon className="h-5 w-5 text-white" />
                </span>
                <span className="font-display font-semibold">{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.playStoreUrl}
              variant="secondary"
              external={isExternalUrl(siteConfig.playStoreUrl)}
            >
              Google Play
            </Button>
            <Button
              href={siteConfig.appStoreUrl}
              variant="outline"
              external={isExternalUrl(siteConfig.appStoreUrl)}
            >
              App Store
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="shadow-floating rounded-[2.75rem] border-[10px] border-white/15 bg-gradient-to-br from-magenta via-purple to-yellow p-1">
            <div className="overflow-hidden rounded-[2.25rem] bg-ink">
              <div className="bg-gradient-to-b from-magenta/30 to-transparent px-6 pb-2 pt-8 text-center">
                <Image
                  src="/brand/logo.png"
                  alt="Açaí Factory"
                  width={88}
                  height={88}
                  className="mx-auto rounded-full shadow-floating ring-4 ring-white/20"
                />
                <p className="mt-3 font-script text-3xl text-white">Açaí Factory</p>
              </div>
              <div className="space-y-3 p-5">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/products/cherries-earthquake.webp"
                    alt="Bowl destacado"
                    width={300}
                    height={300}
                    className="h-36 w-full object-cover"
                  />
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-magenta/30 to-yellow/20 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
                    Factory Rewards
                  </p>
                  <p className="font-luxury mt-1 text-2xl">72 pts → premio</p>
                </div>
                <div className="rounded-full bg-magenta py-3 text-center font-display text-sm font-bold uppercase tracking-wider">
                  Ordenar ahora
                </div>
              </div>
            </div>
          </div>
          <Smartphone className="absolute -right-4 -top-4 h-10 w-10 text-yellow opacity-80" />
        </div>
      </div>
    </SectionShell>
  );
}
