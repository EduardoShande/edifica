import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Cookies y Uso | ${site.brand}`,
  description: `Cómo el sitio web de ${site.brand} utiliza cookies.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies y Uso" updated="2 de agosto de 2026">
      <p>
        Esta política explica cómo el sitio web de <strong>{site.brand}</strong>{" "}
        utiliza cookies y tecnologías similares.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en su
        dispositivo para recordar información, como sus preferencias o su
        actividad de navegación.
      </p>

      <h2>2. Cookies que utilizamos actualmente</h2>
      <p>
        Actualmente este sitio <strong>no utiliza cookies de seguimiento,
        publicidad ni analítica de terceros.</strong> Solo podrían emplearse
        cookies estrictamente técnicas necesarias para el funcionamiento básico
        del sitio, que no requieren consentimiento.
      </p>

      <h2>3. Uso futuro de analítica o publicidad</h2>
      <p>
        Si en el futuro incorporamos herramientas como Google Analytics, Google
        Ads o el píxel de Meta (Facebook/Instagram) para medir visitas o mejorar
        nuestra publicidad, actualizaremos esta política y le solicitaremos su
        consentimiento cuando corresponda.
      </p>

      <h2>4. Cómo controlar las cookies</h2>
      <p>
        Usted puede configurar su navegador para bloquear o eliminar cookies en
        cualquier momento. Consulte la sección de ayuda de su navegador
        (Chrome, Safari, Firefox, Edge) para más detalles.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Si tiene dudas sobre esta política, escríbanos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
