import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import Grain from "./Grain";
import Cta from "./Cta";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Full-bleed construction photograph */}
      <Image
        src="/images/hero-construction.jpg"
        alt="Equipo de construcción en obra"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility gradient: darker at bottom-left where the text sits */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent"
      />
      <Grain />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <h1 className="mx-auto max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {site.heroTitle}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          {site.promise}
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <Cta href={whatsappLink()} tone="light">
            Solicitar presupuesto
          </Cta>
          <Cta href="#proyectos" tone="light" variant="link" external={false}>
            Ver proyectos
          </Cta>
        </div>
      </div>
    </section>
  );
}
