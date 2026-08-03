import type { ReactNode } from "react";

type CtaProps = {
  href: string;
  children: ReactNode;
  /** dark = sits on a light surface (ink text); light = sits on a dark surface (white text) */
  tone?: "dark" | "light";
  /** fill = outlined box with amber slide-fill on hover; link = text + arrow, no box */
  variant?: "fill" | "link";
  external?: boolean;
  className?: string;
};

/**
 * Custom call-to-action. Not a generic rounded button: a sharp-cornered,
 * uppercase, letter-spaced control. The "fill" variant has an amber panel that
 * slides up on hover while the arrow advances — an editorial, architectural feel.
 */
export default function Cta({
  href,
  children,
  tone = "dark",
  variant = "fill",
  external = true,
  className = "",
}: CtaProps) {
  const ext = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (variant === "link") {
    const color = tone === "light" ? "text-white" : "text-ink";
    return (
      <a
        href={href}
        {...ext}
        className={`group inline-flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] ${color} transition-colors hover:text-accent ${className}`}
      >
        {children}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </a>
    );
  }

  const border = tone === "light" ? "border-white/50" : "border-ink";
  const color = tone === "light" ? "text-white" : "text-ink";
  return (
    <a
      href={href}
      {...ext}
      className={`group relative inline-flex items-center gap-3 overflow-hidden border ${border} px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] ${color} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
        {children}
      </span>
      <span
        aria-hidden
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
      >
        &rarr;
      </span>
    </a>
  );
}
