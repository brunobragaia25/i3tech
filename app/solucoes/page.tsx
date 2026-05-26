"use client";

import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const IMG_STATS_LEADS = "/target.svg";
const IMG_STATS_CLIENTES = "/users.svg";
const IMG_STATS_CONTRATOS = "/clipboard-list.svg";
const IMG_ICON_UNIFIED = "https://www.figma.com/api/mcp/asset/efbcf2cb-ec1c-42d7-9698-15cf2ab543df";

/* ─── CountUp Animation ────────────────────────────── */
function CountUp({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      +{count.toLocaleString("pt-BR")}
    </span>
  );
}
const IMG_ICON_AUTOMATION = "https://www.figma.com/api/mcp/asset/96ba31d1-06d0-456d-89ed-86ce6b27f511";
const IMG_ICON_VISION = "https://www.figma.com/api/mcp/asset/7eed85fe-0818-4539-bf19-8c77425e6dc3";
const IMG_ICON_SECURITY = "https://www.figma.com/api/mcp/asset/90e5a39d-9bc5-416f-8265-473b94754935";
const IMG_ICON_SCALE = "https://www.figma.com/api/mcp/asset/07e87baa-d333-4477-9dad-f5bc7d2abbd3";
const IMG_ICON_PERFORMANCE = "https://www.figma.com/api/mcp/asset/7e6b7585-9513-48b8-82ff-7f4565dc1cd7";
const IMG_VECTOR_DIVIDER = "https://www.figma.com/api/mcp/asset/e76d9892-c424-429e-a356-87b95ab8c2bf";
const IMG_CAR_ICON = "https://www.figma.com/api/mcp/asset/12745f47-9eeb-421c-8922-402be189286d";
const IMG_USER_ICON = "https://www.figma.com/api/mcp/asset/d4126c8f-7027-4795-a77b-4959a02dc41e";
const IMG_CALENDAR_ICON = "https://www.figma.com/api/mcp/asset/b189055c-0680-4933-ba84-d9c5c59594f7";
const IMG_CRM_DIVIDER = "https://www.figma.com/api/mcp/asset/18abb266-e76d-4c71-a93b-1328e0174460";
const IMG_CRM_CAR = "https://www.figma.com/api/mcp/asset/7357e275-9330-4d18-ba79-4d127c1c5eac";
const IMG_CRM_USER = "https://www.figma.com/api/mcp/asset/3255544a-edf8-4e58-a5ac-c503bafbaa6d";
const IMG_CRM_CALENDAR = "https://www.figma.com/api/mcp/asset/8d109f11-e429-4c69-959b-10efcf52ea10";

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
    { label: "Leads", value: 380, icon: IMG_STATS_LEADS },
    { label: "Clientes", value: 110, icon: IMG_STATS_CLIENTES },
    { label: "Contratos", value: 270, icon: IMG_STATS_CONTRATOS },
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
                <div className="flex items-center justify-center shrink-0" style={{ width: 32, height: 32, background: "white", borderRadius: "50%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={stat.icon} alt="" className="w-4 h-4" />
                </div>
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
                <CountUp to={stat.value} />
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
        {/* CRM Mockup Component */}
        <div className="flex-1 rounded-[12px] shrink-0 w-full" style={{ background: "white", border: "1px solid rgba(0, 0, 0, 0.08)" }}>
          <div className="p-6 md:p-8 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-medium px-3 py-1 rounded" style={{ background: "#f0f0f0", color: "#525252" }}>
                  Aceite
                </span>
                <span className="text-[12px] font-medium px-2 py-1 rounded" style={{ background: "#e0e0e0", color: "#525252", width: 28, textAlign: "center" }}>
                  1
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#e5e5e5" }} />

            {/* Customer Card */}
            <div>
              <p className="text-[12px] font-medium" style={{ color: "#525252" }}>
                Cliente
              </p>
              <p className="text-[14px] font-semibold mt-1" style={{ color: "#171717" }}>
                Abc Cliente
              </p>
              <p className="text-[12px] mt-1" style={{ color: "#737373" }}>
                facebook
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#e5e5e5" }} />

            {/* Vehicle Details */}
            <div className="flex items-start gap-3">
              <img src={IMG_CAR_ICON} alt="car" className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] font-medium" style={{ color: "#525252" }}>
                  Veículo
                </p>
                <p className="text-[14px] font-semibold mt-1" style={{ color: "#171717" }}>
                  Fiat - Toro Freedom
                </p>
              </div>
            </div>

            {/* Consultant Details */}
            <div className="flex items-start gap-3">
              <img src={IMG_USER_ICON} alt="user" className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] font-medium" style={{ color: "#525252" }}>
                  Consultor
                </p>
                <p className="text-[14px] font-semibold mt-1" style={{ color: "#171717" }}>
                  CONSULTOR EXTERNO
                </p>
              </div>
            </div>

            {/* Created Date */}
            <div className="flex items-start gap-3">
              <img src={IMG_CALENDAR_ICON} alt="calendar" className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] mt-1" style={{ color: "#737373" }}>
                  Criado em: 26/01/2026
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#e5e5e5" }} />

            {/* Status Badge */}
            <div>
              <span className="text-[12px] font-medium px-3 py-1 rounded" style={{ background: "#fce7f3", color: "#be185d" }}>
                Não aceita
              </span>
            </div>
          </div>
        </div>

        {/* Right side content */}
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
// Icons for diferenciais
const IMG_DIFF_1 = "/component.svg";
const IMG_DIFF_2 = "/workflow.svg";
const IMG_DIFF_3 = "/scan.svg";
const IMG_DIFF_4 = "/lock.svg";
const IMG_DIFF_5 = "/expand.svg";
const IMG_DIFF_6 = "/chart-column.svg";

const diferenciais = [
  {
    icon: IMG_DIFF_1,
    title: "Plataforma Unificada",
    body: "Enquanto muitas empresas utilizam ferramentas separadas para vendas, gestão e controle financeiro, a i3TECH centraliza toda a operação em um único ambiente. Isso reduz falhas, melhora a comunicação interna e aumenta a eficiência operacional.",
  },
  {
    icon: IMG_DIFF_2,
    title: "Automação Inteligente",
    body: "Automatizamos tarefas repetitivas, fluxos comerciais e processos internos, permitindo que a equipe foque em decisões estratégicas e no relacionamento com o cliente. Menos retrabalho, mais produtividade.",
  },
  {
    icon: IMG_DIFF_3,
    title: "Visão Estratégica em Tempo Real",
    body: "Dashboards e relatórios claros oferecem uma visão completa da operação, com indicadores que ajudam gestores a identificar oportunidades, corrigir gargalos e planejar o crescimento com mais segurança.",
  },
  {
    icon: IMG_DIFF_4,
    title: "Segurança e Confiabilidade",
    body: "Proteção de dados, estabilidade e organização da informação garantem que a empresa tenha controle e confiança em todas as etapas da operação.",
  },
  {
    icon: IMG_DIFF_5,
    title: "Escalabilidade Estruturada",
    body: "A i3TECH foi projetada para crescer junto com a empresa. Seja expandindo equipe, unidades ou volume de clientes, o sistema acompanha a evolução do negócio sem perder organização ou controle.",
  },
  {
    icon: IMG_DIFF_6,
    title: "Foco em Performance Comercial",
    body: "Não é apenas gestão — é performance. A plataforma foi pensada para melhorar conversão, organização do funil e acompanhamento de metas comerciais.",
  },
];

function DiferenciaisSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[64px] pb-16 md:pb-[128px] flex flex-col gap-10 items-center">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center text-center">
          <h2
            className="text-[28px] md:text-[40px] font-semibold leading-[1.2] max-w-[430px]"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Principais Diferenciais do I3TECH
          </h2>
          <p
            className="text-[20px] font-light leading-[1.4] max-w-[752px]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Enquanto muitas empresas utilizam ferramentas separadas para vendas, gestão e controle financeiro, a i3TECH centraliza toda a operação em um único ambiente. Isso reduz falhas, melhora a comunicação interna e aumenta a eficiência operacional.
          </p>
        </div>

        {/* Grid 3x2 */}
        <div className="w-full">
          {/* Top row */}
          <div className="flex relative pb-12 md:pb-16">
            {diferenciais.slice(0, 3).map((item, idx) => (
            <React.Fragment key={item.title}>
            {idx > 0 && <div className="hidden md:block absolute" style={{ left: `calc(${(100 / 3) * idx}%)`, top: 0, bottom: 0, width: 1, borderLeft: "1px dashed rgba(255,255,255,0.2)" }} />}
            <FadeUp className="flex flex-col gap-8 flex-1 px-6">
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: "50%", border: "1px solid rgba(0, 82, 230, 0.3)" }}>
                <div className="flex items-center justify-center" style={{ width: 44, height: 44, background: "rgba(0, 82, 230, 0.1)", border: "2px solid #0052e6", borderRadius: "50%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-[20px] font-medium leading-[1.4]"
                style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] font-light leading-[1.6]"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item.body}
              </p>
            </FadeUp>
            </React.Fragment>
            ))}
          </div>

          {/* Horizontal divider */}
          <div className="hidden md:block" style={{ height: 1, borderTop: "1px dashed rgba(255,255,255,0.2)" }} />

          {/* Bottom row */}
          <div className="flex relative pt-12 md:pt-16">
            {diferenciais.slice(3, 6).map((item, idx) => (
            <React.Fragment key={item.title}>
            {idx > 0 && <div className="hidden md:block absolute" style={{ left: `calc(${(100 / 3) * idx}%)`, top: 0, bottom: 0, width: 1, borderLeft: "1px dashed rgba(255,255,255,0.2)" }} />}
            <FadeUp className="flex flex-col gap-8 flex-1 px-6">
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: "50%", border: "1px solid rgba(0, 82, 230, 0.3)" }}>
                <div className="flex items-center justify-center" style={{ width: 44, height: 44, background: "rgba(0, 82, 230, 0.1)", border: "2px solid #0052e6", borderRadius: "50%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-[20px] font-medium leading-[1.4]"
                style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] font-light leading-[1.6]"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item.body}
              </p>
            </FadeUp>
            </React.Fragment>
            ))}
          </div>
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
    logo: "/i3integracoes.svg",
    name: "Integrações",
    subtitle: "Escala e crescimento estruturado",
    lead: "O i3 Integrações foi pensado para operações que desejam crescer com controle.",
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
  const imagePlaceholder =
    mod.id === "crm" ? (
      <div className="flex-1 rounded-[16px] self-stretch min-h-[200px] md:min-h-0 p-[10px] flex justify-center items-center" style={{ background: "#e6f0ff" }}>
        <div className="flex flex-col gap-6" style={{ width: 460 }}>
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 rounded-[12px]" style={{ background: "#f7f7f7" }}>
            <span className="text-[16px] font-light" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Aceite
            </span>
            <span className="text-[14px] font-light px-3 py-2 rounded-[6px] text-white" style={{ background: "#66a3ff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              1
            </span>
          </div>

          {/* Main Card */}
          <div className="rounded-[16px] p-[10px]" style={{ background: "#cce0ff" }}>
            <div className="rounded-[8px] p-7 flex flex-col gap-4" style={{ background: "white", border: "1px solid rgba(51, 133, 255, 0.5)" }}>
              {/* Customer Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] font-normal" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Abc Cliente
                  </span>
                  <span className="text-[12px] font-light px-3 py-1 rounded-[6px]" style={{ background: "#f0f0f0", color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    facebook
                  </span>
                </div>
                <div style={{ height: 1, background: "#ccc" }} />
              </div>

              {/* Details Section */}
              <div className="flex flex-col gap-3">
                {/* Vehicle */}
                <div className="flex gap-2 items-start">
                  <img src={IMG_CRM_CAR} alt="car" className="w-5 h-5 flex-shrink-0" />
                  <span className="text-[12px] font-normal" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Fiat - Toro Freedom 1.8 16V Flex Aut. - 2021/Flex
                  </span>
                </div>

                {/* Consultant */}
                <div className="flex gap-2 items-start">
                  <img src={IMG_CRM_USER} alt="user" className="w-5 h-5 flex-shrink-0" />
                  <span className="text-[12px] font-normal" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    CONSULTOR EXTERNO
                  </span>
                </div>

                {/* Date */}
                <div className="flex gap-2 items-start">
                  <img src={IMG_CRM_CALENDAR} alt="calendar" className="w-5 h-5 flex-shrink-0" />
                  <span className="text-[12px] font-normal" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Criado em: 26/01/2026
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#ccc" }} />

              {/* Status Badge */}
              <span className="text-[12px] font-semibold px-3 py-1.5 rounded-full w-fit" style={{ background: "#f8d7da", color: "#93204b", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Não aceita
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : (
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
