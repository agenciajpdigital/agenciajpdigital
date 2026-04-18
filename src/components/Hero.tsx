import { motion } from "framer-motion";
import { MapPin, TrendingUp, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5585992113249?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero = ({ onOpenQuiz }: HeroProps) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Especialista em SEO local analisando métricas no Google Maps em Fortaleza" className="w-full h-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 glow-text">
            Mais clientes no Google e no Maps em Fortaleza
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Otimização do Perfil do Google + estratégia orgânica para gerar ligações, rotas e mensagens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={onOpenQuiz}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity glow-border"
            >
              Pedir diagnóstico gratuito
            </button>
            <button
              onClick={onOpenQuiz}
              className="border border-primary text-primary px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/10 transition-colors text-center"
            >
              Falar no WhatsApp
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> SEO Local e Google Maps
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" /> Execução + acompanhamento
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={16} className="text-primary" /> Primeira consultoria gratuita
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
