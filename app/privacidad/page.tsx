import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${site.brand}`,
  description: `Cómo ${site.brand} recopila, usa y protege sus datos personales.`,
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="2 de agosto de 2026">
      <p>
        En <strong>{site.brand}</strong> respetamos su privacidad. Esta política
        explica qué datos personales recopilamos a través de este sitio, con qué
        finalidad y cómo los protegemos.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        {site.brand}, con domicilio en {site.city}. Contacto:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. WhatsApp{" "}
        {site.phoneDisplay}.
      </p>

      <h2>2. Qué datos recopilamos</h2>
      <p>
        Recopilamos únicamente los datos que usted nos proporciona
        voluntariamente a través del formulario de contacto:
      </p>
      <ul>
        <li>Nombre completo.</li>
        <li>Número de teléfono / WhatsApp.</li>
        <li>Tipo de proyecto y el mensaje que decida enviarnos.</li>
      </ul>
      <p>
        No recopilamos datos sensibles ni información de pago a través del
        sitio.
      </p>

      <h2>3. Con qué finalidad los usamos</h2>
      <ul>
        <li>Responder a su consulta y coordinar una visita.</li>
        <li>Elaborar y enviarle un presupuesto.</li>
        <li>Dar seguimiento a su proyecto y mantener el contacto comercial.</li>
      </ul>
      <p>
        No utilizamos sus datos para fines distintos a los aquí descritos sin su
        consentimiento.
      </p>

      <h2>4. Base para el tratamiento</h2>
      <p>
        Tratamos sus datos sobre la base de su consentimiento, otorgado al
        enviar el formulario, y de nuestro interés legítimo en atender su
        solicitud.
      </p>

      <h2>5. Con quién compartimos sus datos</h2>
      <p>
        <strong>No vendemos ni alquilamos sus datos.</strong> Podemos utilizar
        herramientas de terceros para gestionar los mensajes (por ejemplo,
        servicios de mensajería como WhatsApp o plataformas de automatización),
        que procesan la información únicamente para permitirnos contactarle.
      </p>

      <h2>6. Conservación</h2>
      <p>
        Conservamos sus datos durante el tiempo necesario para atender su
        solicitud y, si se convierte en cliente, durante la relación comercial y
        el plazo que exija la normativa aplicable. Luego los eliminamos o
        anonimizamos.
      </p>

      <h2>7. Sus derechos</h2>
      <p>
        De acuerdo con el derecho a la privacidad reconocido en la Constitución
        Política del Estado Plurinacional de Bolivia (incluida la acción de
        protección de privacidad o <em>habeas data</em>), usted puede solicitar
        en cualquier momento:
      </p>
      <ul>
        <li>Acceder a los datos que tenemos sobre usted.</li>
        <li>Rectificar datos inexactos.</li>
        <li>Solicitar la eliminación de sus datos.</li>
        <li>Retirar su consentimiento.</li>
      </ul>
      <p>
        Para ejercer estos derechos, escríbanos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas razonables para proteger su información frente a
        accesos no autorizados. Ningún sistema es 100% infalible, pero nos
        comprometemos a actuar con diligencia.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Este sitio está dirigido a personas mayores de edad. No recopilamos
        conscientemente datos de menores.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política. La versión vigente será siempre la
        publicada en esta página, con su fecha de actualización.
      </p>
    </LegalLayout>
  );
}
