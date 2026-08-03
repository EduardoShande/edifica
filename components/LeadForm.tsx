"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Construcción de casa nueva",
  "Remodelación",
  "Obra fina / acabados",
  "Estructuras / hormigón",
  "Otro / no estoy seguro",
];

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-white p-8 text-center shadow-sm">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent-dark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-7 w-7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">
          ¡Mensaje recibido!
        </h3>
        <p className="mt-2 text-ink-soft">
          Gracias por contactarnos. Le responderemos el mismo día. Si prefiere,
          escríbanos directamente por WhatsApp para una respuesta inmediata.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-line bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre completo" name="name" required placeholder="Su nombre" />
        <Field label="Teléfono / WhatsApp" name="phone" required type="tel" placeholder="700 00 000" />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="projectType">
          Tipo de proyecto
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full rounded-sm border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="message">
          Cuéntenos sobre su proyecto
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Ej: Quiero construir una casa de 2 plantas en la zona norte..."
          className="w-full rounded-sm border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          No se pudo enviar. Por favor intente de nuevo o escríbanos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative mt-6 flex w-full items-center justify-center gap-3 overflow-hidden border border-ink bg-ink px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          aria-hidden
          className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0"
        />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
          {status === "submitting" ? "Enviando..." : "Solicitar presupuesto"}
        </span>
        {status !== "submitting" && (
          <span
            aria-hidden
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
          >
            &rarr;
          </span>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-ink-soft">
        O escríbanos directo por{" "}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent-dark hover:underline"
        >
          WhatsApp
        </a>{" "}
        al {site.phoneDisplay}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor={name}>
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
