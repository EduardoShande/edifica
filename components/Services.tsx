import Image from "next/image";
import { site } from "@/lib/site";

export default function Services() {
  return (
    <section id="servicios" className="border-y border-line bg-sand-deep">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-dark">Servicios</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Lo que construimos para usted
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Desde la primera piedra hasta el último acabado, con un solo equipo
            responsable de toda la obra.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {site.services.map((service, i) => (
            <article key={service.title} className="group">
              <div className="relative aspect-[5/4] overflow-hidden bg-ink">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute left-5 top-4 font-display text-5xl font-semibold text-white/90 mix-blend-difference">
                  0{i + 1}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
