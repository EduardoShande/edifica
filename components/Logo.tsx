import { site } from "@/lib/site";

/**
 * Brand lockup: a small architectural building mark (always amber, so it
 * reads on both the dark hero and light sections) + the wordmark, whose
 * colour adapts to the surface via `tone`.
 */
export default function Logo({
  tone = "dark",
  size = "md",
}: {
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  const iconSize = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const textSize = size === "sm" ? "text-lg" : "text-2xl";
  return (
    <span className="flex items-center gap-2">
      <svg
        viewBox="0 0 32 32"
        className={`${iconSize} shrink-0 text-accent`}
        fill="currentColor"
        aria-hidden
      >
        {/* left tower */}
        <path d="M4 29V15l7-4v18z" />
        {/* right tower */}
        <path d="M13 29V9h9v20z" />
        {/* window notches (cut with surface tone would vary, so use ink dots) */}
        <rect x="16" y="13" width="2.4" height="2.4" fill="#14181d" />
        <rect x="16" y="18" width="2.4" height="2.4" fill="#14181d" />
      </svg>
      <span
        className={`font-display ${textSize} font-semibold tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {site.brandShort}
        <span className="text-accent">.</span>
      </span>
    </span>
  );
}
