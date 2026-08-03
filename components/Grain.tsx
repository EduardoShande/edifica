/**
 * Subtle film-grain overlay. Flat digital gradients read "AI-generated";
 * a touch of noise makes dark/photographic sections feel tactile and printed.
 * Purely decorative, non-interactive.
 */
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Grain({ opacity = 0.14 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: `url("${NOISE}")`,
        backgroundSize: "170px 170px",
      }}
    />
  );
}
