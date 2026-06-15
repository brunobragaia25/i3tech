"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";

/* ─── Assets ────────────────────────────────────────────── */
const IMG_CHECK        = "/check-white.svg";
const IMG_CTA_BG       = "/pattern-hero.png";
const IMG_CRM_CAR      = "https://www.figma.com/api/mcp/asset/29791492-bfb5-4141-a4d8-8d235750a2fc";
const IMG_CRM_USER     = "https://www.figma.com/api/mcp/asset/a8dd3949-aa09-4ef2-9833-123d1b6b97b2";
const IMG_CRM_CALENDAR = "https://www.figma.com/api/mcp/asset/55ceb886-9ce5-4494-a1bc-a73f37eefb30";

/* ─── Animation helper ──────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "", id }: { children: React.ReactNode; delay?: number; className?: string; id?: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Feature data ──────────────────────────────────────── */
const features = [
  {
    title: "Gestão Comercial (CRM)",
    logo: "/i3gestao.svg",
    description: [
      "A i3TECH centraliza toda a operação da sua associação em um único ambiente — do cadastro de associados e veículos à gestão financeira, proteções e sinistros.",
      "Cada módulo foi pensado para simplificar processos, reduzir erros e garantir controle total sobre a operação.",
    ],
    grupos: [
      {
        titulo: "Gestão de Associados",
        items: [
          "Cadastro completo de associados",
          "Histórico de pagamentos",
          "Controle de status (ativo, inadimplente, cancelado)",
          "Gestão de dependentes e beneficiários",
          "Upload de documentos",
        ],
      },
      {
        titulo: "Gestão de Veículos",
        items: [
          "Cadastro detalhado dos veículos",
          "Consulta FIPE",
          "Controle de vistorias",
          "Fotos e documentos do veículo",
          "Gestão de rastreadores instalados",
        ],
      },
      {
        titulo: "Financeiro",
        items: [
          "Emissão de boletos, PIX e cartão",
          "Controle de inadimplência",
          "Cobrança automática",
          "Fluxo de caixa",
          "Conciliação bancária",
          "Relatórios financeiros",
          "Rateio de eventos/sinistros",
        ],
      },
      {
        titulo: "Gestão de Proteções e Planos",
        items: [
          "Cadastro de planos",
          "Regras de aceitação",
          "Coberturas contratadas",
          "Assistência 24h",
          "Controle de carências",
          "Endossos e alterações cadastrais",
        ],
      },
      {
        titulo: "Gestão de Sinistros",
        items: [
          "Abertura de eventos",
          "Acompanhamento do processo",
          "Controle documental",
          "Aprovação de indenizações",
          "Gestão de oficinas parceiras",
          "Histórico completo de ocorrências",
        ],
      },
    ],
    id: "gestao-comercial",
    imageLeft: true,
    imageTop: true,
    hasCrmMockup: false,
    image: "/img-crm.png",
  },
  {
    title: "i3 CRM",
    logo: "/i3crm.svg",
    description: [
      "Com i3CRM desenvolvemos as principais funcionalidades:",
    ],
    grupos: [
      {
        titulo: "Comercial e Vendas",
        items: [
          "Gestão de leads",
          "Funil de vendas personalizado",
          "Distribuição automática de leads",
          "Histórico de contatos (ligações, WhatsApp e e-mails)",
          "Follow-up automático",
          "Agenda de visitas e vistorias",
          "Metas e desempenho dos consultores",
        ],
      },
      {
        titulo: "Cadastro de Associados",
        items: [
          "Cadastro completo de associados",
          "Cadastro de veículos",
          "Armazenamento de documentos",
          "Controle de dependentes e condutores",
          "Histórico de contratos e adesões",
        ],
      },
      {
        titulo: "Contratos e Assinaturas",
        items: [
          "Geração automática de contratos",
          "Assinatura eletrônica",
          "Gestão de propostas",
          "Vistoria Completa",
          "Controle de vigência",
          "Renovação automática",
        ],
      },
      {
        titulo: "Financeiro",
        items: [
          "Emissão de boletos e PIX",
          "Controle de mensalidades",
          "Gestão de inadimplência",
          "Cobrança automática via WhatsApp e e-mail",
          "Relatórios financeiros",
          "Conciliação bancária",
        ],
      },
    ],
    id: "automacao-vendas",
    imageLeft: false,
    imageTop: true,
    hasCrmMockup: false,
    image: "/img-crm-2.png",
  },
  {
    title: "i3 MGA",
    logo: "/i3mga.svg",
    description: [
      "Com i3MGA desenvolvemos as principais funcionalidades:",
    ],
    grupos: [
      {
        titulo: "Gestão de Produtos",
        items: [
          "Cadastro de produtos de seguros",
          "Configuração de coberturas",
          "Regras de aceitação",
          "Definição de franquias e limites",
          "Gestão de comissões",
        ],
      },
      {
        titulo: "Cotação e Emissão",
        items: [
          "Cotação online em segundos",
          "Comparação de produtos",
          "Emissão automática de propostas",
          "Emissão de apólices",
          "Endossos e alterações cadastrais",
        ],
      },
      {
        titulo: "Gestão de Corretores e Parceiros",
        items: [
          "Cadastro de corretores",
          "Controle de produção",
          "Gestão de comissões",
          "Ranking de desempenho",
          "Portal exclusivo para parceiros",
        ],
      },
    ],
    id: "gestao-clientes",
    imageLeft: true,
    imageTop: true,
    hasCrmMockup: false,
    image: "/img-gestao.png",
  },
  {
    title: "i3 Aplicativos",
    logo: "/i3app.svg",
    description: [
      "Com i3Aplicativos desenvolvemos as principais funcionalidades:",
    ],
    grupos: [
      {
        titulo: "Aplicativo do Consultor — Gestão Comercial",
        items: [
          "Cadastro de leads",
          "Funil de vendas",
          "Acompanhamento de propostas",
          "Histórico de atendimento",
          "Agenda de visitas e reuniões",
        ],
      },
      {
        titulo: "Cotação e Vendas",
        items: [
          "Simulação de planos e coberturas",
          "Emissão de propostas",
          "Assinatura eletrônica de contratos",
          "Envio de documentos pelo celular",
          "Aprovação digital",
        ],
      },
      {
        titulo: "Gestão da Carteira",
        items: [
          "Consulta de clientes ativos",
          "Renovação de contratos",
          "Acompanhamento de inadimplência",
          "Alertas de vencimento",
        ],
      },
      {
        titulo: "Aplicativo do Segurado / Associado — Área do Cliente",
        items: [
          "Consulta de apólices e contratos",
          "Download de documentos",
          "Carteirinha digital",
          "Dados cadastrais",
        ],
      },
      {
        titulo: "Financeiro",
        items: [
          "Segunda via de boleto",
          "Pagamento via PIX",
          "Histórico de pagamentos",
          "Situação financeira",
        ],
      },
    ],
    id: "financeiro",
    imageLeft: false,
    imageTop: true,
    hasCrmMockup: false,
    image: "/img-gestao-1.png",
  },
  {
    title: "i3 Integrações",
    logo: "/i3integracoes.svg",
    description: [
      "Com i3Integrações desenvolvemos as principais funcionalidades:",
    ],
    grupos: [
      {
        titulo: "Captação e Enriquecimento de Leads",
        items: [
          "Busca automática de potenciais clientes",
          "Enriquecimento de dados (telefone, e-mail, empresa, cargo)",
          "Identificação do perfil ideal de cliente (ICP)",
          "Segmentação inteligente da base",
        ],
      },
      {
        titulo: "Qualificação Automática",
        items: [
          "Conversas via WhatsApp, site e redes sociais",
          "Perguntas automáticas para entender necessidade, orçamento e momento de compra",
          "Classificação de leads quentes, mornos e frios",
          "Aplicação de metodologias como SPIN Selling e BANT",
        ],
      },
      {
        titulo: "Atendimento Omnichannel",
        items: [
          "Integração com WhatsApp, Instagram, Facebook, Telegram e site",
          "Respostas instantâneas 24 horas por dia",
          "Continuidade da conversa em qualquer canal",
        ],
      },
      {
        titulo: "Agendamento Inteligente",
        items: [
          "Marcação automática de reuniões",
          "Sincronização com Google Calendar",
          "Envio de lembretes automáticos",
        ],
      },
    ],
    id: "relatorios",
    imageLeft: true,
    imageTop: true,
    hasCrmMockup: false,
    image: "/img-relatorios.png",
  },
  {
    title: "i3 Track",
    logo: "/i3track.svg",
    description: [
      "Com i3Track desenvolvemos as principais funcionalidades:",
    ],
    grupos: [
      {
        titulo: "Localização em tempo real",
        items: [
          "Visualização do veículo no mapa",
          "Atualização contínua da posição",
        ],
      },
      {
        titulo: "Histórico de trajetos",
        items: [
          "Consulta de rotas realizadas",
          "Quilometragem percorrida",
          "Registro de paradas e deslocamentos",
        ],
      },
      {
        titulo: "Bloqueio remoto",
        items: [
          "Possibilidade de bloquear o veículo em caso de furto ou roubo",
          "Acionamento autorizado pelo proprietário",
        ],
      },
      {
        titulo: "Geocercas (Cercas Virtuais)",
        items: [
          "Definição de áreas permitidas",
          "Alertas quando o veículo entra ou sai de regiões específicas",
        ],
      },
      {
        titulo: "Alertas e notificações",
        items: [
          "Ignição ligada/desligada",
          "Excesso de velocidade",
          "Bateria desconectada",
          "Violação do rastreador",
          "Movimentação não autorizada",
        ],
      },
    ],
    id: "chatbot",
    imageLeft: false,
    imageTop: true,
    hasCrmMockup: false,
    image: "/img-chatbot.png",
  },
];

/* ─── CRM Mockup ────────────────────────────────────────── */
function CRMMockup() {
  const details = (
    <div className="flex flex-col gap-[10px] shrink-0 w-full">
      <div className="flex gap-[10px] items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG_CRM_CAR} alt="" style={{ width: 16, height: 16 }} className="shrink-0" />
        <span className="text-[12px]" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Fiat - Toro Freedom 1.8 16V Flex Aut. - 2021/Flex
        </span>
      </div>
      <div className="flex gap-[10px] items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG_CRM_USER} alt="" style={{ width: 16, height: 16 }} className="shrink-0" />
        <span className="text-[12px]" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          CONSULTOR EXTERNO
        </span>
      </div>
      <div className="flex gap-[10px] items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG_CRM_CALENDAR} alt="" style={{ width: 16, height: 16 }} className="shrink-0" />
        <span className="text-[12px]" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Criado em: 26/01/2026
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-[12px] w-full h-full">
      {/* Header */}
      <div className="shrink-0 flex items-center justify-between px-[12px] py-[8px] rounded-[6px]" style={{ background: "white" }}>
        <span className="text-[14px]" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Aguardando
        </span>
        <div className="flex items-center self-stretch">
          <div className="flex items-center justify-center px-[12px] h-full rounded-[6px]" style={{ background: "#66a3ff" }}>
            <span className="text-[12px] font-light text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>1</span>
          </div>
        </div>
      </div>

      {/* Card 1 — Maria Souza */}
      <div className="shrink-0 rounded-[16px] p-[8px]" style={{ background: "#cce0ff", height: 260 }}>
        <div className="flex flex-col justify-between h-full rounded-[8px] p-[24px]" style={{ background: "white", border: "1px solid rgba(51,133,255,0.5)" }}>
          <div className="flex flex-col gap-[16px] shrink-0 w-full">
            <div className="flex items-center justify-between shrink-0 w-full">
              <span className="text-[16px] font-normal" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>Maria Souza</span>
              <div className="flex items-center justify-center px-[12px] rounded-[6px]" style={{ background: "#f0f0f0", height: 20 }}>
                <span className="text-[12px] font-light" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>Instagram</span>
              </div>
            </div>
            <div className="shrink-0 w-full" style={{ height: 1, background: "rgba(0,0,0,0.1)" }} />
          </div>
          {details}
          <div className="shrink-0 w-full" style={{ height: 1, background: "rgba(0,0,0,0.1)" }} />
          <div className="flex items-center justify-center px-[12px] py-[6px] rounded-[300px] w-fit" style={{ background: "#888" }}>
            <span className="text-[12px] font-semibold" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>Aguardando</span>
          </div>
        </div>
      </div>

      {/* Card 2 — José Amaral (cropped) */}
      <div className="hidden md:flex flex-1 rounded-tl-[16px] rounded-tr-[16px] pt-[8px] px-[8px]" style={{ background: "#cce0ff" }}>
        <div className="flex flex-col gap-[20px] h-full rounded-tl-[8px] rounded-tr-[8px] p-[24px]" style={{ background: "white", borderTop: "1px solid rgba(51,133,255,0.5)", borderLeft: "1px solid rgba(51,133,255,0.5)", borderRight: "1px solid rgba(51,133,255,0.5)" }}>
          <div className="flex flex-col gap-[16px] shrink-0 w-full">
            <div className="flex items-center justify-between shrink-0 w-full">
              <span className="text-[16px] font-normal" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>José Amaral</span>
              <div className="flex items-center justify-center px-[12px] rounded-[6px]" style={{ background: "#f0f0f0", height: 20 }}>
                <span className="text-[12px] font-light" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>Google</span>
              </div>
            </div>
            <div className="shrink-0 w-full" style={{ height: 1, background: "rgba(0,0,0,0.1)" }} />
          </div>
          {details}
        </div>
      </div>
    </div>
  );
}

/* ─── Feature image ─────────────────────────────────────── */
function FeatureImage({ image }: { image?: string }) {
  return (
    <>
      {image ? (
        <img src={image} alt="" className="shrink-0 w-full md:w-[588px] h-[280px] md:h-[640px] rounded-[20px] object-cover object-bottom" />
      ) : (
        <div
          className="shrink-0 w-full md:w-[588px] h-[280px] md:h-[640px] rounded-[20px] flex items-center justify-center p-[20px] overflow-hidden"
          style={{ background: "#66a3ff" }}
        >
          <div className="flex-1 h-full rounded-[16px] p-[10px]" style={{ background: "#cce0ff" }}>
            <div className="w-full h-full rounded-[8px]" style={{ background: "white", border: "1px solid rgba(51,133,255,0.5)" }} />
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Feature section ───────────────────────────────────── */
function FeatureSection({ f }: { f: typeof features[0] }) {
  const hasGrupos = "grupos" in f && Array.isArray((f as any).grupos);

  const textContent = (
    <div className="flex-1 flex flex-col gap-[28px] min-w-0">
      <div className="flex flex-col gap-[20px]">
        {"logo" in f && (f as any).logo ? (
          <motion.img
            src={(f as any).logo}
            alt={f.title}
            className="h-8 md:h-14"
            style={{ width: "auto", alignSelf: "flex-start" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <AnimatedHeading
            as="h2"
            className="text-[24px] md:text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {f.title}
          </AnimatedHeading>
        )}
        <div className="flex flex-col gap-[16px]">
          {f.description.map((p, i) => (
            <p key={i} className="text-[16px] font-light leading-[1.6]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.15)" }} />

      {hasGrupos ? (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${{3:"lg:grid-cols-3",4:"lg:grid-cols-4",5:"lg:grid-cols-5"}[(f as any).grupos.length as 3|4|5] ?? "lg:grid-cols-3"} gap-[24px] md:gap-[32px]`}>
          {((f as any).grupos as { titulo: string; items: string[] }[]).map((grupo, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-[14px]"
            >
              <span className="text-[15px] font-bold" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {grupo.titulo}
              </span>
              <div className="flex flex-col gap-[10px]">
                {grupo.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.08 + ii * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-[10px]"
                  >
                    <div className="shrink-0 w-3 h-3 rounded-[2px] flex items-center justify-center overflow-hidden" style={{ background: "#0066ff" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={IMG_CHECK} alt="" className="w-2 h-2" />
                    </div>
                    <span className="text-[14px] font-medium leading-[1.5]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-[24px]">
          <span className="text-[20px] font-bold" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Principais recursos
          </span>
          <div className="flex flex-col gap-[16px]">
            {((f as any).recursos as string[]).map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="shrink-0 w-5 h-5 rounded-[4px] flex items-center justify-center overflow-hidden" style={{ background: "#0066ff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG_CHECK} alt="" className="w-3 h-3" />
                </div>
                <span className="text-[16px] font-medium leading-[1.6] tracking-[-0.02em]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const imageTop = "imageTop" in f && (f as any).imageTop;

  return (
    <FadeUp id={f.id}>
      {imageTop ? (
        <div className="flex flex-col gap-8 md:gap-[48px]">
          <motion.img
            src={f.image}
            alt=""
            className="w-full rounded-[20px] object-cover object-top h-[220px] md:h-[400px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          {textContent}
        </div>
      ) : (
        <div className={`flex flex-col ${f.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-[64px] items-center`}>
          <FeatureImage image={f.image} />
          {textContent}
        </div>
      )}
    </FadeUp>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-pages.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20 md:py-0 gap-5" style={{ minHeight: 400 }}>
        <AnimatedHeading as="h1" className="text-[32px] md:text-[48px]" style={{ color: "#3385ff", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: "normal", margin: 0 }}>
          Funcionalidades
        </AnimatedHeading>
        <p className="text-[16px] md:text-[20px]" style={{ color: "#fff", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
          O futuro da proteção veicular, do rastreamento, e do seguro, é se tornar inteligente, conectado e digital.
        </p>
      </div>
    </section>
  );
}

/* ─── Features list ─────────────────────────────────────── */
function FeaturesSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[108px] pb-16 flex flex-col gap-12 md:gap-[64px]">
        {features.map((f) => (
          <FeatureSection key={f.title} f={f} />
        ))}
      </div>
    </section>
  );
}

/* ─── CTA Banner ────────────────────────────────────────── */
function CTABanner() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-[64px]">
        <FadeUp>
          {/* Outer glass card */}
          <div
            className="rounded-[12px] p-[12px]"
            style={{
              background: "linear-gradient(180deg, rgba(102,163,255,0.4) 0%, rgba(102,163,255,0) 100%)",
              border: "1px solid rgba(102,163,255,0.5)",
              boxShadow: "0px 0px 15.4px 0px rgba(0,0,0,0.35)",
              backdropFilter: "blur(5.45px)",
            }}
          >
            {/* Inner white card */}
            <div
              className="relative overflow-visible md:overflow-hidden rounded-[8px] flex flex-col md:flex-row items-stretch"
              style={{ background: "#1956f3", minHeight: 560 }}
            >
              <img src={IMG_CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none" />
              <div className="relative flex flex-col gap-[40px] justify-center items-center md:items-start flex-1 px-6 md:px-[80px] pt-10 pb-0 md:py-0" style={{ zIndex: 1 }}>
                <AnimatedHeading
                  as="h2"
                  className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px] text-center md:text-left"
                  style={{ color: "white", fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Entenda como podemos transformar a sua empresa com tecnologias que irão te colocar em outro patamar.
                </AnimatedHeading>
                <div className="self-center md:self-start" style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden" }}>
                  <motion.div
                    style={{
                      position: "absolute",
                      inset: "-150%",
                      background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <Link
                    href="/contato"
                    className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                    style={{ background: "white", color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Agende uma demonstração
                  </Link>
                </div>
              </div>
              <div className="block w-full h-[380px] md:h-auto md:w-[480px] shrink-0" style={{ position: "relative", overflow: "visible" }}>
                <img src="/logo-3d.png" alt="" className="w-[600px] md:w-[700px] md:min-w-[700px] absolute bottom-[20px] md:bottom-[-60px] left-1/2 md:left-[58%]" style={{ transform: "translateX(-50%)", height: "auto", display: "block", zIndex: 0 }} />
                <img src="/foto-cta-funcionalidades.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[-15%] md:translate-x-0" style={{ width: 420, objectFit: "contain", objectPosition: "bottom", display: "block", zIndex: 1 }} />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
