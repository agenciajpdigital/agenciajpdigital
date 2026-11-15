import { describe, expect, it } from "vitest";
import { partnerSolution, serviceCategories } from "@/data/services";

describe("original service artwork", () => {
  const services = [...serviceCategories.flatMap((category) => category.services), partnerSolution];

  it("retains all 13 existing services and the separate partner artwork", () => {
    expect(services).toHaveLength(14);
    expect(new Set(services.map((service) => service.id)).size).toBe(14);
    expect(services.every((service) => service.image?.startsWith("https://agenciajpdigital.lovable.app/__l5e/assets-v1/"))).toBe(true);
  });

  it("keeps the original PNG available for every losslessly compressed artwork", () => {
    const compressed = services.filter((service) => service.image?.endsWith("-lossless.webp"));
    expect(compressed).toHaveLength(10);
    for (const service of compressed) {
      expect(service.originalImage).toMatch(/^https:\/\/agenciajpdigital\.lovable\.app\/__l5e\/assets-v1\/.+\.png$/);
      expect(service.originalImage).not.toBe(service.image);
    }
  });

  it("plays each uploaded video on the service it represents", () => {
    const expectedVideo: Record<string, string> = {
      "otimizacao-completa-perfil": "01-otimizacao-completa-perfil-empresa-google.mp4",
      "criacao-verificacao-perfil": "02-criacao-verificacao-perfil-google.mp4",
      "gerenciamento-organico-gmn": "03-gerenciamento-organico-perfil-google.mp4",
      "gestao-avaliacoes-reputacao": "04-gestao-avaliacoes-reputacao.mp4",
      "estrategia-palavras-chave-locais": "05-estrategia-palavras-chave-locais.mp4",
      "consultoria-seo-local-fortaleza": "06-consultoria-seo-local-fortaleza.mp4",
      "gerenciamento-redes-sociais": "07-gerenciamento-redes-sociais.mp4",
      "conteudo-estrategico-local": "08-criacao-conteudo-estrategico-local.mp4",
      "catalogo-digital-video": "09-catalogo-digital-video.mp4",
      "jp-video-local-pro": "10-jp-video-local-pro.mp4",
      "logo-architect-pro": "11-logo-architect-pro-identidade-visual.mp4",
      "jp-varejo-pro": "12-jp-varejo-pro-encartes-tabloides-campanhas.mp4",
      "criacao-site-otimizado": "13-criacao-site-otimizado.mp4",
      "solucoes-pagamento-ton": "14-parceria-solucoes-pagamento-ton.mp4",
    };

    expect(Object.keys(expectedVideo)).toHaveLength(services.length);

    for (const [id, filename] of Object.entries(expectedVideo)) {
      const service = services.find((item) => item.id === id);
      expect(service?.video).toMatch(
        new RegExp(
          `^https://agenciajpdigital\\.lovable\\.app/__l5e/assets-v1/[^/]+/${filename}$`,
        ),
      );
    }
  });
});