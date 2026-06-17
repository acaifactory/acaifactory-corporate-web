import { Gift, Star, Cake, Zap } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const benefits = [
  { icon: Star, title: "Gana puntos", text: "$1 gastado = 1 punto. Cada visita te acerca a más recompensas." },
  { icon: Gift, title: "Premios exclusivos", text: `Alcanza ${siteConfig.rewards.goal} puntos y desbloquea ${siteConfig.rewards.prize}.` },
  { icon: Cake, title: "Beneficio de cumpleaños", text: "Celebra tu día con ofertas especiales solo para miembros." },
  { icon: Zap, title: "Ofertas members-only", text: "Promociones y sorpresas que no encontrarás fuera del programa." },
];

export function RewardsSection() {
  return (
    <SectionShell
      id="rewards"
      eyebrow="Factory Rewards"
      title="Más que puntos. Pertenezco."
      subtitle="Un programa de lealtad diseñado como las grandes cadenas — simple, emocionante y exclusivo."
      className="relative overflow-hidden bg-gradient-to-br from-purple/10 via-white to-magenta/10"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="card-elevated rounded-3xl bg-white p-6">
              <b.icon className="h-8 w-8 text-magenta" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft-ink">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <p className="font-script text-3xl text-magenta">Factory Rewards</p>
          <p className="mt-4 text-5xl font-black text-ink">
            {siteConfig.rewards.goal}{" "}
            <span className="text-2xl font-bold text-soft-ink">pts</span>
          </p>
          <p className="mt-2 text-lg text-soft-ink">= {siteConfig.rewards.prize}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/rewards">JOIN NOW</Button>
            <Button variant="ghost" href={siteConfig.orderingUrl}>
              SIGN IN
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
