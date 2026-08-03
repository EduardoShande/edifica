import { site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import Cta from "./Cta";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.tagline}. {site.city}.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm md:col-span-1">
            <span className="eyebrow text-white/40">Navegación</span>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm md:col-span-1">
            <span className="eyebrow text-white/40">Contacto</span>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              WhatsApp {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <Cta href={whatsappLink()} tone="light" className="mt-3 w-fit">
              Cotizar gratis
            </Cta>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.brand}. Todos los derechos
            reservados.
          </span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/terminos" className="hover:text-accent">
              Términos y Condiciones
            </a>
            <a href="/privacidad" className="hover:text-accent">
              Política de Privacidad
            </a>
            <a href="/cookies" className="hover:text-accent">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
