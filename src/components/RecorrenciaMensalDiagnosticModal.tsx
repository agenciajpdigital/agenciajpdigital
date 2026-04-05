import { useState } from "react";
import { X, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface RecorrenciaMensalDiagnosticModalProps {
  open: boolean;
  onClose: () => void;
}

const fields = [
  { key: "nome", label: "Seu nome", type: "text" as const, placeholder: "Nome completo" },
  { key: "empresa", label: "Nome da empresa", type: "text" as const, placeholder: "Ex: Clínica Saúde Total" },
  { key: "cidadeBairro", label: "Cidade / Bairro", type: "text" as const, placeholder: "Ex: Fortaleza – Aldeota" },
  { key: "linkMaps", label: "Link do Google Maps (se tiver)", type: "text" as const, placeholder: "Cole o link aqui (opcional)", required: false },
  { key: "whatsapp", label: "WhatsApp", type: "text" as const, placeholder: "(85) 99999-9999" },
  {
    key: "objetivo",
    label: "Objetivo principal",
    type: "select" as const,
    options: [
      "Mais ligações",
      "Mais rotas",
      "Mais mensagens",
      "Mais visibilidade",
    ],
  },
];

const RecorrenciaMensalDiagnosticModal = ({ open, onClose }: RecorrenciaMensalDiagnosticModalProps) => {
  const [data, setData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const setValue = (key: string, val: string) => setData({ ...data, [key]: val });

  const canSubmit = data.nome?.trim() && data.empresa?.trim() && data.whatsapp?.trim() && data.objetivo?.trim();

  const whatsappMsg = `Olá! Tenho interesse no Plano de Recorrência Mensal.\n\nNome: ${data.nome || "-"}\nEmpresa: ${data.empresa || "-"}\nCidade/Bairro: ${data.cidadeBairro || "-"}\nLink Maps: ${data.linkMaps || "Não informado"}\nWhatsApp: ${data.whatsapp || "-"}\nObjetivo: ${data.objetivo || "-"}`;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const reset = () => {
    setData({});
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
        className="relative bg-card border border-border rounded-2xl w-full max-w-lg p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto"
      >
        <button onClick={reset} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Fechar">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-lg font-heading font-bold mb-1">Pedir diagnóstico – Plano Mensal</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Preencha os dados abaixo e envie pelo WhatsApp para receber seu plano sob medida.
            </p>

            <div className="space-y-4">
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{f.label}</label>
                  {f.type === "text" ? (
                    <input
                      value={data[f.key] || ""}
                      onChange={(e) => setValue(f.key, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {f.options!.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setValue(f.key, opt)}
                          className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                            data[f.key] === opt
                              ? "bg-primary/15 border-primary text-primary"
                              : "bg-muted border-border text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity"
            >
              Enviar diagnóstico <ArrowRight size={16} />
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <CheckCircle className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-xl font-heading font-bold mb-2">Tudo pronto!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Agora envie suas informações pelo WhatsApp para agilizar o atendimento.
            </p>
            <a
              href={`https://wa.me/5585992113249?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#fff] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Enviar no WhatsApp
            </a>
            <button onClick={reset} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">
              Fechar
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RecorrenciaMensalDiagnosticModal;
