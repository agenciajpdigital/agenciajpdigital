import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import contactSupport from "@/assets/contact-support.jpg";

interface ContactSectionProps {
  onOpenQuiz?: () => void;
}

const ContactSection = ({ onOpenQuiz }: ContactSectionProps) => {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    empresa: "",
    bairro: "",
    objetivo: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) {
      toast.error("Preencha pelo menos nome e WhatsApp.");
      return;
    }
    const msg = `Olá! Quero um diagnóstico.\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nEmpresa: ${form.empresa}\nLocal: ${form.bairro}\nObjetivo: ${form.objetivo}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5585992113249?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Preencha o formulário e nossa equipe entra em contato.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
          {/* Image side */}
          <div className="hidden lg:block lg:col-span-2 rounded-xl overflow-hidden border border-border sticky top-28">
            <img
              src={contactSupport}
              alt="Consultor de marketing digital em Fortaleza realizando atendimento ao cliente"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome *" maxLength={100}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp *" maxLength={20}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Empresa" maxLength={100}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input name="bairro" value={form.bairro} onChange={handleChange} placeholder="Bairro / Cidade" maxLength={100}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <select name="objetivo" value={form.objetivo} onChange={handleChange}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
              <option value="">Objetivo</option>
              <option value="Mais ligações">Mais ligações</option>
              <option value="Mais rotas no Maps">Mais rotas no Maps</option>
              <option value="Mais mensagens no WhatsApp">Mais mensagens no WhatsApp</option>
              <option value="Criar perfil do Google">Criar perfil do Google</option>
              <option value="Criar site">Criar site</option>
              <option value="Outro">Outro</option>
            </select>
            <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Mensagem (opcional)" rows={3} maxLength={1000}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex-1">
                <Send size={16} /> Enviar e pedir diagnóstico
              </button>
              <button type="button" onClick={onOpenQuiz}
                className="flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors flex-1">
                <MessageCircle size={16} /> Falar no WhatsApp
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
