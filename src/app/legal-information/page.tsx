import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Terms and Conditions, Privacy Policy, Disclaimer, and Website Use Policy for Açaí Factory.",
};

const legalSections = [
  { href: "#terms-and-conditions", label: "Terms & Conditions" },
  { href: "#privacy-policy", label: "Privacy Policy" },
  { href: "#disclaimer", label: "Disclaimer" },
  { href: "#website-use-policy", label: "Website Use Policy" },
] as const;

export default function LegalInformationPage() {
  return (
    <main className="min-h-screen bg-[#fff9fc] pt-[calc(var(--site-header-height,7rem)+1.5rem)] text-ink">
      <header className="bg-gradient-to-br from-purple-deep via-magenta-dark to-magenta-neon px-5 py-14 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-lg font-black uppercase tracking-[0.22em] text-yellow sm:text-xl">
            Açaí Factory
          </p>
          <h1 className="mt-3 font-display text-5xl font-black leading-none sm:text-7xl">
            Legal Information
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-semibold leading-relaxed text-white/90 sm:text-2xl">
            Please review the policies that govern your use of the Açaí Factory corporate website.
          </p>
          <p className="mt-4 text-lg font-bold text-white/75">
            Última actualización: 23 de junio de 2026
          </p>
        </div>
      </header>

      <nav
        aria-label="Legal information sections"
        className="sticky top-[var(--site-header-height,7rem)] z-20 border-b border-magenta-neon/15 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {legalSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-full border-2 border-purple-deep px-5 py-3 text-base font-black text-purple-deep transition hover:bg-purple-deep hover:text-white sm:text-lg"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="grid w-full gap-16 px-2 py-12 sm:px-4 sm:py-16 lg:gap-24">
        <LegalSection id="terms-and-conditions" number="01" title="Terms & Conditions">
          <p className="font-black text-purple-deep">TÉRMINOS Y CONDICIONES DE USO</p>
          <p>Última actualización: 23 de junio de 2026</p>
          <p>Bienvenido a Açaí Factory.</p>
          <p>
            Al acceder o utilizar este sitio web, aplicación móvil o cualquiera de nuestros
            servicios digitales, usted acepta cumplir con los presentes Términos y Condiciones.
          </p>

          <h3>1. Uso del sitio</h3>
          <p>
            Este sitio web se proporciona únicamente con fines informativos, promocionales y
            comerciales relacionados con los productos y servicios de Açaí Factory.
          </p>
          <p>
            El usuario acepta utilizar el sitio de manera legal, responsable y conforme a todas
            las leyes aplicables.
          </p>

          <h3>2. Contenido ilustrativo</h3>
          <p>
            Las fotografías, imágenes, diseños, representaciones gráficas, ilustraciones,
            animaciones y demás contenido visual presentado en este sitio tienen fines
            ilustrativos y promocionales.
          </p>
          <p>
            Los productos finales pueden variar en apariencia, presentación, tamaño, ingredientes,
            empaque, colores, disponibilidad y otros aspectos operacionales según la localidad,
            temporada o disponibilidad de productos.
          </p>
          <p>Las imágenes no constituyen una garantía exacta del producto recibido.</p>

          <h3>3. Disponibilidad de productos</h3>
          <p>
            La disponibilidad de productos, ingredientes, promociones y servicios puede variar
            entre localidades y puede modificarse sin previo aviso.
          </p>
          <p>
            Açaí Factory se reserva el derecho de sustituir ingredientes o modificar productos
            cuando sea necesario por razones operacionales.
          </p>

          <h3>4. Promociones y ofertas</h3>
          <p>
            Las promociones publicadas pueden estar sujetas a restricciones, fechas de vigencia,
            disponibilidad y participación limitada.
          </p>
          <p>
            Algunas promociones son exclusivas para usuarios registrados en la aplicación móvil o
            miembros del programa de recompensas.
          </p>
          <p>No todas las promociones estarán disponibles en todas las localidades.</p>

          <h3>5. Cuentas de usuario</h3>
          <p>
            Los usuarios son responsables de mantener la confidencialidad de sus credenciales de
            acceso.
          </p>
          <p>
            Açaí Factory podrá suspender o cancelar cuentas que incumplan estos términos o que se
            utilicen de manera fraudulenta.
          </p>

          <h3>6. Limitación de responsabilidad</h3>
          <p>
            Açaí Factory no será responsable por daños indirectos, incidentales o consecuentes
            derivados del uso o imposibilidad de uso del sitio web, aplicación móvil o servicios
            relacionados.
          </p>

          <h3>7. Modificaciones</h3>
          <p>
            Açaí Factory podrá modificar estos términos en cualquier momento. El uso continuado del
            sitio constituye aceptación de los cambios realizados.
          </p>

          <h3>8. Contacto</h3>
          <p>Açaí Factory</p>
          <p>
            Teléfono: <a href="tel:+17876195485">(787) 619-5485</a>
          </p>
          <p>
            Correo electrónico:{" "}
            <a href="mailto:acaifactorypr@gmail.com">acaifactorypr@gmail.com</a>
          </p>
        </LegalSection>

        <LegalSection id="privacy-policy" number="02" title="Privacy Policy">
          <p className="font-black text-purple-deep">POLÍTICA DE PRIVACIDAD</p>
          <p>Açaí Factory respeta la privacidad de sus usuarios.</p>

          <h3>Información que podemos recopilar</h3>
          <ul>
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información de pedidos</li>
            <li>Información de recompensas y membresías</li>
            <li>Información técnica de navegación</li>
          </ul>

          <h3>La información recopilada podrá utilizarse para</h3>
          <ul>
            <li>Procesar pedidos</li>
            <li>Administrar cuentas de usuario</li>
            <li>Gestionar programas de recompensas</li>
            <li>Enviar ofertas y promociones</li>
            <li>Mejorar nuestros servicios</li>
            <li>Cumplir requisitos legales</li>
          </ul>

          <p>Açaí Factory no vende información personal a terceros.</p>
          <p>
            La información podrá compartirse únicamente con proveedores de servicios necesarios
            para procesar pagos, pedidos, programas de fidelización o servicios tecnológicos
            relacionados con nuestras operaciones.
          </p>
          <p>
            Los usuarios podrán solicitar acceso, corrección o eliminación de su información
            personal comunicándose a:
          </p>
          <p>
            <a href="mailto:acaifactorypr@gmail.com">acaifactorypr@gmail.com</a>
          </p>
          <p>o llamando al:</p>
          <p>
            <a href="tel:+17876195485">(787) 619-5485</a>
          </p>
          <p>
            Açaí Factory implementa medidas razonables de seguridad para proteger la información
            de sus usuarios.
          </p>
          <p>
            El uso continuado del sitio implica la aceptación de esta Política de Privacidad.
          </p>
        </LegalSection>

        <LegalSection id="disclaimer" number="03" title="Disclaimer / Descargo de responsabilidad">
          <p className="font-black text-purple-deep">
            DESCARGO DE RESPONSABILIDAD (DISCLAIMER)
          </p>
          <p>
            Las imágenes, fotografías, representaciones digitales, diseños gráficos,
            ilustraciones, simulaciones, videos promocionales y demás materiales visuales incluidos
            en este sitio tienen únicamente fines promocionales e ilustrativos.
          </p>
          <p>
            Los productos ofrecidos pueden variar en apariencia, tamaño, color, presentación,
            ingredientes y empaque según la localidad, disponibilidad de inventario o cambios
            operacionales.
          </p>

          <h3>Las promociones publicadas pueden requerir</h3>
          <ul>
            <li>Registro en la aplicación móvil.</li>
            <li>Participación en el programa de recompensas.</li>
            <li>Disponibilidad en localidades participantes.</li>
            <li>Cumplimiento de términos promocionales específicos.</li>
          </ul>

          <p>
            Las ofertas, descuentos, cupones y beneficios de recompensas pueden modificarse,
            suspenderse o finalizarse sin previo aviso.
          </p>
          <p>
            La información contenida en este sitio se considera correcta al momento de su
            publicación; sin embargo, Açaí Factory no garantiza que toda la información permanezca
            libre de errores, omisiones o actualizaciones pendientes.
          </p>
          <p>
            Para información oficial y actualizada sobre promociones, recompensas, productos o
            servicios, comuníquese con:
          </p>
          <p>
            Teléfono: <a href="tel:+17876195485">(787) 619-5485</a>
          </p>
          <p>
            Correo electrónico:{" "}
            <a href="mailto:acaifactorypr@gmail.com">acaifactorypr@gmail.com</a>
          </p>
        </LegalSection>

        <LegalSection id="website-use-policy" number="04" title="Website Use Policy">
          <h3>Permitted use</h3>
          <p>
            You may use this website for lawful, personal, and informational purposes. You agree
            not to interfere with the website, attempt unauthorized access, introduce malicious
            code, misuse forms, impersonate another person, scrape content at scale, or use the
            website in a way that violates applicable law or the rights of others.
          </p>

          <h3>Accounts and submissions</h3>
          <p>
            You are responsible for the accuracy of information you submit and for protecting any
            account credentials associated with future account services. Do not submit passwords,
            payment information, or other highly sensitive information through general contact,
            employment, franchise, or catering forms unless the form specifically requests it
            through a secure process.
          </p>

          <h3>Accessibility</h3>
          <p>
            Açaí Factory seeks to provide a website that is usable by a broad audience. If you have
            difficulty accessing content or completing a website function, please contact{" "}
            <a href="mailto:acaifactorypr@gmail.com">acaifactorypr@gmail.com</a> and describe the
            page and assistance needed.
          </p>

          <h3>Enforcement and updates</h3>
          <p>
            Access may be restricted when misuse, security threats, or unlawful activity is
            reasonably suspected. This policy may be updated as the website and its services
            evolve. Continued use after an update constitutes acceptance of the revised policy.
          </p>
        </LegalSection>

        <aside className="mx-auto w-[min(94vw,41.2in)] rounded-[1.5rem] bg-purple-deep p-6 text-white shadow-xl sm:p-8 lg:w-[min(98vw,41.2in)] lg:rounded-[3.5rem] lg:p-16">
          <h2 className="font-display text-3xl font-black lg:text-[clamp(44px,5vw,76px)]">Questions?</h2>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-white/88 lg:mt-6 lg:text-[clamp(28px,3.3vw,48px)]">
            Contact Açaí Factory at{" "}
            <a className="font-black text-yellow underline" href="mailto:acaifactorypr@gmail.com">
              acaifactorypr@gmail.com
            </a>
            .
          </p>
        </aside>
      </div>
    </main>
  );
}

function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto min-h-0 w-[min(94vw,41.2in)] scroll-mt-[calc(var(--site-header-height,7rem)+7rem)] rounded-[1.5rem] border-4 border-[#b98b43] bg-[#fff8e9] p-4 shadow-[0_35px_100px_rgba(74,18,136,0.2)] sm:p-6 lg:min-h-[calc(100vh-var(--site-header-height,7rem)-2rem)] lg:w-[min(98vw,41.2in)] lg:rounded-[3.5rem] lg:border-[10px] lg:p-16"
    >
      <p className="text-base font-black uppercase tracking-[0.2em] text-magenta-neon sm:text-lg lg:text-[clamp(26px,3vw,46px)]">
        {number}
      </p>
      <h2 className="mt-3 font-display text-3xl font-black uppercase leading-[0.95] text-ink sm:text-4xl lg:mt-4 lg:text-[clamp(60px,8vw,118px)] lg:leading-[0.92]">
        {title}
      </h2>
      <div className="mt-5 space-y-5 rounded-[1.25rem] border-2 border-[#b98b43]/30 bg-white/65 p-4 text-base font-semibold leading-relaxed text-[#352719] sm:p-6 sm:text-lg lg:mt-10 lg:space-y-9 lg:rounded-[2.5rem] lg:border-4 lg:p-14 lg:text-[clamp(34px,4vw,58px)] lg:leading-[1.48] [&_a]:font-black [&_a]:text-magenta-dark [&_a]:underline [&_h3]:mt-7 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-black [&_h3]:uppercase [&_h3]:leading-tight [&_h3]:text-purple-deep lg:[&_h3]:mt-12 lg:[&_h3]:text-[clamp(40px,5vw,72px)] [&_li]:mb-3 lg:[&_li]:mb-5 [&_ul]:list-disc [&_ul]:space-y-3 lg:[&_ul]:space-y-4 [&_ul]:pl-[1.25em]">
        {children}
      </div>
    </section>
  );
}
