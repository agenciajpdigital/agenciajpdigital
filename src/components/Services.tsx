import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Maximize2 } from "lucide-react";
import {
  serviceCategories,
  partnerSolution,
  PARTNER_SOLUTION_VISIBLE,
  type ServiceItem,
} from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface ServicesProps {
  onOpenQuiz: () => void;
}

const ServiceCard = ({
  service,
  onOpen,
}: {
  service: ServiceItem;
  onOpen: (service: ServiceItem) => void;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors"
  >
    <button
      type="button"
      onClick={() => onOpen(service)}
      aria-label={`Abrir detalhes e imagem ampliada de ${service.name}`}
      className="relative w-full h-72 bg-muted border-b border-border p-3 group/image"
    >
      {service.image ? (
        <img
          src={service.image}
          alt={service.alt || service.name}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <service.icon size={44} className="text-primary" aria-hidden="true" />
          <span className="text-xs">Imagem do serviço em breve</span>
        </span>
      )}
      <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/80 border border-border px-2 py-1 text-[10px] text-muted-foreground opacity-0 group-hover/image:opacity-100 transition-opacity">
        <Maximize2 size={10} /> Ampliar
      </span>
    </button>

    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-base font-heading font-semibold mb-2 leading-snug">
        {service.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-5 line-clamp-3">{service.description}</p>

      <button
        type="button"
        onClick={() => onOpen(service)}
        className="mt-auto inline-flex items-center gap-1.5 self-start text-primary text-sm font-medium hover:underline"
      >
        Ver detalhes <ArrowRight size={14} />
      </button>
    </div>
  </motion.article>
);

const Services = ({ onOpenQuiz }: ServicesProps) => {
  const [active, setActive] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-20 md:py-28 circuit-bg scroll-mt-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções de marketing digital para negócios locais em Fortaleza e região
            metropolitana. Trabalhamos para melhorar a sua presença no Google e no Maps e
            aumentar as oportunidades de ser encontrado.
          </p>
        </motion.div>

        {/* Navegação por categoria */}
        <nav
          aria-label="Categorias de serviços"
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
            >
              {category.title}
            </a>
          ))}
          {PARTNER_SOLUTION_VISIBLE && (
            <a
              href="#parceria-ton"
              className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
            >
              Solução parceira
            </a>
          )}
        </nav>

        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-28">
              <div className="mb-7 border-l-2 border-primary pl-4">
                <h3 className="text-xl md:text-2xl font-heading font-bold">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} onOpen={setActive} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Solução parceira — separada dos serviços próprios */}
        {PARTNER_SOLUTION_VISIBLE && (
          <div id="parceria-ton" className="mt-16 scroll-mt-28">
            <div className="rounded-2xl border border-primary/30 bg-card/60 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full border border-primary/40 text-primary">
                  Solução parceira
                </span>
                <p className="text-xs text-muted-foreground">
                  Oferta apresentada pela Agência JP Digital em parceria — não é um serviço
                  próprio da agência.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {partnerSolution.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {partnerSolution.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {partnerSolution.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActive(partnerSolution)}
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                    >
                      Ver detalhes <ArrowRight size={14} />
                    </button>
                    <a
                      href={buildWhatsAppLink(partnerSolution.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <MessageCircle size={14} /> Falar sobre esta solução
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(partnerSolution)}
                  aria-label={`Abrir detalhes e imagem ampliada de ${partnerSolution.name}`}
                  className="w-full h-80 bg-muted border border-border rounded-xl p-3"
                >
                  <img
                    src={partnerSolution.image}
                    alt={partnerSolution.alt}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground/80 mt-12 max-w-3xl mx-auto">
          Os resultados dependem do perfil de cada empresa, do segmento e da região atendida.
          Não prometemos posição de destaque, primeiro lugar no Google ou aumento de
          ligações. Condições, valores e prazos são apresentados no atendimento.
        </p>
      </div>

      <ServiceDetailModal service={active} onClose={() => setActive(null)} onOpenQuiz={onOpenQuiz} />
    </section>
  );
};

export default Services;
