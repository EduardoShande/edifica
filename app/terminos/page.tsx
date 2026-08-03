import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Términos y Condiciones | ${site.brand}`,
  description: `Términos y condiciones de uso del sitio web de ${site.brand}.`,
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y Condiciones" updated="2 de agosto de 2026">
      <p>
        Bienvenido al sitio web de <strong>{site.brand}</strong> (“nosotros”,
        “la empresa”). Al acceder y utilizar este sitio usted acepta los
        presentes Términos y Condiciones. Si no está de acuerdo con ellos, le
        pedimos que no utilice el sitio.
      </p>

      <h2>1. Objeto del sitio</h2>
      <p>
        Este sitio tiene una finalidad informativa: presentar nuestros
        servicios de construcción y remodelación en {site.city}, mostrar
        proyectos y permitir que usted solicite información o un presupuesto sin
        costo. El sitio no realiza ventas ni cobros en línea.
      </p>

      <h2>2. Uso permitido</h2>
      <p>Al utilizar el sitio, usted se compromete a:</p>
      <ul>
        <li>Proporcionar información veraz en los formularios de contacto.</li>
        <li>No utilizar el sitio con fines ilícitos o fraudulentos.</li>
        <li>
          No intentar dañar, sobrecargar o acceder sin autorización a nuestros
          sistemas.
        </li>
      </ul>

      <h2>3. Presupuestos y cotizaciones</h2>
      <p>
        Los presupuestos, precios o estimaciones que le entreguemos son de
        carácter referencial y no constituyen una oferta vinculante. Todo
        proyecto se formaliza mediante un contrato escrito firmado por ambas
        partes, donde se detallan alcance, precio, plazos y condiciones.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        El nombre <strong>{site.brand}</strong>, el logotipo, los textos y el
        diseño del sitio son propiedad de la empresa. Las fotografías de
        proyectos pertenecen a sus respectivos autores. No está permitido
        reproducir el contenido sin autorización previa.
      </p>

      <h2>5. Enlaces y servicios de terceros</h2>
      <p>
        El sitio puede enlazar a servicios de terceros (por ejemplo, WhatsApp).
        No somos responsables por las políticas ni el contenido de dichos
        servicios; le recomendamos revisar sus términos.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        Procuramos que la información del sitio sea correcta y esté actualizada,
        pero no garantizamos que esté libre de errores. No nos hacemos
        responsables por decisiones tomadas únicamente sobre la base del
        contenido del sitio antes de firmar un contrato formal.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        Podemos actualizar estos Términos en cualquier momento. La versión
        vigente será siempre la publicada en esta página, con su fecha de
        actualización.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        Estos Términos se rigen por las leyes del Estado Plurinacional de
        Bolivia. Cualquier controversia se someterá a los tribunales de{" "}
        {site.city}.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para cualquier consulta sobre estos Términos, escríbanos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> o al WhatsApp{" "}
        {site.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}
