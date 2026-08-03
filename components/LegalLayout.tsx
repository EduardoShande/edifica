import Link from "next/link";
import { site } from "@/lib/site";
import Footer from "./Footer";

/** Simple, readable shell for legal / long-form pages (solid header, no hero). */
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-sand/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 lg:h-20">
          <Link
            href="/"
            className="font-display text-2xl font-semibold tracking-tight text-ink"
          >
            {site.brandShort}
            <span className="text-accent">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="eyebrow text-accent-dark">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ink-soft">
            Última actualización: {updated}
          </p>

          <div className="legal mt-10">{children}</div>

          <div className="mt-14 rounded-sm border border-line bg-sand-deep p-5 text-sm text-ink-soft">
            <strong className="text-ink">Nota:</strong> Este documento es una
            plantilla general y no constituye asesoramiento legal. Le
            recomendamos que un abogado en Bolivia lo revise y adapte antes de
            su uso definitivo.
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
