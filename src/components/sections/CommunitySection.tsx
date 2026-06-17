import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const communityPosts = [
  { caption: "Energía tropical en cada cucharada", tag: "#AcaiFactory" },
  { caption: "Bowl goals achieved", tag: "#TasteOfBrasil" },
  { caption: "Comunidad que vibra diferente", tag: "#FactoryRewards" },
  { caption: "Fresh. Bold. Unforgettable.", tag: "#AcaiFactoryPR" },
];

export function CommunitySection() {
  return (
    <SectionShell
      id="community"
      eyebrow="Comunidad"
      title="FOLLOW US"
      subtitle="Experiencias reales, energía tropical y una comunidad que crece con cada bowl."
      centered
      className="bg-white"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {communityPosts.map((post, i) => (
          <div
            key={post.tag}
            className="card-elevated aspect-square rounded-3xl bg-gradient-to-br from-magenta/80 via-purple/70 to-yellow/60 p-6 text-white"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <p className="font-script text-2xl">{post.caption}</p>
            <p className="mt-auto pt-16 text-sm font-bold">{post.tag}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={siteConfig.instagramUrl} external>
          Instagram
        </Button>
        <Button href={siteConfig.facebookUrl} variant="ghost" external>
          Facebook
        </Button>
      </div>
    </SectionShell>
  );
}
