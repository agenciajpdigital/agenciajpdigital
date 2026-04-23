import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, TrendingUp, Shield, Phone, MessageCircle,
  Search, Settings, Star, BarChart3, CheckCircle, Users,
  FileText, Image, HelpCircle, ArrowRight, Link2, RefreshCw
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DiagnosticModal from "@/components/DiagnosticModal";
import RecorrenciaMensalDiagnosticModal from "@/components/RecorrenciaMensalDiagnosticModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/5585992113249?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20de%20Recorr%C3%AAncia%20Mensal.";

const paraQuem = [
  { icon: MapPin, text: "Negócios locais que querem aparecer mais no Google Maps" },
  { icon: Settings, text: "Empresas com perfil incompleto ou desatualizado" },
  { icon: RefreshCw, text: "Quem precisa de constância sem depender de \"postar quando dá\"" },
  { icon: TrendingUp, text: "Quem quer melhorar confiança e conversão no perfil" },
];

const incluso = [
  { icon: Search, title: "Auditoria leve mensal", desc: "Diagnóstico mensal com ajustes prioritários para manter o perfil em evolução." },
  { icon: Settings, title: "Ajustes em categorias e atributos", desc: "Categorias, serviços, descrição e atributos atualizados quando necessário." },
  { icon: TrendingUp, title: "Otimização de serviços/produtos", desc: "Títulos, descrições e palavras-chave locais otimizados para conversão." },
  { icon: FileText, title: "Rotina de atualizações e conteúdo", desc: "Postagens e atualizações conforme necessidade para manter o perfil ativo." },
  { icon: Image, title: "Orientação de fotos e melhorias visuais", desc: "Curadoria e orientação de conteúdos visuais para um perfil mais atrativo." },
  { icon: HelpCircle, title: "Implementação e manutenção de FAQ", desc: "Perguntas e respostas configuradas e mantidas no perfil." },
  { icon: Star, title: "Recomendações para avaliações", desc: "Respostas sugeridas para avaliações quando aplicável." },
  { icon: Link2, title: "Revisão de links e consistência (NAP)", desc: "Links, horários, botões e informações sempre consistentes e corretos." },
  { icon: BarChart3, title: "Relatório mensal simples", desc: "Visitas, ligações, rotas, mensagens e principais ações do mês." },
];

const etapas = [
  { step: "01", title: "Diagnóstico inicial e prioridades", desc: "Análise do perfil e definição das prioridades do mês." },
  { step: "02", title: "Implementação das melhorias", desc: "Execução dos ajustes, otimizações e atualizações planejadas." },
  { step: "03", title: "Acompanhamento e ajustes contínuos", desc: "Monitoramento de métricas e ajustes ao longo do mês." },
  { step: "04", title: "Relatório + plano do próximo mês", desc: "Entrega do relatório mensal e planejamento do próximo ciclo." },
];

const diferenciais = [
  { icon: Users, title: "Processo consultivo e transparente", desc: "Você acompanha cada etapa e entende o que está sendo feito." },
  { icon: Shield, title: "Ações alinhadas às diretrizes do Google", desc: "Boas práticas oficiais, sem atalhos arriscados." },
  { icon: TrendingUp, title: "Foco em conversão", desc: "Não basta aparecer — o objetivo é gerar ligações, rotas e mensagens." },
  { icon: MessageCircle, title: "Suporte via WhatsApp", desc: "Atendimento direto e ágil, sem chatbots ou filas de espera." },
];

const faqItems = [
  { q: "Em quanto tempo posso notar melhorias?", a: "Os primeiros sinais costumam aparecer entre 2 e 6 semanas, mas resultados consistentes dependem de constância, concorrência e nicho." },
  { q: "Preciso ter loja física?", a: "Não necessariamente. Profissionais que atendem em domicílio ou por área de cobertura também podem ter presença no Google Maps." },
  { q: "Vocês alteram o nome da empresa?", a: "Não. O nome do perfil segue as diretrizes do Google e deve refletir exatamente o nome real do negócio." },
  { q: "O que eu preciso enviar (fotos/serviços/informações)?", a: "Sim, sua colaboração com fotos reais, lista de serviços e informações atualizadas é essencial para um perfil completo e autêntico." },
  { q: "Tem fidelidade?", a: "Não. O plano é mensal e pode ser cancelado a qualquer momento. Sem fidelidade obrigatória." },
  { q: "Posso migrar para o plano trimestral depois?", a: "Sim! Você pode migrar para o plano trimestral quando quiser, aproveitando um ciclo mais longo de otimizações." },
];

const RecorrenciaMensal = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [diagOpen, setDiagOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenQuiz={() => setQuizOpen(true)} />

      {/* A) HERO */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/20">
              Plano Mensal · Sob consulta
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Recorrência Mensal
              <span className="text-primary block mt-2">(Sob consulta)</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Um plano de acompanhamento contínuo para fortalecer sua presença no Google Maps, melhorar o posicionamento local e aumentar as ações que viram clientes.
            </p>

            <ul className="flex flex-col sm:flex-row justify-center gap-4 mb-10 text-sm text-foreground">
              {[
                "Otimizações contínuas e ajustes estratégicos",
                "Conteúdo e atualizações para manter o perfil ativo",
                "Acompanhamento de métricas e melhorias mensais",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5">
                  <CheckCircle className="text-primary shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setDiagOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Pedir diagnóstico <ArrowRight size={16} />
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                <MessageCircle size={18} /> Agendar conversa
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* B) PARA QUEM É */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Para quem é esse plano?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Se você se identifica com algum dos cenários abaixo, o plano mensal foi pensado para o seu negócio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {paraQuem.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
              >
                <item.icon className="text-primary shrink-0 mt-0.5" size={22} />
                <p className="text-sm text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C) O QUE ESTÁ INCLUSO */}
      <section className="py-20 md:py-28 circuit-bg border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O que está incluso</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Entregas mensais — ações práticas e contínuas para manter e fortalecer sua presença local.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {incluso.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <item.icon className="text-primary mb-3" size={24} />
                <h3 className="text-base font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 max-w-lg mx-auto">
            * Resultados variam conforme concorrência local, localização e consistência. Não garantimos posições específicas.
          </p>
        </div>
      </section>

      {/* D) COMO FUNCIONA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Como funciona</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Um ciclo mensal claro e objetivo em 4 etapas.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {etapas.map((e, i) => (
              <motion.div
                key={e.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5 bg-card border border-border rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-sm">{e.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-heading font-semibold mb-1">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E) DIFERENCIAIS */}
      <section className="py-20 md:py-28 circuit-bg border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Por que escolher esse plano?</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <d.icon className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-base font-heading font-semibold mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* F) FAQ */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Perguntas frequentes</h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* G) CTA FINAL */}
      <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Quer manter sua empresa forte no Google todos os meses?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Solicite um diagnóstico e receba um plano mensal sob medida para o seu nicho e sua região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setDiagOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Pedir diagnóstico <ArrowRight size={16} />
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                <MessageCircle size={18} /> Agendar conversa
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Plano mensal · Sob consulta · Sem fidelidade
            </p>
            <p className="text-xs text-muted-foreground mt-2 max-w-lg mx-auto">
              Resultados variam conforme concorrência local, localização, consistência e aderência às diretrizes do Google. Nosso trabalho é otimizar e manter o perfil em evolução contínua para melhorar performance e conversão.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat onOpenQuiz={() => setQuizOpen(true)} />
      <DiagnosticModal open={quizOpen} onClose={() => setQuizOpen(false)} />
      <RecorrenciaMensalDiagnosticModal open={diagOpen} onClose={() => setDiagOpen(false)} />
    </div>
  );
};

export default RecorrenciaMensal;
