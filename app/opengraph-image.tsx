import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Social share preview (1200x630). This is what shows up as the rich card
 * whenever the site link is shared on WhatsApp, Facebook, or Instagram,
 * our primary distribution channels. Generated on the fly, no image asset.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brand} | ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#14181d",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "18px",
              backgroundColor: "#e08a1e",
              color: "#14181d",
              fontSize: "48px",
              fontWeight: 700,
            }}
          >
            {site.brandShort.charAt(0)}
          </div>
          <div style={{ color: "#ffffff", fontSize: "34px", fontWeight: 700 }}>
            {site.brand}
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {site.tagline}
          </div>
          <div style={{ display: "flex", width: "120px", height: "8px", backgroundColor: "#e08a1e", borderRadius: "4px" }} />
        </div>

        {/* Bottom: trust line */}
        <div style={{ display: "flex", color: "#e08a1e", fontSize: "30px", fontWeight: 600 }}>
          {site.yearsExperience}+ años · {site.city}
        </div>
      </div>
    ),
    { ...size },
  );
}
