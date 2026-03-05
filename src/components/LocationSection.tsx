import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, MessageCircle } from "lucide-react";

const MAPS_LINK = "https://www.google.com/maps/place/Ag%C3%AAncia+JP+Digital+%E2%80%93+Marketing+Digital+em+Fortaleza/@-3.8022612,-38.5948276,17z/data=!4m6!3m5!1s0x7c74da2e6ba5a6d:0x5e79f0d9817dbac9!8m2!3d-3.8022612!4d-38.5922473!16s%2Fg%2F11s1t7b436";
const WHATSAPP_LINK = "https://wa.me/5585992113249?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 md:py-28 circuit-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Localização
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border h-[350px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.5948276!3d-3.8022612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74da2e6ba5a6d%3A0x5e79f0d9817dbac9!2sAg%C3%AAncia%20JP%20Digital%20%E2%80%93%20Marketing%20Digital%20em%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Agência JP Digital"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm">
                  Rua Einstein, 2322 – Fortaleza – CE – 60730-245
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Horários</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Seg–Sex: 08:00–12:00 e 14:00–18:00</p>
                  <p>Sáb: 08:00–12:00 e 14:00–16:00</p>
                  <p>Dom: Fechado</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Navigation size={16} /> Como chegar
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
