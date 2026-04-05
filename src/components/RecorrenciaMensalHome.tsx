import { motion } from "framer-motion";
import { RefreshCw, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RecorrenciaMensalHomeProps {
  onOpenQuiz: () => void;
}

const benefits = [
  {
    icon: RefreshCw,
    title: "Constância",
    subtitle: "Perfil sempre atualizado",
    desc: "Mantenha seu perfil ativo e atualizado todos os meses, sem depender de lembrar de postar.",
  },
  {
    icon: MapPin,
    title: "Relevância local",
    subtitle: "SEO local e palavras-chave",
    desc: "Otimizações contínuas para aparecer nas buscas e no Maps quando o cliente procura pelo seu serviço.",
  },
  {
    icon: TrendingUp,
    title: "Conversão",
    subtitle: "Ligações, rotas e mensagens",
    desc: "Foco em gerar ações reais: mais ligações, pedidos de rota e mensagens pelo perfil.",
  },
];

const RecorrenciaMensalHome = ({ onOpenQuiz }: RecorrenciaMensalHomeProps) => {
  return (
    <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            Plano Mensal
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Recorrência Mensal – Gestão contínua no Google Maps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mantenha seu perfil sempre atualizado, otimizado e ativo para atrair clientes todos os meses.
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
            to="/recorrencia-mensal"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Ver detalhes
          </Link>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Plano mensal · Sob consulta · Sem fidelidade
        </p>
      </div>
    </section>
  );
};

export default RecorrenciaMensalHome;
