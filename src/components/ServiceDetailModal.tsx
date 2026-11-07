import { useEffect } from "react";
import { X, MessageCircle, ArrowRight, ExternalLink, CheckCircle2, Info } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuiz: () => void;
}

const ServiceDetailModal = ({ service, onClose, onOpenQuiz }: ServiceDetailModalProps) => {
  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative z-10 w-full sm:max-w-2xl max-h-[92dvh] overflow-y-auto bg-card border border-border sm:rounded-2xl rounded-t-2xl shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={service.name}
      >
        <button
          onClick={onClose}
          aria-label="Fechar detalhes do serviço"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/70 border border-border text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={18} />
        </button>

        {/* Imagem inteira, sem corte */}
        {service.image ? (
          <a
            href={service.image}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir imagem ampliada"
            className="block bg-muted border-b border-border p-4 sm:p-6"
          >
            <img
              src={service.image}
              alt={service.alt || service.name}
              className="w-full max-h-[46vh] object-contain mx-auto"
              loading="lazy"
            />
            <span className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <ExternalLink size={12} /> Clique na imagem para ampliar
            </span>
          </a>
        ) : (
          <div className="bg-muted border-b border-border p-6 flex items-center justify-center">
            <service.icon size={56} className="text-primary" aria-hidden="true" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 pr-8">
            {service.name}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            {service.description}
          </p>

          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
            O que está incluso
          </p>
          <ul className="space-y-2.5 mb-6">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {service.note && (
            <p className="flex items-start gap-2 text-xs text-muted-foreground bg-muted border border-border rounded-lg p-3 mb-6">
              <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>{service.note}</span>
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsAppLink(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#fff] px-5 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> Falar sobre este serviço
            </a>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenQuiz();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors"
            >
              Pedir diagnóstico <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetailModal;
