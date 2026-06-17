import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site";

const footerGroups = [
  {
    title: "Explorar",
    links: [
      { href: "/menu", label: "Menú" },
      { href: "/promotions", label: "Promociones" },
      { href: "/rewards", label: "Rewards" },
      { href: "/locations", label: "Locations" },
    ],
  },
  {
    title: "Negocio",
    links: [
      { href: "/franchises", label: "Franquicias" },
      { href: "/catering", label: "Catering" },
      { href: "/careers", label: "Carreras" },
      { href: "/community", label: "Comunidad" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { href: "/support", label: "Support & FAQ" },
      { href: "/contact", label: "Contacto" },
      { href: "/privacy", label: "Privacidad" },
      { href: "/terms", label: "Términos" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-ink to-purple-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(236,0,140,0.4),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(255,207,0,0.12),transparent_40%)]" />
      <div className="noise-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/brand/logo.png"
                alt="Açaí Factory"
                width={72}
                height={72}
                className="h-[4.5rem] w-[4.5rem] rounded-full object-cover shadow-floating ring-2 ring-white/30"
              />
              <div>
                <p className="font-script text-4xl text-magenta-hot">Açaí Factory</p>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-yellow">{siteConfig.slogan}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Experiencias tropicales premium, comunidad y bienestar. Una marca
              construida para crecer — de Puerto Rico al mundo.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-magenta"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-magenta"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-yellow">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> {siteConfig.contactEmail}
            </a>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </span>
          </div>
          <p>© {new Date().getFullYear()} Açaí Factory. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
