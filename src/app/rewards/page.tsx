import type { Metadata } from "next";
import { Gift, Star, Cake, Zap, Trophy } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig, orderingLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Factory Rewards",
  description:
    "Únete a Factory Rewards. Gana puntos, desbloquea premios y accede a ofertas exclusivas.",
};

const perks = [
  { icon: Star, title: "1 punto por cada $1", text: "Cada compra te acerca a más recompensas." },
  { icon: Trophy, title: `${siteConfig.rewards.goal} puntos = premio`, text: siteConfig.rewards.prize },
  { icon: Cake, title: "Beneficio de cumpleaños", text: "Sorpresas especiales en tu mes." },
  { icon: Zap, title: "Ofertas exclusivas", text: "Promociones solo para miembros activos." },
  { icon: Gift, title: "Experiencia premium", text: "El programa de lealtad de una marca que piensa en grande." },
];

export default function RewardsPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Factory Rewards"
        title="Recompensas que se sienten grandes"
        subtitle="Un programa diseñado para retener, emocionar y convertir visitantes en fans de por vida."
        className="bg-gradient-to-br from-purple/10 via-cream to-magenta/10"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="card-elevated rounded-3xl bg-white p-6">
              <p.icon className="h-8 w-8 text-magenta" />
              <h2 className="mt-4 font-display text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-soft-ink">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={orderingLink()}>JOIN NOW</Button>
          <Button variant="ghost" href={orderingLink()}>
            SIGN IN
          </Button>
        </div>
      </SectionShell>
    </div>
  );
}
