import { motion } from "framer-motion";
import { MapPin, TrendingUp, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero = ({ onOpenQuiz }: HeroProps) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[640px] lg:min-h-[680px] flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 lg:left-[35%]">
          <img src={heroBg} alt="Especialista em SEO local analisando métricas no Google Maps em Fortaleza" className="w-full h-full object-cover object-left lg:object-center" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 bg-background/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/50 lg:to-background/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl lg:w-[56%]"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 glow-text">
            Mais clientes no Google e no Maps em Fortaleza
          </h1>
          <p className="text-lg md:text-xl text-foreground/85 mb-8 max-w-xl">
            Otimização do Perfil do Google + estratégia orgânica para gerar ligações, rotas e mensagens.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-9">
            <Button
              onClick={onOpenQuiz}
              className="h-auto min-h-12 px-5 py-3.5 rounded-lg font-semibold text-base whitespace-normal glow-border"
            >
              Pedir diagnóstico gratuito
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={onOpenQuiz}
              className="h-auto min-h-12 border-primary bg-background/70 text-foreground px-5 py-3.5 rounded-lg font-semibold text-base whitespace-normal hover:bg-secondary hover:text-secondary-foreground"
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-4 text-sm text-foreground/85">
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-primary shrink-0" /> SEO Local e Google Maps
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp size={18} className="text-primary shrink-0" /> Execução + acompanhamento
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={18} className="text-primary shrink-0" /> Primeira consultoria gratuita
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
