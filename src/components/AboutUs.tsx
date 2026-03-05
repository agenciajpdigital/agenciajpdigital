import { motion } from "framer-motion";
import logo from "@/assets/logo-jp-digital.png";
import aboutTeam from "@/assets/about-team.jpg";

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 circuit-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={logo} alt="JP Digital" className="h-10 w-auto" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Quem Somos
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <span className="text-foreground font-medium">Agência JP Digital</span> nasceu
                  com um propósito claro: ajudar negócios locais de Fortaleza e Região Metropolitana
                  a serem encontrados por quem realmente importa — o cliente que está buscando agora.
                </p>
                <p>
                  Somos especialistas em presença digital no Google: do Perfil da Empresa no Google
                  Maps até estratégias orgânicas que transformam buscas em ligações, rotas traçadas
                  e mensagens no WhatsApp. Nosso trabalho é técnico, prático e orientado a resultado.
                </p>
                <p>
                  Acreditamos que o marketing digital eficaz não é sobre modismos — é sobre
                  consistência, dados e execução. Cada projeto é tratado com atenção individual,
                  porque cada negócio tem sua história, seu público e suas metas.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border">
              <img
                src={aboutTeam}
                alt="Equipe de consultoria em marketing digital analisando estratégias de SEO local em Fortaleza"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
