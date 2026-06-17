import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const ugcPosts = [
  {
    image: "/images/products/cherries-earthquake.webp",
    user: "@acaifactorypr",
    caption: "Cherries Earthquake — el bowl que lo empezó todo",
    tag: "#OfficialNo1",
  },
  {
    image: "/images/products/tropical-summer.webp",
    user: "@acaifactorypr",
    caption: "Tropical Summer vibes en cada cucharada",
    tag: "#TasteOfBrasil",
  },
  {
    image: "/images/products/nutella-flood.webp",
    user: "@acaifactorypr",
    caption: "Nutella Flood — indulgencia premium",
    tag: "#AcaiFactory",
  },
  {
    image: "/images/products/mango-galaxis.webp",
    user: "@acaifactorypr",
    caption: "Mango Galaxis — out of this world",
    tag: "#FactoryRewards",
  },
];

export function CommunitySection() {
  return (
    <SectionShell
      id="community"
      eyebrow="Comunidad"
      title="FOLLOW US"
      subtitle="Experiencias reales, energía tropical y una comunidad que crece bowl a bowl. Únete al movimiento."
      centered
      className="mesh-luxury relative overflow-hidden"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ugcPosts.map((post) => (
          <Link
            key={post.tag}
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-3d group relative aspect-square overflow-hidden rounded-[1.5rem]"
          >
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-display text-xs font-bold text-yellow">{post.user}</p>
              <p className="mt-1 font-display text-sm font-semibold leading-snug">{post.caption}</p>
              <p className="mt-2 text-xs font-bold text-magenta-hot">{post.tag}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* API-ready Instagram feed placeholder */}
      <div
        id="instagram-feed"
        data-instagram-handle="acaifactorypr"
        className="mt-8 hidden"
        aria-hidden
      />

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
