"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const IMG_ELLIPSE = "https://www.figma.com/api/mcp/asset/477ca69d-e379-402e-9531-484f97e49724";
const IMG_ICON_UNIFIED = "https://www.figma.com/api/mcp/asset/efbcf2cb-ec1c-42d7-9698-15cf2ab543df";
const IMG_ICON_AUTOMATION = "https://www.figma.com/api/mcp/asset/96ba31d1-06d0-456d-89ed-86ce6b27f511";
const IMG_ICON_VISION = "https://www.figma.com/api/mcp/asset/7eed85fe-0818-4539-bf19-8c77425e6dc3";
const IMG_ICON_SECURITY = "https://www.figma.com/api/mcp/asset/90e5a39d-9bc5-416f-8265-473b94754935";
const IMG_ICON_SCALE = "https://www.figma.com/api/mcp/asset/07e87baa-d333-4477-9dad-f5bc7d2abbd3";
const IMG_ICON_PERFORMANCE = "https://www.figma.com/api/mcp/asset/7e6b7585-9513-48b8-82ff-7f4565dc1cd7";

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

/* ─── Hero ─────────────────────────────────────── */
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
          Soluções
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-[16px] md:text-[20px] text-white"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          A i3TECH é uma plataforma completa de CRM e gestão criada para organizar, automatizar e escalar operações veiculares.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Stats Section ─────────────────────────────── */
function StatsSection() {
  const stats = [
    { label: "Leads", value: "+380" },
    { label: "Clientes", value: "+110" },
    { label: "Contratos", value: "+270" },
  ];

  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[128px] pb-16 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-5 items-center text-center">
          <h2
            className="text-[28px] md:text-[40px] font-semibold leading-[1.2]"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Para quem é o sistema?
          </h2>
          <p
            className="text-[18px] md:text-[24px] font-light leading-[1.4] max-w-[644px]"
            style={{ color: "#a0a0a0", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Empresas que lidam com grande volume de leads, clientes e contratos, e precisam de processos claros, dados confiáveis e mais eficiência operacional.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 flex flex-col justify-between p-8 rounded-xl"
              style={{
                height: 200,
                border: "1px solid #99c2ff",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_ELLIPSE} alt="" className="w-7 h-7 shrink-0" />
                <span
                  className="text-[16px] font-semibold"
                  style={{ color: "#66a3ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
              <span
                className="text-[34px] font-bold leading-none"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── CRM Section ────────────────────────────────── */
function CRMSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-[60px]">
        <div
          className="flex-1 rounded-[12px] shrink-0 h-[200px] md:h-[500px] w-full"
          style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}
        />
        <div className="flex-1 flex flex-col gap-5">
          <h2
            className="text-[28px] md:text-[40px] font-semibold leading-[1.2]"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Como funciona o CRM?
          </h2>
          <p
            className="text-[20px] leading-[1.4]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            O sistema centraliza todas as interações comerciais, automatiza tarefas repetitivas e oferece uma visão completa da operação em tempo real.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Diferenciais Section ───────────────────────── */
const diferenciais = [
  {
    icon: IMG_ICON_UNIFIED,
    title: "Automação inteligente de processos",
    body: "Fluxos automatizados que reduzem tarefas manuais e aumentam a eficiência da operação.",
  },
  {
    icon: IMG_ICON_AUTOMATION,
    title: "Interface simples e intuitiva",
    body: "Uma plataforma fácil de usar, pensada para produtividade desde o primeiro acesso.",
  },
  {
    icon: IMG_ICON_VISION,
    title: "Centralização total da operação",
    body: "Vendas, clientes, financeiro e dados reunidos em um único ambiente.",
  },
  {
    icon: IMG_ICON_SCALE,
    title: "Sistema modular e escalável",
    body: "Adapte o sistema ao tamanho e à complexidade do seu negócio, sem limitações.",
  },
  {
    icon: IMG_ICON_PERFORMANCE,
    title: "Performance comercial real",
    body: "Dados claros para acompanhar resultados, corrigir rotas e vender com mais consistência.",
  },
  {
    icon: IMG_ICON_SECURITY,
    title: "Segurança e confiabilidade dos dados",
    body: "Informações protegidas, com controle, estabilidade e total confiabilidade.",
  },
];

function DiferenciaisSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:pt-16 md:pb-[64px] flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center text-center">
          <h2
            className="text-[28px] md:text-[40px] font-semibold leading-[1.2] max-w-[430px]"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Saiba sobre os diferenciais do CRM
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {diferenciais.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col gap-8 p-8"
              style={{
                borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" className="w-6 h-6 shrink-0" />
                <span
                  className="text-[16px] font-semibold leading-[1.2]"
                  style={{ color: "#e6f0ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {item.title}
                </span>
              </div>
              <p
                className="text-[14px] font-light leading-[1.6]"
                style={{ color: "#ffffff", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Modules Section ────────────────────────────── */
const modules = [
  {
    id: "crm",
    logo: "/i3crm.png",
    name: "CRM",
    subtitle: "Gestão comercial inteligente",
    lead: "O i3 CRM é o núcleo comercial da plataforma. Ele organiza leads, acompanha negociações e oferece controle total do funil de vendas.",
    body: "Com visualização clara das etapas, histórico completo de interações e distribuição inteligente de oportunidades, o módulo permite mais previsibilidade comercial e decisões baseadas em dados reais. Ideal para operações que precisam escalar vendas com organização e performance.",
    imageLeft: true,
  },
  {
    id: "gestao",
    logo: "/i3gestao.png",
    name: "Gestão",
    subtitle: "Controle operacional e administrativo",
    lead: "O i3 Gestão centraliza informações de clientes, contratos, veículos e processos internos.",
    body: "Ele permite acompanhar toda a jornada do cliente, desde a adesão até o acompanhamento contínuo, reduzindo retrabalho e garantindo mais organização na operação. É o módulo responsável por dar estrutura e estabilidade ao crescimento do negócio.",
    imageLeft: false,
  },
  {
    id: "mga",
    logo: "/i3mga.png",
    name: "Mga",
    subtitle: "Gestão para operações de MGA, seguros e produtos estruturados",
    lead: "O i3 MGA é o módulo voltado para empresas que operam com modelos de gestão mais completos, como MGA, seguros e estruturas similares no setor veicular.",
    body: "Ele organiza toda a jornada do cliente com mais profundidade, conectando o comercial à gestão de contratos, regras, status e controles operacionais. Isso permite mais padronização, redução de erros e gestão mais segura do crescimento.",
    imageLeft: true,
  },
  {
    id: "track",
    logo: "/i3track.png",
    name: "Track",
    subtitle: "Monitoramento e acompanhamento estratégico",
    lead: "O i3 Track conecta a operação comercial à gestão de contratos e ativos veiculares, permitindo acompanhamento estruturado e controle de informações relacionadas ao veículo e ao cliente.",
    body: "Ele oferece visão organizada da base ativa, facilitando consultas, atualizações e acompanhamento contínuo.",
    imageLeft: false,
  },
  {
    id: "expansao",
    logo: "/i3expansao.png",
    name: "Expansão",
    subtitle: "Escala e crescimento estruturado",
    lead: "O i3 Expansão foi pensado para operações que desejam crescer com controle.",
    body: "Permite gestão de equipes externas, unidades, representantes ou parceiros comerciais, com acompanhamento de metas, performance e indicadores estratégicos. É o módulo voltado para empresas que querem crescer sem perder organização.",
    imageLeft: true,
  },
  {
    id: "apps",
    logo: "/i3app.png",
    name: null,
    subtitle: "Mobilidade e acesso em qualquer lugar",
    lead: "Os aplicativos da i3TECH permitem que equipes comerciais e operacionais acessem informações em tempo real, atualizem dados e acompanhem atividades diretamente pelo celular.",
    body: "Mais agilidade para o dia a dia e mais integração entre campo e gestão.",
    imageLeft: false,
  },
];

function ModuleCard({ mod }: { mod: typeof modules[0] }) {
  const imagePlaceholder = (
    <div
      className="flex-1 rounded-[16px] self-stretch min-h-[200px] md:min-h-0"
      style={{ background: "#f7f7f7" }}
    />
  );

  const textBlock = (
    <div className="flex-1 flex flex-col gap-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mod.logo} alt={mod.name ?? "Aplicativos"} className="h-14 w-auto object-contain self-start" />
      <p
        className="text-[24px] font-semibold leading-[1.4]"
        style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {mod.subtitle}
      </p>
      <p
        className="text-[20px] font-medium leading-[1.5]"
        style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {mod.lead}
      </p>
      <p
        className="text-[16px] font-light leading-[1.7]"
        style={{ color: "#888", fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {mod.body}
      </p>
    </div>
  );

  return (
    <FadeUp id={mod.id}>
      <div className="rounded-[20px] p-4" style={{ background: "#171717" }}>
        <div className="rounded-[16px] p-3" style={{ background: "#262626" }}>
          <div
            className="rounded-[8px] p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start"
            style={{ background: "#171717" }}
          >
            {mod.imageLeft ? (
              <>{imagePlaceholder}{textBlock}</>
            ) : (
              <>{textBlock}{imagePlaceholder}</>
            )}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function ModulesSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-8 md:pt-[64px] pb-16">
        <FadeUp className="flex flex-col gap-5 items-center text-center mb-10">
          <h2
            className="text-[28px] md:text-[40px] font-semibold leading-[1.2] max-w-[430px]"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Visão geral dos módulos
          </h2>
          <p
            className="text-[20px] leading-[1.4] max-w-[752px]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            A i3TECH é estruturada em módulos integrados que atendem diferentes áreas da operação veicular. Cada módulo pode atuar de forma independente ou conectada, formando um ecossistema completo de gestão.
          </p>
        </FadeUp>
        <div className="flex flex-col gap-5">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} mod={mod} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────── */
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
                href="/#contato"
                className="inline-flex items-center px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
                style={{
                  background: "white",
                  color: "#1956f3",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  width: "fit-content",
                }}
              >
                Agende uma demonstração
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function SolucoesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <CRMSection />
        <DiferenciaisSection />
        <ModulesSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
