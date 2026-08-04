import Image from "next/image";
import Grain from "./Grain";

export default function ImageBand() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[60vh] w-full">
        <Image
          src="/images/reales/band-construccion.jpg"
          alt="Edificio en construcción por Edifica Construcciones"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/55" />
        <Grain />

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-center px-5 sm:px-8">
          <blockquote className="max-w-3xl">
            <p className="font-display text-3xl font-medium italic leading-snug text-white sm:text-5xl">
              “Cada casa la levanta un equipo dirigido, con oficio y a
              conciencia. No improvisamos.”
            </p>
            <footer className="mt-6 text-white/70">
              <span className="text-sm font-medium uppercase tracking-widest">
                Nuestra forma de trabajar
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
