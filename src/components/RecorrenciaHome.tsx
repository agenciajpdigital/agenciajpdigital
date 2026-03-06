import { motion } from "framer-motion";
import { MapPin, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RecorrenciaHomeProps {
  onOpenQuiz: () => void;
}

const benefits = [
  {
    icon: MapPin,
    title: "Mais visibilidade local",
    subtitle: "SEO Local",
    desc: "Apareça nas buscas e no Maps quando seu cliente procura pelo serviço que você oferece.",
  },
  {
    icon: Shield,
    title: "Mais confiança",
    subtitle: "Provas sociais",
    desc: "Perfil completo, avaliações positivas e presença consistente geram credibilidade.",
  },
  {
    icon: TrendingUp,
    title: "Mais conversão",
    subtitle: "Ligações, rotas e WhatsApp",
    desc: "Otimização focada em gerar ações reais: ligações, pedidos de rota e mensagens.",
  },
];

const RecorrenciaHome = ({ onOpenQuiz }: RecorrenciaHomeProps) => {
  return (
    <section id="recorrencia" className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            Novidade
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Recorrência Trimestral (90 dias)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Um plano contínuo para manter sua empresa ativa, bem posicionada e gerando chamadas, rotas e mensagens no Google Maps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <b.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-1">{b.title}</h3>
              <p className="text-xs text-primary mb-3">{b.subtitle}</p>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Pedir diagnóstico <ArrowRight size={16} />
          </button>
          <Link
            to="/recorrencia-trimestral"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Ver como funciona
          </Link>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Plano trimestral (90 dias) · Sob consulta · Renovação opcional
        </p>
      </div>
    </section>
  );
};

export default RecorrenciaHome;
