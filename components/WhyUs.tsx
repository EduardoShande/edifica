import Image from "next/image";
import { site } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="ventajas" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
          <Image
            src="/images/band-steel.jpg"
            alt="Equipo trabajando en obra"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 max-w-[15rem] bg-accent px-6 py-5">
            <div className="font-display text-3xl font-semibold text-ink">
              {site.yearsExperience}+ años
            </div>
            <div className="text-sm text-ink/80">
              construyendo la confianza de nuestros clientes.
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="eyebrow text-accent-dark">Por qué elegirnos</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            No somos el contratista más barato. Somos el que hace las cosas bien.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Construir su casa es una de las decisiones más importantes de su
            vida. Por eso trabajamos con calidad, orden y comunicación en cada
            etapa.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {site.differentiators.map((item) => (
              <div key={item.title} className="border-t border-ink/15 pt-4">
                <dt className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
