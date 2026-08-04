/**
 * Central site configuration: El Motor de Clientes (Phase 1).
 *
 * This is the ONE file to edit when the real brand details are confirmed:
 * company name, WhatsApp number, services, and portfolio projects.
 * Everything on the site reads from here so nothing is hard-coded in two places.
 */

export const site = {
  // ---- Brand (working name: "Edifica", pending Eduardo's final choice) ----
  brand: "Edifica Construcciones",
  brandShort: "Edifica",
  tagline: "Construcción residencial de confianza en Santa Cruz",
  // The one-line promise that makes us different from "just another contractor":
  promise:
    "Construimos casas con la calidad que arquitectos e ingenieros respetan, con la organización, comunicación y transparencia que usted merece.",

  // ---- Hero ----
  heroTitle: "La casa que su familia habitará por generaciones.",

  // ---- Contact ----
  // WhatsApp number in full international format, digits only (no +, no spaces).
  // Bolivia country code is 591.
  whatsapp: "59167766239",
  phoneDisplay: "+591 6776 6239",
  email: "eduardoshande123@gmail.com",
  facebook: "https://www.facebook.com/edificaguerrero",
  city: "Santa Cruz de la Sierra, Bolivia",

  // Years of experience. Updates the trust messaging in one place.
  yearsExperience: 25,

  // ---- Services (Phase 1: residential; expand later per the Guerrero Group vision) ----
  services: [
    {
      title: "Construcción de casas",
      description:
        "Obra completa, de la fundación a los acabados. Todas las etapas de una vivienda residencial con calidad garantizada.",
      icon: "home",
      image: "/images/service-casas.jpg",
    },
    {
      title: "Remodelaciones",
      description:
        "Renovamos y ampliamos su vivienda: baños, cocinas y espacios completos, cuidando cada detalle.",
      icon: "hammer",
      image: "/images/service-remodelacion.jpg",
    },
    {
      title: "Obra fina y acabados",
      description:
        "Revestimientos, pisos, pintura y terminaciones que definen la diferencia entre una casa y un hogar bien hecho.",
      icon: "ruler",
      image: "/images/service-acabados.jpg",
    },
    {
      title: "Estructuras y hormigón",
      description:
        "Trabajos de hormigón, losas y estructuras ejecutados con criterio técnico y años de experiencia en obra.",
      icon: "layers",
      image: "/images/service-hormigon.jpg",
    },
  ],

  // ---- Portfolio ----
  // NOTE: images below are TEMPORARY stock photos (Unsplash, free license) used
  // only to show the design. Replace each `image` with your dad's real project
  // photos and update the titles/descriptions to the real projects.
  projects: [
    {
      title: "Vivienda contemporánea",
      type: "Casa completa",
      description: "Construcción residencial de dos plantas, entregada llave en mano.",
      image: "/images/house-1.jpg",
    },
    {
      title: "Casa familiar de autor",
      type: "Obra nueva",
      description: "Diseño moderno con acabados de madera y detalles de alta calidad.",
      image: "/images/house-2.jpg",
    },
    {
      title: "Residencia minimalista",
      type: "Obra fina",
      description: "Líneas limpias, revestimientos y terminaciones de precisión.",
      image: "/images/house-3.jpg",
    },
  ],

  // ---- The client journey (reinforces "we're organized and different") ----
  process: [
    {
      step: "1",
      title: "Contacto",
      description: "Nos escribe por WhatsApp o el formulario. Le respondemos el mismo día.",
    },
    {
      step: "2",
      title: "Visita y evaluación",
      description: "Coordinamos una visita para entender su proyecto y necesidades.",
    },
    {
      step: "3",
      title: "Presupuesto claro",
      description: "Recibe una cotización profesional, detallada y sin sorpresas.",
    },
    {
      step: "4",
      title: "Construcción",
      description: "Ejecutamos la obra con un equipo dirigido y comunicación constante.",
    },
    {
      step: "5",
      title: "Entrega",
      description: "Entregamos a tiempo y con la calidad acordada. Su satisfacción es la meta.",
    },
  ],

  // ---- Trust / differentiators ----
  differentiators: [
    {
      title: "Reputación comprobada",
      description:
        "Décadas de obras entregadas y clientes que nos recomiendan. Arquitectos e ingenieros confían en nuestro trabajo.",
    },
    {
      title: "Comunicación clara",
      description:
        "Le mantenemos informado en cada etapa. Nada de desaparecer a mitad de la obra.",
    },
    {
      title: "Presupuestos transparentes",
      description:
        "Cotizaciones detalladas y honestas. Usted sabe exactamente en qué se invierte su dinero.",
    },
    {
      title: "Equipo dirigido",
      description:
        "No improvisamos. Un equipo organizado y liderado que respeta los plazos y la calidad.",
    },
  ],

  // ---- Nosotros / historia del fundador ----
  about: {
    title: "Detrás de cada obra, décadas de oficio.",
    paragraphs: [
      "Empezamos como todos los grandes: con las manos en la obra. De albañil a contratista, aprendiendo cada etapa de una vivienda, de la fundación a los acabados, con más de 25 años levantando casas en Santa Cruz.",
      "No tenemos un título colgado en la pared; tenemos algo más difícil de conseguir: la confianza de arquitectos, ingenieros y familias que nos recomiendan porque conocen la calidad de nuestro trabajo.",
      "Nuestra experiencia incluye haber formado parte de la construcción de obras reconocidas de la ciudad, como el Hotel Cortez.",
      "Hoy dirigimos equipos y proyectos completos, con la misma exigencia del primer día y con tecnología que hace cada obra más ordenada, clara y transparente para usted.",
    ],
    image: "/images/site-wide.jpg",
  },

  // ---- Testimonios ----
  // IMPORTANT: estos son EJEMPLOS de diseño. Antes de publicar, reemplácelos por
  // testimonios REALES de clientes que hayan autorizado su uso (mostrar reseñas
  // falsas puede ser ilegal, ver Ley 453 de protección al consumidor).
  testimonials: [
    {
      quote:
        "Construyeron nuestra casa exactamente como la soñamos. Cumplieron los plazos y siempre supimos en qué etapa estábamos.",
      author: "Cliente satisfecho",
      role: "Vivienda familiar, Santa Cruz",
    },
    {
      quote:
        "Lo que más valoro es la honestidad del presupuesto. No hubo sorpresas ni costos ocultos. Trabajo serio y de calidad.",
      author: "Cliente satisfecho",
      role: "Remodelación integral",
    },
    {
      quote:
        "Como arquitecto, he trabajado con muchos contratistas. La calidad de la obra y el orden del equipo es de las mejores que he visto.",
      author: "Arquitecto",
      role: "Colaborador en obra",
    },
  ],
} as const;

/** Pre-filled WhatsApp click-to-chat link. Works with zero backend. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Hola ${site.brandShort}, vi su página web y me gustaría más información sobre un proyecto de construcción.`,
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
