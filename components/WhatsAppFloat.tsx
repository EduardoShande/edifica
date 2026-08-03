import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

/** Always-visible floating WhatsApp button: the fastest path to a lead. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbanos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">
        Escríbanos
      </span>
    </a>
  );
}
