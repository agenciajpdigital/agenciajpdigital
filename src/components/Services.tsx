import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Star, FileText, Share2, Globe } from "lucide-react";

const buildWhatsAppLink = (servico: string) => {
  const msg = `Olá! Quero detalhes do serviço: ${servico}.\n\nMinha empresa é: ____\nBairro/Cidade: ____\nJá tenho Perfil da Empresa no Google? (Sim/Não/Não sei).`;
  return `https://wa.me/5585992113249?text=${encodeURIComponent(msg)}`;
};

const services = [
  {
    icon: MapPin,
    title: "SEO Local / Google Maps",
    serviceName: "SEO Local / Google Maps",
    benefit: "Apareça nas primeiras posições quando clientes buscam seu serviço.",
    bullets: ["Otimização completa do Perfil da Empresa", "Estratégia de palavras-chave locais"],
  },
  {
    icon: ShieldCheck,
    title: "Criação e Verificação do Perfil",
    serviceName: "Criação e Verificação do Perfil do Google",
    benefit: "Para quem ainda não tem presença no Google Maps.",
    bullets: ["Cadastro completo e verificação", "Configuração de categorias e serviços"],
  },
  {
    icon: Star,
    title: "Gestão de Avaliações e Reputação",
    serviceName: "Gestão de Avaliações e Reputação",
    benefit: "Construa credibilidade com avaliações positivas e respostas estratégicas.",
    bullets: ["Estratégia de pedido de avaliações", "Respostas profissionais e personalizadas"],
  },
  {
    icon: FileText,
    title: "Conteúdo e Postagens no Perfil",
    serviceName: "Conteúdo e Postagens no Perfil do Google",
    benefit: "Mantenha seu perfil ativo e relevante com publicações constantes.",
    bullets: ["Posts semanais com fotos e ofertas", "Constância que gera prova social"],
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    serviceName: "Redes Sociais (Conteúdo e Consistência)",
    benefit: "Conteúdo que reforça autoridade local e conecta com seu público.",
    bullets: ["Planejamento editorial mensal", "Design e copywriting otimizados"],
  },
  {
    icon: Globe,
    title: "Criação de Site Otimizado",
    serviceName: "Criação de Site Otimizado (SEO e Conversão)",
    benefit: "Site rápido, responsivo e feito para converter visitantes em clientes.",
    bullets: ["SEO técnico e on-page", "Layout focado em conversão"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 circuit-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas para você dominar os resultados locais do Google em Fortaleza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
            >
              <s.icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.benefit}</p>
              <ul className="space-y-1.5 mb-5">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {b}
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink(s.serviceName)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline"
              >
                Quero detalhes →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
