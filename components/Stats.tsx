import { site } from "@/lib/site";

const stats = [
  { value: `${site.yearsExperience}+`, label: "Años de experiencia en obra" },
  { value: "100%", label: "Clientes que nos recomiendan" },
  { value: "3–5", label: "Personas por equipo dirigido" },
  { value: "A tiempo", label: "Entregas cumplidas" },
];

export default function Stats() {
  return (
    <section className="border-b border-line bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-8 sm:py-10 ${i >= 2 ? "border-t border-line lg:border-t-0" : ""}`}
          >
            <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1.5 text-sm leading-snug text-ink-soft">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
