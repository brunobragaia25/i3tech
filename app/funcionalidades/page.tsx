"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── SVG assets ────────────────────────────────────────── */
const IMG_ICON_CRM      = "/layout-dashboard.svg";
const IMG_ICON_1        = "/send.svg";
const IMG_ICON_2        = "/users.svg";
const IMG_ICON_3        = "/dollar-sign.svg";
const IMG_ICON_4        = "/layers.svg";
const IMG_CHECK         = "/check-white.svg";
const IMG_DIVIDER       = "https://www.figma.com/api/mcp/asset/fb7df162-0031-473c-93c1-fa333cbc1c14";

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
    icon: IMG_ICON_CRM,
    title: "Gestão Comercial (CRM)",
    description: [
      "O módulo de CRM da i3TECH organiza toda a jornada comercial, do primeiro contato ao fechamento. Ele oferece controle total sobre oportunidades, negociações e desempenho da equipe, garantindo previsibilidade e organização no processo de vendas.",
      "Com visualização clara do funil, histórico completo de interações e distribuição inteligente de leads, a operação ganha eficiência e mais controle sobre resultados.",
    ],
    recursos: [
      ["Funil de vendas visual e personalizável", "Histórico completo de interações", "Distribuição automática de oportunidades"],
      ["Gestão e qualificação de leads", "Acompanhamento de metas e performance"],
    ],
    id: "gestao-comercial",
    imageLeft: true,
  },
  {
    icon: IMG_ICON_1,
    title: "Automação de Vendas",
    description: [
      "A automação da i3TECH reduz tarefas repetitivas e acelera o processo comercial. O sistema permite criar fluxos automáticos de contato, envio de propostas e acompanhamento de clientes, garantindo agilidade e padronização no atendimento.",
      "Isso aumenta a produtividade da equipe e melhora a taxa de conversão.",
    ],
    recursos: [
      ["Follow-ups automáticos", "Formulários inteligentes para captação de leads", "Comunicação integrada (WhatsApp e outros canais)"],
      ["Envio de propostas e documentos", "Fluxos personalizados de atendimento"],
    ],
    id: "automacao-vendas",
    imageLeft: false,
  },
  {
    icon: IMG_ICON_2,
    title: "Gestão de Clientes e Associados",
    description: [
      "Centralize todas as informações de clientes, contratos e veículos em um único ambiente. O módulo permite acompanhar toda a jornada do cliente com organização e segurança.",
      "Ideal para operações que precisam manter controle constante da base ativa.",
    ],
    recursos: [
      ["Cadastro completo de clientes e veículos", "Atualizações automáticas", "Histórico de movimentações"],
      ["Controle de contratos e status", "Organização da base ativa"],
    ],
    id: "gestao-clientes",
    imageLeft: true,
  },
  {
    icon: IMG_ICON_3,
    title: "Financeiro & Comissões",
    description: [
      "O módulo financeiro conecta a operação comercial aos resultados financeiros. Ele permite acompanhar pagamentos, comissões e indicadores de receita com clareza e controle.",
      "Isso reduz erros, aumenta a transparência e melhora a gestão estratégica do negócio.",
    ],
    recursos: [
      ["Controle de pagamentos e recebimentos", "Integração com meios de pagamento", "Relatórios financeiros"],
      ["Gestão de comissões por consultor", "Acompanhamento de metas financeiras"],
    ],
    id: "financeiro",
    imageLeft: false,
  },
  {
    icon: IMG_ICON_4,
    title: "Relatórios & Integrações",
    description: [
      "A i3TECH transforma dados operacionais em inteligência estratégica e conecta sua operação aos principais canais e sistemas do mercado.",
      "Com dashboards em tempo real, indicadores claros e integrações automatizadas, a plataforma oferece uma visão completa do negócio, reduz falhas de informação e garante que todos os setores trabalhem com dados atualizados e confiáveis. Você acompanha resultados e mantém tudo conectado — em um único ambiente.",
    ],
    recursos: [
      ["Dashboards em tempo real", "Integração com WhatsApp e canais digitais", "Análise de conversão e origem de leads"],
      ["KPIs comerciais e operacionais", "Conexão com sites, landing pages e APIs", "Sincronização com sistemas internos"],
    ],
    id: "relatorios",
    imageLeft: true,
  },
];

/* ─── Feature image placeholder ────────────────────────── */
function FeatureImage() {
  return (
    <div
      className="shrink-0 w-full md:w-[480px] lg:w-[540px] h-[280px] md:h-[440px] rounded-[20px] flex items-center p-5"
      style={{ background: "#66a3ff" }}
    >
      <div
        className="flex-1 h-full rounded-2xl flex items-center justify-center p-2.5"
        style={{ background: "#cce0ff" }}
      >
        <div
          className="flex-1 h-full rounded-lg"
          style={{ background: "white", border: "1px solid rgba(51,133,255,0.5)" }}
        />
      </div>
    </div>
  );
}

/* ─── Feature section ───────────────────────────────────── */
function FeatureSection({ f, index }: { f: typeof features[0]; index: number }) {
  const isFirst = index === 0;
  const textContent = (
    <div className="flex-1 flex flex-col gap-5 min-w-0">
      {/* Title row */}
      <div className="flex items-center gap-5">
        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#CCE0FF" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={f.icon} alt="" className="w-4 h-4" />
        </div>
        <h2
          className="text-[24px] md:text-[32px] font-semibold leading-[1.2]"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {f.title}
        </h2>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-4">
        {f.description.map((p, i) => (
          <p
            key={i}
            className="text-[16px] font-light leading-[1.6]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* Recursos */}
      <div className="flex flex-col gap-6">
        <span
          className="text-[18px] md:text-[20px] font-semibold"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Principais recursos:
        </span>
        <div className="flex flex-col md:flex-row gap-3 md:gap-12">
          {f.recursos.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, ii) => (
                <div key={ii} className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-5 h-5 rounded-[4px] flex items-center justify-center overflow-hidden"
                    style={{ background: "#0066ff" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG_CHECK} alt="" className="w-3 h-3" />
                  </div>
                  <span
                    className="text-[15px] md:text-[16px] font-medium leading-[1.6] tracking-[-0.02em]"
                    style={{ color: "#888", fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <FadeUp id={f.id}>
      <div className={`flex flex-col ${f.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
        <FeatureImage />
        {textContent}
      </div>

      {/* Divider — not after last */}
      {index < features.length - 1 && (
        <div className="mt-10 md:mt-16 w-full h-px relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_DIVIDER} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
      )}
    </FadeUp>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1340cc 0%, #0a2080 45%, #0d0d0d 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='57' height='57'%3E%3Cpath d='M28.5 22v13M22 28.5h13' stroke='rgba(255,255,255,0.1)' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "57px 57px",
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-5 pt-16 pb-16 md:pt-[108px] md:pb-[128px] flex flex-col gap-[10px] items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[32px] md:text-[48px] leading-normal font-normal"
          style={{ color: "#3385ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Funcionalidades
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-[16px] md:text-[20px] text-white max-w-[700px]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          A i3TECH é uma plataforma completa de CRM e gestão criada para organizar, automatizar e escalar operações veiculares.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Features list ─────────────────────────────────────── */
function FeaturesSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[128px] pb-16 flex flex-col gap-10 md:gap-16">
        {features.map((f, i) => (
          <FeatureSection key={f.title} f={f} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─── CTA Banner ────────────────────────────────────────── */
function CTABanner() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-16 md:py-14 flex items-center justify-between gap-10"
            style={{ background: "#1956f3", minHeight: 430 }}
          >
            <div className="flex flex-col gap-6 max-w-[540px]">
              <h2
                className="text-[24px] md:text-[36px] font-semibold leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Pronto para transformar sua operação?
              </h2>
              <p
                className="text-[18px] leading-[1.4] text-white/80"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Agende uma demonstração e veja como a i3TECH pode impulsionar seu negócio.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 w-fit hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
                style={{
                  background: "white",
                  color: "#1956f3",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Solicitar uma demonstração
              </Link>
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
