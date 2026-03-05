import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5585992113249?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse-whatsapp hover:scale-110 transition-transform"
    >
      <MessageCircle size={28} className="text-[#fff]" />
    </a>
  );
};

export default WhatsAppFloat;
