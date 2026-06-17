import { Smartphone, Heart, Bell, Zap } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const perks = [
  { icon: Zap, text: "Ordena más rápido" },
  { icon: Heart, text: "Guarda tus favoritos" },
  { icon: Bell, text: "Recibe promociones exclusivas" },
  { icon: Smartphone, text: "Acumula puntos al instante" },
];

export function AppSection() {
  return (
    <SectionShell
      id="app"
      eyebrow="App"
      title="Tu experiencia Açaí Factory, en tu bolsillo"
      subtitle="La tecnología que convierte antojos en hábitos — ordena, gana y vive la marca desde cualquier lugar."
      className="bg-ink text-white"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <ul className="space-y-4">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4">
                <p.icon className="h-6 w-6 text-yellow" />
                <span className="font-medium">{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.playStoreUrl} variant="secondary">
              Google Play
            </Button>
            <Button href={siteConfig.appStoreUrl} variant="outline">
              App Store
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[2.5rem] border-8 border-white/10 bg-gradient-to-br from-magenta via-purple to-yellow p-1 shadow-2xl">
            <div className="rounded-[2rem] bg-ink p-8 text-center">
              <img
                src="/brand/logo.png"
                alt="Açaí Factory App"
                className="mx-auto h-28 w-28 rounded-full object-cover shadow-lg"
              />
              <div className="mt-8 rounded-3xl bg-white/10 p-6">
                <p className="text-sm text-white/70">Ordena · Rewards · Favoritos</p>
                <p className="mt-4 text-2xl font-bold text-yellow">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
