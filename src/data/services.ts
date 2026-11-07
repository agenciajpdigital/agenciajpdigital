import {
  SearchCheck,
  BadgeCheck,
  RefreshCw,
  Star,
  KeyRound,
  Compass,
  Share2,
  PenLine,
  Clapperboard,
  Video,
  Palette,
  Tags,
  Globe,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

import otimizacaoPerfil from "@/assets/service-otimizacao-perfil-google.png.asset.json";
import criacaoVerificacao from "@/assets/service-criacao-verificacao-perfil-v2.png.asset.json";
import gerenciamentoOrganico from "@/assets/service-gerenciamento-organico-gmn-v2.png.asset.json";
import gestaoAvaliacoes from "@/assets/service-gestao-avaliacoes-reputacao-v2.webp.asset.json";
import palavrasChave from "@/assets/service-palavras-chave-locais-v2.png.asset.json";
import consultoriaSeoLocal from "@/assets/service-consultoria-seo-local.png.asset.json";
import redesSociais from "@/assets/service-gerenciamento-redes-sociais-v2.webp.asset.json";
import catalogoVideo from "@/assets/service-catalogo-digital-video-v2.webp.asset.json";
import jpVideoLocal from "@/assets/service-jp-video-local-pro.png.asset.json";
import logoArchitect from "@/assets/service-logo-architect-pro.png.asset.json";
import jpVarejoPro from "@/assets/service-jp-varejo-pro.png.asset.json";
import criacaoSiteOtimizado from "@/assets/service-criacao-site-otimizado.png.asset.json";
import tonPagamentos from "@/assets/parceria-ton-pagamentos-v2.png.asset.json";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  image?: string;
  alt?: string;
  note?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

/**
 * Soluções de Pagamento Ton é uma oferta parceira.
 * Exibida em área separada, identificada como parceria — nunca misturada aos
 * serviços próprios da Agência.
 */
export const PARTNER_SOLUTION_VISIBLE = true;

const alt = (label: string) =>
  `Arte do serviço ${label} da Agência JP Digital, marketing digital em Fortaleza`;

export const serviceCategories: ServiceCategory[] = [
  {
    id: "google-presenca-local",
    title: "Google e presença local",
    subtitle:
      "Trabalhamos para melhorar a presença local da sua empresa e aumentar as oportunidades de ser encontrado.",
    services: [
      {
        id: "otimizacao-completa-perfil",
        name: "Otimização Completa do Perfil da Empresa no Google",
        description:
          "Organização estratégica do perfil para apresentar melhor a empresa nas buscas e no Google Maps.",
        highlights: [
          "Categorias e descrição",
          "Serviços e produtos",
          "Fotos, informações e atualizações",
        ],
        icon: SearchCheck,
        image: otimizacaoPerfil.url,
        alt: alt("Otimização Completa do Perfil da Empresa no Google"),
        note: "Otimização pontual do perfil já existente.",
      },
      {
        id: "criacao-verificacao-perfil",
        name: "Criação e Verificação do Perfil no Google",
        description:
          "Configuração inicial do perfil e orientação durante o processo de verificação do Google.",
        highlights: [
          "Cadastro das informações da empresa",
          "Configuração inicial",
          "Acompanhamento das etapas de verificação",
        ],
        icon: BadgeCheck,
        image: criacaoVerificacao.url,
        alt: alt("Criação e Verificação do Perfil no Google"),
        note: "A aprovação e o prazo da verificação são decisões do Google.",
      },
      {
        id: "gerenciamento-organico-gmn",
        name: "Gerenciamento Orgânico do Google Meu Negócio",
        description:
          "Acompanhamento contínuo do Perfil da Empresa no Google para mantê-lo atualizado e relevante.",
        highlights: [
          "Atualizações e publicações",
          "Revisão de informações",
          "Acompanhamento de ações e oportunidades de melhoria",
        ],
        icon: RefreshCw,
        image: gerenciamentoOrganico.url,
        alt: alt("Gerenciamento Orgânico do Google Meu Negócio"),
        note: "Gerenciamento contínuo, diferente da otimização pontual.",
      },
      {
        id: "gestao-avaliacoes-reputacao",
        name: "Gestão de Avaliações e Reputação",
        description:
          "Apoio para acompanhar avaliações e responder clientes com profissionalismo e consistência.",
        highlights: [
          "Monitoramento de avaliações",
          "Sugestões de respostas",
          "Orientação para solicitar avaliações de forma ética",
        ],
        icon: Star,
        image: gestaoAvaliacoes.url,
        alt: alt("Gestão de Avaliações e Reputação"),
        note: "Não prometemos avaliações positivas nem resultados específicos.",
      },
      {
        id: "estrategia-palavras-chave-locais",
        name: "Estratégia de Palavras-chave Locais",
        description:
          "Pesquisa de termos que clientes usam para encontrar serviços em determinadas regiões.",
        highlights: [
          "Palavras-chave por serviço e localidade",
          "Análise de intenção de busca",
          "Recomendações para aplicar no perfil e no site",
        ],
        icon: KeyRound,
        image: palavrasChave.url,
        alt: alt("Estratégia de Palavras-chave Locais"),
      },
      {
        id: "consultoria-seo-local-fortaleza",
        name: "Consultoria em SEO Local para Empresas de Fortaleza",
        description:
          "Análise da presença local da empresa e plano de ações para melhorar sua visibilidade nas buscas.",
        highlights: [
          "Diagnóstico do perfil e do site",
          "Análise de concorrentes locais",
          "Recomendações priorizadas para a região atendida",
        ],
        icon: Compass,
        image: consultoriaSeoLocal.url,
        alt: alt("Consultoria em SEO Local para Empresas de Fortaleza"),
      },
    ],
  },
  {
    id: "conteudo-redes-videos",
    title: "Conteúdo, redes sociais e vídeos",
    subtitle:
      "Presença consistente nos canais que apresentam a empresa e aproximam o cliente do contato.",
    services: [
      {
        id: "gerenciamento-redes-sociais",
        name: "Gerenciamento de Redes Sociais",
        description:
          "Planejamento e criação de conteúdo para fortalecer a presença da empresa nas redes sociais.",
        highlights: [
          "Planejamento editorial",
          "Criação de artes e textos",
          "Organização de uma rotina de publicações",
        ],
        icon: Share2,
        image: redesSociais.url,
        alt: alt("Gerenciamento de Redes Sociais"),
      },
      {
        id: "conteudo-estrategico-local",
        name: "Criação de Conteúdo Estratégico Local",
        description:
          "Conteúdos alinhados ao negócio, ao público e à região onde a empresa atende.",
        highlights: [
          "Ideias de publicações locais",
          "Textos e chamadas para ação",
          "Planejamento de conteúdo consistente com a marca",
        ],
        icon: PenLine,
        alt: "Serviço de Criação de Conteúdo Estratégico Local da Agência JP Digital",
      },
      {
        id: "catalogo-digital-video",
        name: "Catálogo Digital em Vídeo",
        description:
          "Apresentação de produtos e serviços em vídeos curtos, organizados para facilitar a divulgação e o contato com clientes.",
        highlights: [
          "Apresentação visual dos produtos ou serviços",
          "Conteúdo adaptado aos canais combinados com o cliente",
          "Chamada para solicitar informações ou fazer um pedido",
        ],
        icon: Clapperboard,
        image: catalogoVideo.url,
        alt: alt("Catálogo Digital em Vídeo"),
      },
      {
        id: "jp-video-local-pro",
        name: "JP Video Local Pro",
        description:
          "Produção de vídeos para apresentar negócios locais, serviços, produtos e campanhas.",
        highlights: [
          "Planejamento da mensagem",
          "Roteiro e direção",
          "Produção e edição conforme o projeto contratado",
        ],
        icon: Video,
        image: jpVideoLocal.url,
        alt: alt("JP Video Local Pro"),
      },
    ],
  },
  {
    id: "identidade-varejo-site",
    title: "Identidade visual, varejo e site",
    subtitle:
      "Aparência profissional da marca, materiais de divulgação e um site pronto para receber contatos.",
    services: [
      {
        id: "logo-architect-pro",
        name: "Logo Architect Pro 3.0 — Identidade Visual",
        description:
          "Criação ou aprimoramento da identidade visual para apresentar a marca com unidade e profissionalismo.",
        highlights: [
          "Conceito visual",
          "Criação ou atualização do logotipo",
          "Orientações de aplicação da identidade",
        ],
        icon: Palette,
        image: logoArchitect.url,
        alt: alt("Logo Architect Pro 3.0 — Identidade Visual"),
      },
      {
        id: "jp-varejo-pro",
        name: "JP Varejo Pro — Encartes, Tabloides e Campanhas",
        description: "Criação de materiais promocionais para lojas e negócios de varejo.",
        highlights: [
          "Encartes e tabloides",
          "Cartazes promocionais",
          "Peças para campanhas e divulgação de ofertas",
        ],
        icon: Tags,
        image: jpVarejoPro.url,
        alt: alt("JP Varejo Pro — Encartes, Tabloides e Campanhas"),
      },
      {
        id: "criacao-site-otimizado",
        name: "Criação de Site Otimizado",
        description:
          "Desenvolvimento de site responsivo para apresentar a empresa e facilitar o contato com clientes.",
        highlights: [
          "Adaptação para celular e computador",
          "Estrutura clara",
          "Integração de chamadas para contato e práticas básicas de SEO",
        ],
        icon: Globe,
        image: criacaoSiteOtimizado.url,
        alt: alt("Criação de Site Otimizado"),
      },
    ],
  },
];

export const partnerSolution: ServiceItem = {
  id: "solucoes-pagamento-ton",
  name: "Soluções de Pagamento Ton",
  description:
    "Orientação para conhecer opções Ton de recebimento por Pix e cartão.",
  highlights: [
    "Apresentação das soluções disponíveis",
    "Orientação inicial",
    "Encaminhamento para conhecer condições e contratação diretamente com a Ton",
  ],
  icon: CreditCard,
  image: tonPagamentos.url,
  alt: alt("Soluções de Pagamento Ton, solução parceira da Agência JP Digital"),
  note:
    "Solução parceira. Condições, taxas e contratação são informados e contratados diretamente com a Ton.",
};
