import { motion } from "framer-motion";
import { Search, Settings, Star, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    desc: "Análise completa do seu perfil e dos concorrentes locais.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Otimização",
    desc: "NAP, categorias, serviços, descrição e fotos profissionais.",
  },
  {
    icon: Star,
    step: "03",
    title: "Prova Social",
    desc: "Avaliações, respostas e roteiro de pedido para seus clientes.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitoramento",
    desc: "Acompanhamento contínuo e melhorias baseadas em dados.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo estruturado para resultados consistentes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary" size={24} />
              </div>
              <span className="text-xs text-primary font-semibold tracking-widest uppercase">
                Passo {s.step}
              </span>
              <h3 className="text-lg font-heading font-semibold mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
