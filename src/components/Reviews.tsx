import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Carlos M.", text: "O perfil ficou bem estruturado e começou a gerar mais visibilidade. Recomendo demais!" },
  { name: "Fernanda S.", text: "Atendimento rápido e profissional, a equipe entende do assunto de verdade." },
  { name: "Roberto L.", text: "Depois da estratégia orgânica, os resultados melhoraram significativamente." },
  { name: "Ana Paula R.", text: "Organização completa do perfil e suporte excelente em cada etapa." },
  { name: "Marcos V.", text: "Aparecemos melhor no Maps e recebemos muito mais contatos por semana." },
  { name: "Juliana C.", text: "Trabalho sério e bem feito, valeu cada centavo investido." },
];

const REVIEW_LINK = "https://www.google.com/maps/place/Ag%C3%AAncia+JP+Digital";

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(reviews[(current + i) % reviews.length]);
    }
    return result;
  };

  return (
    <section id="avaliacoes" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Avaliações do Google
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0</span>
            <span className="text-muted-foreground text-sm">· 30+ avaliações</span>
          </div>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleReviews().map((r, i) => (
              <motion.div
                key={`${r.name}-${current}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{r.text}"</p>
                <span className="text-sm font-medium text-foreground">{r.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary transition-colors" aria-label="Anterior">
              <ChevronLeft size={20} className="text-muted-foreground" />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary transition-colors" aria-label="Próximo">
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Escrever avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
