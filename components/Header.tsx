"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import Logo from "./Logo";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;
  const linkColor = solid ? "text-ink-soft" : "text-white/85";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-sand/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Row 1: brand centered */}
        <div className="relative flex h-14 items-center justify-center lg:h-16">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            <Logo tone={solid ? "dark" : "light"} size="sm" />
          </a>

          {/* Mobile menu toggle (absolute right) */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
            className={`absolute right-0 flex h-10 w-10 items-center justify-center md:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Row 2: nav centered (desktop) */}
        <nav className="hidden items-center justify-center gap-8 pb-3 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors hover:text-accent ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent"
          >
            Cotizar
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </nav>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-line bg-sand md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="flex flex-col px-5 py-2 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line/60 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 mb-3 inline-flex items-center justify-center gap-2 border border-ink py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Cotizar gratis
            <span aria-hidden>&rarr;</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
