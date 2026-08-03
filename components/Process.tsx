import { site } from "@/lib/site";

export default function Process() {
  return (
    <section id="proceso" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">Cómo trabajamos</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Un proceso claro, sin sorpresas
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Así de simple y ordenado es trabajar con nosotros, desde el primer
            mensaje hasta la entrega de su obra.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {site.process.map((step) => (
            <li key={step.step} className="bg-ink p-7">
              <div className="font-display text-5xl font-semibold text-accent">
                {step.step}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
