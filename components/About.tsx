import Image from "next/image";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Story */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow text-accent-dark">Nosotros</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {site.about.title}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            {site.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
            <div className="font-display text-4xl font-semibold text-ink">
              {site.yearsExperience}+
            </div>
            <div className="text-sm text-ink-soft">
              años de experiencia
              <br />
              construyendo en {site.city.split(",")[0]}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 min-h-[320px] overflow-hidden lg:order-2 lg:min-h-[520px]">
          <Image
            src={site.about.image}
            alt="Construcción en Santa Cruz de la Sierra"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
