"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";

/* ─── Assets ────────────────────────────────────────────── */
const IMG_CHECK        = "/check-white.svg";
const IMG_CTA_BG       = "https://www.figma.com/api/mcp/asset/4627d6a1-bcaa-4d50-af61-185a9d45bb5d";
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
    description: [
      "O módulo de CRM da i3TECH organiza toda a jornada comercial, do primeiro contato ao fechamento. Ele oferece controle total sobre oportunidades, negociações e desempenho da equipe, garantindo previsibilidade e organização no processo de vendas.",
      "Com visualização clara do funil, histórico completo de interações e distribuição inteligente de leads, a operação ganha eficiência e mais controle sobre resultados.",
    ],
    recursos: [
      "Funil de vendas visual e personalizável",
      "Gestão e qualificação de leads",
      "Distribuição automática de oportunidades",
      "Histórico completo de interações",
      "Acompanhamento de metas e performance",
    ],
    id: "gestao-comercial",
    imageLeft: true,
    hasCrmMockup: true,
  },
  {
    title: "Automação de vendas",
    description: [
      "A automação da i3TECH reduz tarefas repetitivas e acelera o processo comercial. O sistema permite criar fluxos automáticos de contato, envio de propostas e acompanhamento de clientes, garantindo agilidade e padronização no atendimento.",
      "Isso aumenta a produtividade da equipe e melhora a taxa de conversão.",
    ],
    recursos: [
      "Follow-ups automáticos",
      "Envio de propostas e documentos",
      "Comunicação integrada (WhatsApp e outros canais)",
      "Formulários inteligentes para captação de leads",
      "Fluxos personalizados de atendimento",
    ],
    id: "automacao-vendas",
    imageLeft: false,
    hasCrmMockup: false,
  },
  {
    title: "Gestão de clientes associados",
    description: [
      "Centralize todas as informações de clientes, contratos e veículos em um único ambiente. O módulo permite acompanhar toda a jornada do cliente com organização e segurança.",
      "Ideal para operações que precisam manter controle constante da base ativa.",
    ],
    recursos: [
      "Cadastro completo de clientes e veículos",
      "Controle de contratos e status",
      "Histórico de movimentações",
      "Atualizações automáticas",
      "Organização da base ativa",
    ],
    id: "gestao-clientes",
    imageLeft: true,
    hasCrmMockup: false,
  },
  {
    title: "Financeiro e Comissões",
    description: [
      "O módulo financeiro conecta a operação comercial aos resultados financeiros. Ele permite acompanhar pagamentos, comissões e indicadores de receita com clareza e controle.",
      "Isso reduz erros, aumenta a transparência e melhora a gestão estratégica do negócio.",
    ],
    recursos: [
      "Controle de pagamentos e recebimentos",
      "Gestão de comissões por consultor",
      "Relatórios financeiros",
      "Integração com meios de pagamento",
      "Acompanhamento de metas financeiras",
    ],
    id: "financeiro",
    imageLeft: false,
    hasCrmMockup: false,
  },
  {
    title: "Relatórios e Integrações",
    description: [
      "A i3TECH transforma dados operacionais em inteligência estratégica e conecta sua operação aos principais canais e sistemas do mercado.",
      "Com dashboards em tempo real, indicadores claros e integrações automatizadas, a plataforma oferece uma visão completa do negócio, reduz falhas de informação e garante que todos os setores trabalhem com dados atualizados e confiáveis. Você acompanha resultados e mantém tudo conectado — em um único ambiente.",
    ],
    recursos: [
      "Dashboards em tempo real",
      "KPIs comerciais e operacionais",
      "Análise de conversão e origem de leads",
      "Integração com WhatsApp e canais digitais",
      "Conexão com sites, landing pages e APIs",
      "Sincronização com sistemas internos",
    ],
    id: "relatorios",
    imageLeft: true,
    hasCrmMockup: false,
  },
  {
    title: "ChatBot",
    description: [
      "O ChatBot da i3TECH automatiza o atendimento ao cliente com inteligência artificial, respondendo dúvidas, qualificando leads e agendando interações de forma autônoma, 24 horas por dia.",
      "Integrado aos principais canais de comunicação, o ChatBot reduz o tempo de resposta, libera a equipe para atividades estratégicas e melhora a experiência do cliente em cada etapa do funil.",
    ],
    recursos: [
      "Atendimento automatizado 24/7",
      "Qualificação e captura de leads",
      "Integração com WhatsApp e outros canais",
      "Respostas com inteligência artificial",
      "Transferência para atendimento humano",
      "Relatórios de conversas e desempenho",
    ],
    id: "chatbot",
    imageLeft: false,
    hasCrmMockup: false,
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
function FeatureImage({ hasCrmMockup }: { hasCrmMockup: boolean }) {
  return (
    <div
      className="shrink-0 w-full md:w-[588px] h-[280px] md:h-[640px] rounded-[20px] flex items-center justify-center p-[20px] overflow-hidden"
      style={{ background: "#66a3ff" }}
    >
      {hasCrmMockup ? (
        <div className="flex-1 h-full rounded-[16px] p-[10px]" style={{ background: "#e6f0ff" }}>
          <CRMMockup />
        </div>
      ) : (
        <div className="flex-1 h-full rounded-[16px] p-[10px]" style={{ background: "#cce0ff" }}>
          <div className="w-full h-full rounded-[8px]" style={{ background: "white", border: "1px solid rgba(51,133,255,0.5)" }} />
        </div>
      )}
    </div>
  );
}

/* ─── Feature section ───────────────────────────────────── */
function FeatureSection({ f }: { f: typeof features[0] }) {
  const textContent = (
    <div className="flex-1 flex flex-col gap-[28px] min-w-0">
      <div className="flex flex-col gap-[20px]">
        <AnimatedHeading
          as="h2"
          className="text-[24px] md:text-[32px] font-semibold leading-[1.2]"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {f.title}
        </AnimatedHeading>
        <div className="flex flex-col gap-[16px]">
          {f.description.map((p, i) => (
            <p key={i} className="text-[16px] font-light leading-[1.6]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.15)" }} />

      <div className="flex flex-col gap-[24px]">
        <span className="text-[20px] font-bold" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Principais recursos
        </span>
        <div className="flex flex-col gap-[16px]">
          {f.recursos.map((item, i) => (
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
    </div>
  );

  return (
    <FadeUp id={f.id}>
      <div className={`flex flex-col ${f.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-[64px] items-center`}>
        <FeatureImage hasCrmMockup={f.hasCrmMockup} />
        {textContent}
      </div>
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
          A i3TECH é uma plataforma completa de CRM e gestão criada para organizar, automatizar e escalar operações veiculares.
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
            {/* Inner blue card */}
            <div
              className="relative overflow-hidden rounded-[8px] flex items-center justify-center px-6 md:px-[80px] py-16 md:py-0"
              style={{ background: "#1956f3", minHeight: 400 }}
            >
              {/* Background pattern */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />

              {/* Content */}
              <div className="relative flex flex-col gap-[40px] items-center w-full">
                <AnimatedHeading
                  as="h2"
                  className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] text-center text-white max-w-[848px]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Entenda como podemos transformar a sua empresa com tecnologias que irão te colocar em outro patamar.
                </AnimatedHeading>
                <div style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden" }}>
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
                    style={{
                      background: "#f7f7f7",
                      color: "#000",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      boxShadow: "0px 2px 5px 0px rgba(31,36,40,0.25)",
                    }}
                  >
                    Agende uma demonstração
                  </Link>
                </div>
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
