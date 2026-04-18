import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, TrendingUp, Shield, Phone, Route, MessageCircle,
  Search, Settings, Star, BarChart3, CheckCircle, Users,
  FileText, Image, HelpCircle, ArrowRight, ChevronDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DiagnosticModal from "@/components/DiagnosticModal";
import RecorrenciaDiagnosticModal from "@/components/RecorrenciaDiagnosticModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/5585992113249?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20de%20Recorr%C3%AAncia%20Trimestral.";

const benefits = [
  {
    icon: MapPin,
    title: "Mais visibilidade local",
    desc: "SEO Local estratégico para seu negócio aparecer nas buscas e no Maps quando o cliente mais precisa.",
  },
  {
    icon: Shield,
    title: "Mais confiança",
    desc: "Perfil completo, avaliações positivas e provas sociais que geram credibilidade imediata.",
  },
  {
    icon: TrendingUp,
    title: "Mais conversão",
    desc: "Otimização focada em gerar ligações, rotas, mensagens e visitas reais ao seu negócio.",
  },
];

const paraQuem = [
  { icon: MapPin, text: "Negócios locais que querem aparecer mais no Maps" },
  { icon: Settings, text: "Empresas com perfil desatualizado ou incompleto" },
  { icon: Phone, text: "Quem precisa de mais ligações, rotas e mensagens" },
  { icon: TrendingUp, text: "Quem quer manter constância e autoridade local" },
];

const incluso = [
  { icon: Search, title: "Auditoria inicial completa", desc: "Diagnóstico detalhado com correções prioritárias no primeiro ciclo." },
  { icon: Settings, title: "Ajustes de categoria e atributos", desc: "Categorias, serviços, descrição, atributos e horários otimizados." },
  { icon: TrendingUp, title: "Otimização de produtos/serviços", desc: "SEO + CTR para cada produto e serviço listado no perfil." },
  { icon: FileText, title: "Estratégia de postagens", desc: "Publicações periódicas conforme necessidade (2 a 4 por mês)." },
  { icon: Image, title: "Plano de fotos e conteúdos visuais", desc: "Orientação de conteúdos visuais para manter o perfil atrativo." },
  { icon: HelpCircle, title: "FAQ otimizado", desc: "Configuração e otimização de Perguntas e Respostas no perfil." },
  { icon: Star, title: "Gestão de avaliações", desc: "Monitoramento e sugestão de respostas para avaliações (quando aplicável)." },
  { icon: BarChart3, title: "Melhorias contínuas de relevância", desc: "Palavras-chave locais, consistência NAP e sinais de proeminência." },
  { icon: FileText, title: "Relatório mensal", desc: "Visitas, ligações, rotas, mensagens e principais ações realizadas." },
];

const etapas = [
  { step: "01", title: "Diagnóstico e metas", period: "Semana 1", desc: "Análise completa do perfil, concorrência e definição de metas para o trimestre." },
  { step: "02", title: "Otimizações + rotina de conteúdo", period: "Semanas 2 a 12", desc: "Execução das melhorias, postagens, gestão de avaliações e acompanhamento contínuo." },
  { step: "03", title: "Fechamento do ciclo", period: "Final do trimestre", desc: "Relatório final, análise de resultados e planejamento do próximo trimestre." },
];

const diferenciais = [
  { icon: Users, title: "Processo consultivo e transparente", desc: "Você acompanha cada etapa e entende o que está sendo feito." },
  { icon: Shield, title: "Boas práticas e diretrizes do Google", desc: "Ações alinhadas às diretrizes oficiais, sem atalhos arriscados." },
  { icon: TrendingUp, title: "Foco em conversão", desc: "Não basta aparecer — o objetivo é gerar ligações, rotas e mensagens." },
  { icon: MessageCircle, title: "Suporte humanizado via WhatsApp", desc: "Atendimento direto e ágil, sem chatbots ou filas de espera." },
];

const faqItems = [
  { q: "Em quanto tempo vejo mudanças?", a: "Os primeiros sinais costumam aparecer entre 2 e 6 semanas, mas resultados consistentes dependem de constância, concorrência e nicho. O plano trimestral permite ciclos de melhoria contínua." },
  { q: "Preciso ter loja física?", a: "Não necessariamente. Profissionais que atendem em domicílio ou por área de cobertura também podem ter presença no Google Maps." },
  { q: "Vocês mexem no nome da empresa?", a: "Não. O nome do perfil segue as diretrizes do Google e deve refletir exatamente o nome real do negócio." },
  { q: "Posso cancelar?", a: "Sim. O plano é trimestral (90 dias) com renovação opcional. Não há fidelidade obrigatória após o ciclo." },
  { q: "Preciso enviar fotos e informações?", a: "Sim, sua colaboração com fotos reais e informações atualizadas é essencial para um perfil completo e autêntico." },
  { q: "Isso funciona para qualquer nicho?", a: "Funciona para a maioria dos negócios locais. Em nichos muito específicos, avaliamos viabilidade no diagnóstico inicial." },
];

const RecorrenciaTrimestral = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [recDiagOpen, setRecDiagOpen] = useState(false);

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
              Plano Trimestral · 90 dias
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Plano de Recorrência Trimestral
              <span className="text-primary block mt-2">(90 dias)</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Gestão contínua do seu Perfil no Google com ações semanais e otimizações estratégicas para melhorar ranking e aumentar conversões.
            </p>

            <ul className="flex flex-col sm:flex-row justify-center gap-4 mb-10 text-sm text-foreground">
              {[
                "Otimização técnica + conteúdo local",
                "Rotina de melhorias e atualizações",
                "Relatórios e acompanhamento de performance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5">
                  <CheckCircle className="text-primary shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} /> Agendar conversa
              </a>
              <button
                onClick={() => setRecDiagOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Pedir diagnóstico <ArrowRight size={16} />
              </button>
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
              Se você se identifica com algum dos cenários abaixo, o plano trimestral foi feito para o seu negócio.
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
              Entregáveis do trimestre — ações práticas e contínuas para fortalecer sua presença local.
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
            * Resultados variam conforme concorrência, distância e consistência. Não garantimos posições específicas.
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
              Um processo claro em 3 etapas ao longo de 90 dias.
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
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-base font-heading font-semibold">{e.title}</h3>
                    <span className="text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{e.period}</span>
                  </div>
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
              Quer manter sua empresa no topo do Maps com consistência?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Solicite um diagnóstico e receba um plano trimestral sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setRecDiagOpen(true)}
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
              Plano trimestral (90 dias) · Sob consulta · Renovação opcional
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat onOpenQuiz={() => setQuizOpen(true)} />
      <DiagnosticModal open={quizOpen} onClose={() => setQuizOpen(false)} />
      <RecorrenciaDiagnosticModal open={recDiagOpen} onClose={() => setRecDiagOpen(false)} />
    </div>
  );
};

export default RecorrenciaTrimestral;
