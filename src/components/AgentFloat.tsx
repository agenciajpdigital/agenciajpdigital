import { useState, useEffect } from "react";
import { X, MessageSquare, ExternalLink, MapPin, Star, Phone, Globe, Send, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import agentAvatar from "@/assets/agente-vendedor-jp.png";

const WHATSAPP_NUMBER = "5585992113249";
const AGENT_LINK = "https://chatgpt.com/g/g-69c098d9fbc4819193c81eba0a16a4fe-vendedor-agencia-jp-digital";

const buildWhatsAppLink = (servico?: string) => {
  const intro = servico
    ? `Olá! Vim do site e tenho interesse no serviço: ${servico}.`
    : "Olá! Vim do site e quero um diagnóstico do meu negócio no Google/Maps.";
  const msg = `${intro}\n\nNicho: ____.\nBairro/Cidade: ____.\nTenho Perfil do Google? (Sim/Não/Não sei).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const buildGreeting = (servico?: string) => {
  if (!servico) {
    return "Olá! Sou o Agente JP, consultor local da JP Digital. Me diga seu nicho e bairro/cidade que eu te indico o melhor caminho para crescer no Google.";
  }
  return `Olá! Vi que você tem interesse em "${servico}". Sou o Agente JP, consultor local da JP Digital. Posso te explicar como esse serviço funciona, os benefícios reais (visibilidade local, ligações, rotas e mensagens) e qual é o próximo passo ideal pro seu negócio. Me conta: qual é o seu nicho e em qual bairro/cidade você atua?`;
};

const quickActions = [
  { label: "Quero aparecer no Google Maps", icon: MapPin, msg: "Quero aparecer melhor no Google Maps. Meu nicho é ____ e eu atuo em ____." },
  { label: "Criar meu Perfil do Google", icon: Globe, msg: "Ainda não tenho Perfil da Empresa no Google. Como funciona a criação e verificação?" },
  { label: "Melhorar avaliações", icon: Star, msg: "Quero aumentar e responder avaliações para melhorar reputação. Qual o melhor plano?" },
  { label: "Mais ligações e rotas", icon: Phone, msg: "Quero aumentar ligações/rotas/mensagens pelo Google. O que precisa ajustar no perfil?" },
  { label: "Quero um site", icon: Globe, msg: "Quero um site otimizado para conversão e SEO local. Como vocês trabalham isso?" },
  { label: "Falar no WhatsApp", icon: Send, msg: "__whatsapp__" },
];

interface AgentFloatProps {
  onOpenQuiz: () => void;
}

const AgentFloat = ({ onOpenQuiz }: AgentFloatProps) => {
  const [open, setOpen] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contextCopied, setContextCopied] = useState(false);

  // Listen to global event so any service button can trigger the agent
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ service?: string }>).detail;
      setSelectedService(detail?.service || null);
      setContextCopied(false);
      setOpen(true);
    };
    window.addEventListener("openAgentJP", handler as EventListener);
    return () => window.removeEventListener("openAgentJP", handler as EventListener);
  }, []);

  const greeting = buildGreeting(selectedService || undefined);
  const initialContext = selectedService
    ? `Serviço selecionado pelo cliente no site: ${selectedService}.\n\n${greeting}`
    : greeting;

  const handleQuickAction = (action: typeof quickActions[0]) => {
    if (action.msg === "__whatsapp__") {
      window.open(buildWhatsAppLink(selectedService || undefined), "_blank");
      return;
    }
    navigator.clipboard.writeText(action.msg).then(() => {
      setCopiedIdx(quickActions.indexOf(action));
      setTimeout(() => setCopiedIdx(null), 2000);
    });
    window.open(AGENT_LINK, "_blank");
  };

  const handleCopyContext = () => {
    navigator.clipboard.writeText(initialContext).then(() => {
      setContextCopied(true);
      setTimeout(() => setContextCopied(false), 2500);
    });
  };

  const handleOpenAgent = () => {
    // Copy context automatically so the user can paste it into the chat
    if (selectedService) {
      navigator.clipboard.writeText(initialContext).catch(() => {});
    }
    window.open(AGENT_LINK, "_blank");
  };

  return (
    <>
      {/* Floating Button - bottom left */}
      <button
        onClick={() => { setSelectedService(null); setOpen(true); }}
        title="Tire dúvidas e descubra o melhor serviço"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-4 py-3 shadow-lg hover:scale-105 transition-transform md:px-5 md:py-3"
      >
        <img src={agentAvatar} alt="Agente JP" className="w-8 h-8 rounded-full object-cover border-2 border-[hsl(var(--primary-foreground))]" />
        <span className="text-[hsl(var(--primary-foreground))] text-sm font-semibold hidden sm:inline">Agente JP</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-md max-h-[100dvh] sm:max-h-[85vh] bg-[hsl(var(--card))] border border-[hsl(var(--border))] sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-[hsl(var(--border))]">
                <img src={agentAvatar} alt="Agente JP" className="w-12 h-12 rounded-full object-cover border-2 border-[hsl(var(--primary))]" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[hsl(var(--foreground))]">Agente JP <span className="text-[hsl(var(--muted-foreground))] font-normal text-sm">(Consultor Local)</span></h3>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Me diga seu nicho e bairro/cidade. Eu te indico o melhor caminho.</p>
                </div>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-[hsl(var(--muted))] transition-colors">
                  <X size={18} className="text-[hsl(var(--muted-foreground))]" />
                </button>
              </div>

              {/* Selected service badge */}
              {selectedService && (
                <div className="px-4 pt-3">
                  <div className="flex items-center justify-between gap-2 rounded-lg border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/10 px-3 py-2">
                    <p className="text-xs sm:text-sm text-[hsl(var(--foreground))] truncate">
                      <span className="font-semibold text-[hsl(var(--primary))]">Serviço selecionado:</span>{" "}
                      <span className="font-medium">{selectedService}</span>
                    </p>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] shrink-0"
                      aria-label="Limpar serviço selecionado"
                    >
                      Limpar
                    </button>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Personalized greeting */}
                <div className="rounded-xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))] p-3 flex gap-3">
                  <img src={agentAvatar} alt="" className="w-8 h-8 rounded-full object-cover shrink-0" />
                  <p className="text-sm text-[hsl(var(--foreground))] leading-relaxed">{greeting}</p>
                </div>

                {/* Quick Actions */}
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-2 font-medium">Atalhos rápidos:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickAction(action)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors"
                      >
                        <action.icon size={13} />
                        {copiedIdx === i ? "Copiado! Cole no chat →" : action.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agent Link Area */}
                <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-5 text-center space-y-3">
                  <MessageSquare size={32} className="mx-auto text-[hsl(var(--primary))]" />
                  <p className="text-sm text-[hsl(var(--foreground))] font-medium">Converse com o Agente JP</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">
                    {selectedService
                      ? "Vamos copiar o contexto do serviço escolhido. Cole no chat ao abrir."
                      : "Clique para abrir o chat e tirar suas dúvidas sobre SEO local, Google Maps e mais."}
                  </p>

                  {selectedService && (
                    <button
                      onClick={handleCopyContext}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-xs font-medium hover:border-[hsl(var(--primary))] transition-colors"
                    >
                      {contextCopied ? <><Check size={14} /> Contexto copiado</> : <><Copy size={14} /> Copiar contexto inicial</>}
                    </button>
                  )}

                  <div>
                    <button
                      onClick={handleOpenAgent}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      Abrir chat do Agente
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[hsl(var(--border))] p-3 flex gap-2">
                <button
                  onClick={() => { setOpen(false); onOpenQuiz(); }}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Pedir diagnóstico
                </button>
                <a
                  href={buildWhatsAppLink(selectedService || undefined)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#25D366] text-[#fff] text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper exportado para qualquer componente acionar o agente com um serviço
export const openAgentJP = (service?: string) => {
  window.dispatchEvent(new CustomEvent("openAgentJP", { detail: { service } }));
};

export default AgentFloat;
