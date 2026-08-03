import { site } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonios" className="border-y border-line bg-sand-deep">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent-dark">Testimonios</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            La mejor prueba de nuestro trabajo es la confianza de quienes ya
            construyeron con nosotros.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col border-t-2 border-accent bg-sand p-7"
            >
              <span aria-hidden className="font-display text-5xl leading-none text-accent">
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="font-display font-semibold text-ink">
                  {t.author}
                </div>
                <div className="text-sm text-ink-soft">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
