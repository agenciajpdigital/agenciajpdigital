export const WHATSAPP_NUMBER = "5585992113249";

const DEFAULT_MSG =
  "Olá! Vim pelo site e tenho interesse no atendimento. Gostaria de mais informações para agendar ou tirar minhas dúvidas.";

/**
 * Monta o link de WhatsApp já configurado no site.
 * Quando um serviço é informado, o nome dele entra na mensagem.
 */
export const buildWhatsAppLink = (serviceName?: string) => {
  const message = serviceName
    ? `Olá! Vim do site e tenho interesse no serviço: ${serviceName}.\n\nGostaria de mais informações para agendar ou tirar minhas dúvidas.`
    : DEFAULT_MSG;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
