import { useState } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface DiagnosticModalProps {
  open: boolean;
  onClose: () => void;
}

const questions = [
  {
    label: "Qual o nome da sua empresa?",
    type: "text" as const,
    key: "empresa",
    placeholder: "Ex: Padaria do João",
  },
  {
    label: "Qual é o nicho/segmento do seu negócio?",
    type: "text" as const,
    key: "nicho",
    placeholder: "Ex: Restaurante, Clínica, Loja de roupas...",
  },
  {
    label: "Qual bairro/cidade alvo?",
    type: "text" as const,
    key: "regiao",
    placeholder: "Ex: Aldeota, Meireles, Fortaleza...",
  },
  {
    label: "Você tem Perfil da Empresa no Google verificado?",
    type: "options" as const,
    key: "perfilVerificado",
    options: ["Sim", "Não", "Não sei"],
  },
  {
    label: "Melhor horário para contato?",
    type: "options" as const,
    key: "horario",
    options: ["Manhã", "Tarde", "Noite"],
  },
  {
    label: "Quantas ligações/mês recebe pelo Google?",
    type: "options" as const,
    key: "ligacoes",
    options: ["0–5", "6–20", "21+", "Não sei"],
  },
  {
    label: "Qual seu principal objetivo?",
    type: "options" as const,
    key: "objetivo",
    options: ["Ligações", "Rotas", "WhatsApp", "Visitas ao site", "Tudo"],
  },
  {
    label: "Link do seu Google Maps (opcional)",
    type: "text" as const,
    key: "linkMaps",
    placeholder: "Cole aqui o link do seu perfil no Maps",
  },
];

const DiagnosticModal = ({ open, onClose }: DiagnosticModalProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [waFeedback, setWaFeedback] = useState(false);

  const current = questions[step];
  const isLast = step === questions.length - 1;

  const setAnswer = (val: string) => {
    setAnswers({ ...answers, [current.key]: val });
  };

  const canNext = current?.key === "linkMaps" ? true : !!answers[current?.key]?.trim();

  const next = () => {
    if (isLast) {
      setSubmitted(true);
    } else {
      setStep(step + 1);
    }
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const v = (k: string) => (answers[k]?.trim() ? answers[k] : "Não informado");

  const buildWhatsappMsg = () => {
    let msg = `Olá! Vim pelo site e quero um diagnóstico do meu Perfil no Google/Maps.

Nome da empresa: ${v("empresa")}
Nicho/Segmento: ${v("nicho")}
Região: ${v("regiao")}
Perfil verificado: ${v("perfilVerificado")}
Horário de contato: ${v("horario")}
Objetivo: ${v("objetivo")}
Ligações/mês: ${v("ligacoes")}
Link do Google Maps: ${v("linkMaps")}

Pode me orientar os próximos passos?`;
    return msg;
  };

  const sendWhatsApp = () => {
    setWaFeedback(true);
    window.open(
      `https://wa.me/5585992113249?text=${encodeURIComponent(buildWhatsappMsg())}`,
      "_blank",
      "noopener,noreferrer"
    );
    setTimeout(() => setWaFeedback(false), 2000);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={reset} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-card border border-border rounded-2xl w-full max-w-lg p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto"
      >
        <button onClick={reset} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Fechar">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mb-2">Pergunta {step + 1} de {questions.length}</p>
              <h3 className="text-lg font-heading font-semibold">{current.label}</h3>
            </div>

            {current.type === "text" ? (
              <input
                value={answers[current.key] || ""}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={current.placeholder}
                maxLength={300}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {current.options!.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setAnswer(opt)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-colors ${
                      answers[current.key] === opt
                        ? "bg-primary/15 border-primary text-primary"
                        : "bg-muted border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                disabled={step === 0}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ArrowLeft size={16} /> Voltar
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                {isLast ? "Pedir diagnóstico" : "Próxima"} <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-4">
              <button
                onClick={sendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} /> Enviar no WhatsApp
              </button>
              {waFeedback && (
                <p className="text-xs text-center text-muted-foreground mt-2">Abrindo WhatsApp…</p>
              )}
              <p className="text-[11px] text-center text-muted-foreground mt-2">
                Campos vazios serão enviados como "Não informado".
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <CheckCircle className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-xl font-heading font-bold mb-2">Obrigado!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Suas respostas foram registradas. Envie agora pelo WhatsApp para agilizar o atendimento.
            </p>
            <button
              onClick={sendWhatsApp}
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#fff] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Enviar respostas no WhatsApp
            </button>
            {waFeedback && (
              <p className="text-xs text-muted-foreground mt-2">Abrindo WhatsApp…</p>
            )}
            <button onClick={reset} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">
              Fechar
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DiagnosticModal;
