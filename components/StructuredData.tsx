import { site } from "@/lib/site";

/**
 * LocalBusiness / GeneralContractor structured data (JSON-LD).
 * This is what lets Google show us as a local construction business: the
 * exact moment a referral searches for the company and should find us.
 */
export default function StructuredData() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.brand,
    description: site.promise,
    slogan: site.tagline,
    url: base,
    telephone: `+${site.whatsapp}`,
    email: site.email,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Santa Cruz de la Sierra",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Cruz de la Sierra",
      addressRegion: "Santa Cruz",
      addressCountry: "BO",
    },
    knowsAbout: site.services.map((s) => s.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
