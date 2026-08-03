import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import Cta from "./Cta";

export default function Portfolio() {
  const [feature, ...rest] = site.projects;

  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent-dark">Proyectos</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Obras que hablan por nosotros
          </h2>
        </div>
        <p className="max-w-sm text-ink-soft">
          Cada proyecto entregado es una familia satisfecha. Una muestra de lo
          que construimos.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-12">
        {/* Feature */}
        <ProjectCard project={feature} className="lg:col-span-8 lg:row-span-2" tall />
        {/* Supporting */}
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} className="lg:col-span-4" />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
        <p className="text-lg text-ink">
          ¿Quiere ver el portafolio completo de nuestros trabajos?
        </p>
        <Cta
          href={whatsappLink("Hola, me gustaría ver el portafolio completo de sus proyectos.")}
          className="shrink-0"
        >
          Pedirlo por WhatsApp
        </Cta>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className = "",
  tall = false,
}: {
  project: (typeof site.projects)[number];
  className?: string;
  tall?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-ink ${
        tall ? "min-h-[300px] lg:min-h-[560px]" : "min-h-[260px]"
      } ${className}`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="eyebrow text-accent">{project.type}</span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-1 max-w-md text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </article>
  );
}
