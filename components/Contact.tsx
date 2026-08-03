import { site } from "@/lib/site";
import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-sand-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-accent-dark">Contacto</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Cuéntenos su proyecto
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Responder es gratis y sin compromiso. Cuéntenos qué necesita y le
            daremos una orientación honesta y un presupuesto claro.
          </p>

          <dl className="mt-10 space-y-6">
            <div className="flex items-center gap-4 border-t border-line pt-5">
              <span className="eyebrow text-ink-soft">WhatsApp / Tel</span>
              <span className="font-display text-xl text-ink">
                {site.phoneDisplay}
              </span>
            </div>
            <div className="flex items-center gap-4 border-t border-line pt-5">
              <span className="eyebrow text-ink-soft">Zona</span>
              <span className="font-display text-xl text-ink">{site.city}</span>
            </div>
          </dl>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
