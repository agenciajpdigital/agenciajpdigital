import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  onOpenQuiz: () => void;
}

const WhatsAppFloat = ({ onOpenQuiz }: WhatsAppFloatProps) => {
  return (
    <button
      type="button"
      onClick={onOpenQuiz}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse-whatsapp hover:scale-110 transition-transform"
    >
      <MessageCircle size={28} className="text-[#fff]" />
    </button>
  );
};

export default WhatsAppFloat;
