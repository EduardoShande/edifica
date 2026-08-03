import type { Metadata } from "next";
import { IBM_Plex_Sans, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-sans-var",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const displayFont = Archivo({
  variable: "--font-display-var",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  alternates: { canonical: "/" },
  title: `${site.brand} | ${site.tagline}`,
  description: site.promise,
  applicationName: site.brand,
  authors: [{ name: site.brand }],
  creator: site.brand,
  publisher: site.brand,
  category: "construction",
  keywords: [
    "constructora Santa Cruz",
    "constructora en Santa Cruz de la Sierra",
    "construcción de casas Santa Cruz Bolivia",
    "empresa constructora Bolivia",
    "contratista Santa Cruz",
    "remodelaciones Santa Cruz",
    "construir casa Bolivia",
    "albañil Santa Cruz",
    "obra fina y acabados Santa Cruz",
  ],
  openGraph: {
    title: `${site.brand} | ${site.tagline}`,
    description: site.promise,
    siteName: site.brand,
    locale: "es_BO",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | ${site.tagline}`,
    description: site.promise,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Paste your Google Search Console verification code here once you register
  // the site (Search Console → Añadir propiedad → Etiqueta HTML).
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
