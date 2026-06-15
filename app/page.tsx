"use client";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";
import HeroDashboard from "./components/HeroDashboard";
import Image from "next/image";

/* ─── Mobile breakpoint hook ─────────────────────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

/* ─── Animation helper ───────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── CountUp ────────────────────────────────────────────── */
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
      {count.toLocaleString("pt-BR")}
    </span>
  );
}

/* ─── Asset URLs ─────────────────────────────────────────── */
// Hero / Dashboard cards
const IMG_CAR_FRONT       = "/car-front.svg";
const IMG_USER_CHECK      = "/user-round-check.svg";
const IMG_CHART_SPLINE    = "/chart-spline.svg";
const IMG_FOLDER_PEN      = "/folder-pen.svg";
const IMG_TARGET          = "/target.svg";
const IMG_USER_PLUS       = "/user-plus.svg";
// Functionalities — Products/Solutions
const IMG_I3_GESTAO = "/i3gestao.svg";
const IMG_I3_CRM    = "/i3crm.svg";
const IMG_I3_MGA    = "/i3mga.svg";
const IMG_I3_APP    = "/i3app.svg";
const IMG_I3_TRACK  = "/i3track.svg";
// Old Functionalities
const IMG_FEAT_CRM        = "/layout-dashboard.svg";
const IMG_FEAT_AUTO       = "/send.svg";
const IMG_FEAT_CLIENTS    = "/dollar-sign.svg";
const IMG_FEAT_FIN        = "/users.svg";
const IMG_FEAT_REPORTS    = "/layers.svg";
// Differentials
const IMG_DIFF_BOT        = "/bot.svg";
const IMG_DIFF_BLOCKS     = "/blocks.svg";
const IMG_DIFF_SPARKLES   = "/sparkles.svg";
const IMG_DIFF_GAUGE      = "/circle-gauge.svg";
const IMG_DIFF_COMBINE    = "/combine.svg";
const IMG_DIFF_SHIELD     = "/shield-check.svg";
const IMG_DIFF_DIV        = "https://www.figma.com/api/mcp/asset/0737b004-f143-47a2-b0a4-6ac9a4f92127";
// Target Audience
const IMG_AUD_1           = "/tags.svg";
const IMG_AUD_2           = "/map-pinned.svg";
const IMG_AUD_3           = "/clipboard-list.svg";
const IMG_AUD_4           = "/car-front-01.svg";

/* ─── Hero assets ────────────────────────────────────────── */
const IMG_HERO_BROWSER_DOTS   = "/glow-back-dashboard.png";
const IMG_HERO_LOGO_BAR       = "/close-open-dash.png";
const IMG_HERO_ICON_FILTERS   = "/sliders-horizontal.png";
const IMG_HERO_ICON_DOWNLOAD  = "/download.png";
const IMG_HERO_ICON_EYE       = "/eye.png";
const IMG_HERO_ICON_PLUS      = "/plus.png";
const IMG_HERO_DIVIDER        = "https://www.figma.com/api/mcp/asset/ef5f6cac-f85e-473b-a2ce-894467d4299d";
const IMG_HERO_ICON_CAR       = "https://www.figma.com/api/mcp/asset/054b6fb3-8fb6-4267-b0a9-977965776283";
const IMG_HERO_ICON_USER      = "https://www.figma.com/api/mcp/asset/5c5206f4-ce81-4649-b569-d909de80a89e";
const IMG_HERO_ICON_CALENDAR  = "https://www.figma.com/api/mcp/asset/8232eca0-9d6b-4222-a658-4dfb8e8ad827";

const kanbanColumns = [
  {
    title: "Aguardando", count: 1,
    cards: [
      { name: "Maria Souza", source: "Instagram", status: "Aguardando", statusColor: "#888" },
    ],
  },
  {
    title: "Aceite", count: 2,
    cards: [
      { name: "José Amaral", source: "Google", status: "Não aceita", statusColor: "#f4615b" },
      { name: "Bruno Alves", source: "Facebook", status: "Aguardando", statusColor: "#888" },
    ],
  },
  {
    title: "Documentos", count: 1,
    cards: [
      { name: "Carlos Alex", source: "Whatsapp", status: "Aguardando", statusColor: "#fbb833" },
    ],
  },
  {
    title: "Vistoria Online", count: 2,
    cards: [
      { name: "Diego Amaral", source: "Instagram", status: "Aguardando", statusColor: "#888" },
      { name: "Julia Maria", source: "Facebook", status: "Aguardando", statusColor: "#888" },
    ],
  },
];

function KanbanCard({ name, source, status, statusColor }: { name: string; source: string; status: string; statusColor: string }) {
  return (
    <div style={{ background: "#cce0ff", borderRadius: 16, padding: 8, height: 260 }}>
      <motion.div
        variants={cardChildVariants}
        style={{ background: "white", border: "1px solid rgba(51,133,255,0.5)", borderRadius: 8, height: "100%", padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        {/* Top */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <motion.span variants={textVariants} style={{ color: "#0052e6", fontSize: 16, fontFamily: "var(--font-roobert), sans-serif" }}>{name}</motion.span>
            <motion.span variants={badgeVariants} style={{ background: "#f0f0f0", borderRadius: 6, padding: "2px 12px", fontSize: 12, color: "#333", fontFamily: "var(--font-roobert), sans-serif" }}>{source}</motion.span>
          </div>
          <motion.div variants={textVariants} style={{ height: 1, background: "#e5e5e5" }} />
        </div>
        {/* Middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: IMG_HERO_ICON_CAR, text: "Fiat - Toro Freedom 1.8 16V Flex Aut. - 2021/Flex" },
            { icon: IMG_HERO_ICON_USER, text: "CONSULTOR EXTERNO" },
            { icon: IMG_HERO_ICON_CALENDAR, text: "Criado em: 26/01/2026" },
          ].map(({ icon, text }) => (
            <motion.div key={text} variants={textVariants} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <img src={icon} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#333", fontFamily: "var(--font-roobert), sans-serif", lineHeight: 1 }}>{text}</span>
            </motion.div>
          ))}
        </div>
        {/* Bottom */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <motion.div variants={textVariants} style={{ height: 1, background: "#e5e5e5" }} />
          <motion.span variants={badgeVariants} style={{ background: statusColor, borderRadius: 300, padding: "6px 12px", fontSize: 12, color: statusColor === "#888" ? "#f7f7f7" : "white", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600, alignSelf: "flex-start" }}>
            {status}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Dashboard animation variants ──────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;
const dashboardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
};
const toolbarVariants = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const colVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const colChildrenVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const cardChildVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const textVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease } },
};

/* ─── Dashboard scaled wrapper ───────────────────────────── */
const MOCKUP_W = 1240;
const MOCKUP_H = 760; // estimated rendered height

function DashboardScaled() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isMobile) return;
    function update() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setScale(w / MOCKUP_W);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile]);

  if (!isMobile) return <DashboardMockup />;

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <div style={{ height: MOCKUP_H * scale, overflow: "hidden" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: MOCKUP_W }}>
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Mockup ───────────────────────────────────── */
function DashboardMockup() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [52, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ perspective: isMobile ? undefined : 1200, width: 1240 }}>
      <motion.div
        style={{ rotateX: isMobile ? 0 : rotateX, opacity: isMobile ? 1 : opacity, transformOrigin: "top center" }}
        initial={{ scale: isMobile ? 1 : 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div style={{ position: "relative", width: 1240 }}>
          {/* Blue glow — absolute, behind panel */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 41, zIndex: 0, overflow: "visible" }}>
            <div style={{ position: "absolute", inset: "-252.44% -8.35%" }}>
              <img src={IMG_HERO_BROWSER_DOTS} alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} />
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <HeroDashboard />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* Pattern — fade pulsante */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "url('/pattern-hero.svg')", backgroundRepeat: "repeat", backgroundSize: "auto" }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 pt-20 md:pt-[108px] pb-8 flex flex-col gap-10 md:gap-[80px] items-center">
        {/* Text + buttons */}
        <div className="flex flex-col gap-[40px] items-center">
          <div className="flex flex-col gap-5 items-center text-center text-white">
            <AnimatedHeading as="h1" className="text-[22px] md:text-[40px] leading-[1.25]" style={{ fontFamily: "var(--font-roobert), sans-serif", maxWidth: 1004 }}>
              <span style={{ fontWeight: 400 }}>Tecnologias inteligentes para a gestão e controle da sua </span>
              <span style={{ fontWeight: 600, color: "#0066ff" }}>entidade de proteção patrimonial mutualista, centrais de rastreamento e seguradoras.</span>
            </AnimatedHeading>
            <motion.p
              className="text-[16px] leading-[1.6]"
              style={{ fontFamily: "var(--font-roobert), sans-serif", maxWidth: 652, color: "white" }}
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Com a i3Tech, a sua empresa conseguirá otimizar operações comerciais, gestão administrativa e financeira e gestão de ativos em campo.
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-stretch md:items-center w-full md:w-auto">
            <div style={{ position: "relative", borderRadius: 6, padding: 2, overflow: "hidden" }}>
              {/* Spinning ray */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-150%",
                  background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Link href="/funcionalidades" className="relative z-10 text-[14px] text-[#f7f7f7] px-5 py-[14px] rounded-[4px] transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] block text-center" style={{ background: "#1956f3", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600 }}>
                Confira nossas funcionalidades
              </Link>
            </div>
            <Link href="/planos" className="text-[14px] text-[#f7f7f7] px-5 py-[14px] rounded-[4px] transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] text-center" style={{ background: "#333", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0px 2px 5px rgba(31,31,31,0.25)", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600 }}>
              Nossos planos
            </Link>
          </div>
        </div>

        {/* Dashboard mockup — scaled to fit any viewport */}
        <DashboardScaled />
      </div>
    </section>
  );
}

/* ─── About assets ───────────────────────────────────────── */
const ICON_ABOUT_1 = <img src="/shield-check-2.svg" width={28} height={28} alt="" />;
const ICON_ABOUT_2 = <img src="/map-pin.svg" width={28} height={28} alt="" />;
const ICON_ABOUT_3 = <img src="/building-2.svg" width={28} height={28} alt="" />;
const IMG_ABOUT_DIVIDER = "https://www.figma.com/api/mcp/asset/f6d4e907-2b9d-4fde-a693-e4d7db9da5ff";

const aboutColumns = [
  {
    icon: ICON_ABOUT_1,
    title: "Para sua proteção patrimonial mutualista PPM",
    desc: "Com as soluções i3Tech, a sua proteção patrimonial terá total controle em gestão administrativa financeira e comercial. Com as soluções i3Gestão e i3Crm a sua organização estará em outro patamar.",
  },
  {
    icon: ICON_ABOUT_2,
    title: "Para sua central de rastreamento",
    desc: "Com as soluções i3Tech, a sua central de rastreamento terá total controle dos ativos em campo. Com as soluções i3Track e i3Aplicativos, a sua central estará em outro patamar.",
  },
  {
    icon: ICON_ABOUT_3,
    title: "Para sua\nseguradora",
    desc: "Com as soluções i3Tech, a sua seguradora terá total controle em gestão administrativa financeira e operacional. Com a solução i3Mga, a sua seguradora estará em outro patamar.",
  },
];

/* ─── About ──────────────────────────────────────────────── */
function About() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-5 pt-8 pb-16 flex flex-col gap-16">

        {/* Headline */}
        <FadeUp>
          <AnimatedHeading as="p" className="text-[20px] md:text-[32px] leading-[1.4] text-white text-center mx-auto" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 300, maxWidth: 1008 }}>
            A i3Tech é a 1º empresa do mercado brasileiro,{" "}
            <span style={{ fontWeight: 600, color: "#0052e6" }}>
              a desenvolver tecnologias de cálculo atuarial, para sua proteção patrimonial mutualista, central de rastreamento e seguradoras.
            </span>
          </AnimatedHeading>
        </FadeUp>

        {/* Divider */}
        <div style={{ height: 1, background: "#242424", width: "100%" }} />

        {/* 3 columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[52px] items-start">
          {aboutColumns.map((col, i) => (
            <FadeUp key={col.title} delay={i * 0.1} className="flex flex-col gap-5 flex-1 items-center text-center">
              <div style={{ width: 86, height: 86, position: "relative", flexShrink: 0 }}>
                {/* Ellipse maior — node 0:285 — 86x86, inset 0 */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px solid transparent",
                  background: "linear-gradient(#000, #000) padding-box, linear-gradient(180deg, rgba(55,135,255,0.3) 0%, rgba(55,135,255,0) 100%) border-box",
                }} />
                {/* Ellipse menor — node 0:284 — drop shadow apenas */}
                <div style={{
                  position: "absolute",
                  inset: "16.72px",
                  borderRadius: "50%",
                  boxShadow: "0px 5.97px 27.23px 0px rgba(0,82,230,0.6)",
                }} />
                {/* Local icon centered on top */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {col.icon}
                </div>
              </div>
              <AnimatedHeading as="h3" className="text-[22px] md:text-[28px] leading-[1.4]" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 500, color: "#0052e6", whiteSpace: "pre-line" }}>
                {col.title}
              </AnimatedHeading>
              <p className="text-[16px] leading-[1.8] text-[#f7f7f7]" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 300 }}>
                {col.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  const services = [
    [
      {
        logo: IMG_I3_GESTAO,
        title: "i3 Gestão",
        desc: "Plataforma ERP (Gestão empresarial) para proteção patrimonial mutualista.",
        href: "/solucoes/gestao"
      },
      {
        logo: IMG_I3_CRM,
        title: "i3 CRM",
        desc: "Sistema CRM (Gestão Comercial) para proteção patrimonial mutualista",
        href: "/solucoes/crm"
      },
      {
        logo: IMG_I3_MGA,
        title: "i3 Mga",
        desc: "Sistema MGA (Gestão completa de Seguros) para seguradoras.",
        href: "/solucoes/mga"
      },
    ],
    [
      {
        logo: IMG_I3_APP,
        title: "i3 Aplicativos",
        desc: "Aplicativos personalizados e customizados (Consultor, Associado, Rastreamento) para proteção patrimonial mutualista e centrais de rastreamento.",
        href: "/solucoes/aplicativos"
      },
      {
        title: "i3 Integrações",
        desc: "Integrações de chatbot e Ia para proteção patrimonial mutualista, centrais de rastreamento e seguradoras.",
        href: "/solucoes/integracoes",
        logo: "/i3integracoes.svg",
        isIntegrations: true
      },
      {
        logo: IMG_I3_TRACK,
        title: "i3 Track",
        desc: "Plataforma de rastreamento completa com o foco na recuperação de ativos em campo, para centrais de rastreamento.",
        href: "/solucoes/track"
      },
    ],
  ];

  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <AnimatedHeading as="h2" className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
            Veja todos os nossos serviços
          </AnimatedHeading>
        </FadeUp>

        <FadeUp>
          <div className="rounded-[20px] p-4 flex flex-col gap-4" style={{ background: "#171717" }}>
            {services.map((row, ri) => (
              <div key={ri} className="flex flex-col md:flex-row gap-4">
                {row.map((card, ci) => (
                  <FadeUp key={card.title} delay={ri * 0.1 + ci * 0.07} className="flex-1">
                    <div className="flex items-center justify-center p-3 rounded-[16px] h-[320px] transition-all duration-300" style={{ background: "#262626", border: "1px solid transparent" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(25,86,243,0.5)")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
                    >
                      <div className="flex flex-col justify-between items-start w-full h-full p-10 rounded-lg" style={{ background: "#171717" }}>
                        {card.logo && (
                          <img src={card.logo} alt={card.title} style={{ height: "39.088px", width: "auto" }} />
                        )}
                        <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-roobert), sans-serif" }}>
                          {card.desc}
                        </p>
                        <Link
                          href={card.href}
                          className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors"
                          style={{ fontFamily: "var(--font-roobert), sans-serif" }}
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Functionalities ────────────────────────────────────── */
const funcCards = [
  {
    logo: IMG_I3_GESTAO,
    logoH: 51.11, logoW: 212,
    desc: "Rateio e precificação configurados em regra atuarial, Faturamento, Relatórios, Gestão de cobranças com i3Pay, Remessa automática com os Bancos, Regra atuarial e Módulo i3CRM habilitado dentro do sistema.",
    mockup: "/image-gestao.png",
    href: "/funcionalidades#gestao-clientes",
  },
  {
    logo: IMG_I3_CRM,
    logoH: 49.4, logoW: 166.15,
    desc: "Mais Gestão comercial com: Funil de Vendas, Landing Page, Cotações Rápidas, Planos e preços configurados, Pagamentos online, Tabelas de preços, Relatórios, Regionais e Módulo i3Gestão habilitado dentro do sistema.",
    mockup: "/image-crm.png",
    href: "/funcionalidades#gestao-comercial",
  },
  {
    logo: IMG_I3_MGA,
    logoH: 51.11, logoW: 166.15,
    desc: "Seu Mga conseguirá: Realizar emissões de apólice já integradas com a seguradora, Relatórios, Auditoria online, Pagamentos, Cotações e Planos pré configurados e Gestão dos Faturáveis.",
    mockup: "/image-mga.png",
    href: "/funcionalidades#financeiro",
  },
  {
    logo: IMG_I3_APP,
    logoH: 51.11, logoW: 282.17,
    desc: "Aplicativos desenvolvidos e customizados para: Associado, Consultor, Gestão Multinível de comissionamento, Vistoria, Termo de Aceite e Rastreamento Veicular.",
    mockup: "/image-app.png",
    href: "/funcionalidades#chatbot",
  },
  {
    logo: "/i3integracoes.svg",
    logoH: 51.11, logoW: 272.754,
    desc: "Utilize ferramentas como chatbot e Ia dentro das tecnologias da i3Tech.",
    mockup: "/image-integracoes.png",
    href: "/funcionalidades#relatorios",
  },
  {
    logo: IMG_I3_TRACK,
    logoH: 51.11, logoW: 186.824,
    desc: "Software completo de rastreamento com funcionalidades para prevenção de furto e roubo. Com i3Track, a sua central de rastreamento terá: Relatórios, Histórico, Geocerca, Gestão de sinistros, Alertas, Localização e Dashboard.",
    mockup: "/image-track.png",
    href: "/funcionalidades#automacao-vendas",
  },
];

const CARD_H = 664;
const CARD_EXTRA_SCROLL = 220;

function FuncCard({ card, index, isLast }: { card: typeof funcCards[0]; index: number; isLast: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 0.88]);

  if (isMobile) {
    return (
      <div ref={wrapperRef} className="mb-4">
        <div
          style={{
            background: "#171717",
            border: "1px solid #242424",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "36px 24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
            <img
              src={card.logo}
              alt=""
              style={{ height: card.logoH * 0.65, width: "auto", objectFit: "contain", objectPosition: "left" }}
            />
            <p style={{ color: "#f7f7f7", fontSize: 14, lineHeight: 1.8, fontFamily: "var(--font-roobert), sans-serif" }}>
              {card.desc}
            </p>
            <Link
              href={card.href}
              style={{
                display: "inline-block",
                background: "#171717",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 4,
                padding: "10px 20px",
                color: "#f7f7f7",
                fontSize: 14,
                fontFamily: "var(--font-roobert), sans-serif",
                alignSelf: "flex-start",
              }}
            >
              Saiba mais
            </Link>
          </div>
          <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
            <img
              src={card.mockup}
              alt=""
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} style={{ height: isLast ? CARD_H : CARD_H + CARD_EXTRA_SCROLL }}>
      <div style={{ position: "sticky", top: 80, zIndex: index + 1, height: CARD_H }}>
        <motion.div
          style={{
            scale,
            transformOrigin: "top center",
            height: "100%",
            display: "flex",
            background: "#171717",
            border: "1px solid #242424",
            borderRadius: 32,
            overflow: "hidden",
          }}
        >
          {/* Left — info */}
          <div
            style={{
              width: "50%",
              flexShrink: 0,
              padding: "105px 64px 64px 64px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <img
                src={card.logo}
                alt=""
                style={{ height: card.logoH, width: card.logoW, objectFit: "contain", objectPosition: "left" }}
              />
              <p style={{ color: "#f7f7f7", fontSize: 14, lineHeight: 1.8, fontFamily: "var(--font-roobert), sans-serif", maxWidth: 390 }}>
                {card.desc}
              </p>
            </div>
            <Link
              href={card.href}
              style={{
                display: "inline-block",
                background: "#171717",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 4,
                padding: "10px 20px",
                color: "#f7f7f7",
                fontSize: 16,
                fontFamily: "var(--font-roobert), sans-serif",
                alignSelf: "flex-start",
              }}
            >
              Saiba mais
            </Link>
          </div>

          {/* Right — mockup */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "flex-end", overflow: "hidden" }}>
            <div style={{ height: 664, overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
              <img
                src={card.mockup}
                alt=""
                style={{ display: "block", height: 660, width: "auto", objectFit: "contain", objectPosition: "bottom right" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Functionalities() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-5 pt-16 pb-16">
        <FadeUp className="text-center pb-10">
          <AnimatedHeading as="h2" className="text-[26px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
            Conheça todas as nossas funcionalidades
          </AnimatedHeading>
        </FadeUp>

        <div>
          {funcCards.map((card, i) => (
            <FuncCard key={card.href} card={card} index={i} isLast={i === funcCards.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Differentials ──────────────────────────────────────── */
// Figma: single bg-[#171717] card with 3 columns × 2 items each
const diffItems = [
  {
    icon: "/bot.svg",
    title: "Automação inteligente na gestão empresarial",
    desc: "Erp e Crm totalmente interligados em um único ambiente, como regras de pagamento via remessa automática nos bancos homologados.\nInterface simples e intuitiva na gestão comercial\n\nCrm totalmente unificado com as regras de vistoria, assinatura de contrato e com fluxos e processos de comissionamento e gestão.",
  },
  {
    icon: "/sparkles.svg",
    title: "Operação de seguros 100% otimizada",
    desc: "Mga totalmente integrado com a regra da seguradora, visando uma gestão efetiva com indicadores facilitados.",
  },
  {
    icon: "/combine.svg",
    title: "Aplicações mobile para Android e Ios",
    desc: "Aplicativos desenvolvidos sob medida, e personalizados em loja.",
  },
  {
    icon: "/blocks.svg",
    title: "Sistema personalizado de ativos em campo",
    desc: "Focado para prevenção de furtos e roubos na sua operação de rastreamento.",
  },
  {
    icon: "/circle-gauge.svg",
    title: "Integrações inovadoras para o seu negócio ficar inteligente",
    desc: "Ia e chatbot adaptado dentro da sua regra de negócio, seja financeiro ou comercial.",
  },
];

function Differentials() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-5 py-[64px] flex flex-col gap-[40px]">
        <FadeUp className="text-center">
          <AnimatedHeading as="h2" className="text-[28px] md:text-[40px] font-semibold leading-[1.2] text-center" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif", whiteSpace: "pre-line" }}>
            {`Entenda os nossos diferenciais e\nfaça parte dessa nova era`}
          </AnimatedHeading>
        </FadeUp>

        <div className="flex flex-col md:flex-row gap-[40px] items-center">
            {/* Left — image */}
            <FadeUp className="w-full shrink-0 h-[450px] md:h-[640px] md:w-[600px]">
              <div style={{ width: "100%", height: "100%", borderRadius: 40, overflow: "hidden", position: "relative" }}>
                <Image src="/foto-diferenciais.jpg" alt="Equipe i3TECH em reunião de planejamento" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeUp>

            {/* Right — differentials list */}
            <div className="flex-1 min-w-0 flex flex-col gap-0">
              {diffItems.map((item, i) => (
                <div key={item.title}>
                  <FadeUp delay={i * 0.1}>
                    <div className="flex gap-[16px] items-start py-[24px]">
                      {/* Icon */}
                      <div className="flex items-center justify-center rounded-[10px] shrink-0" style={{ width: 40, height: 40, background: "rgba(25,86,243,0.15)", border: "1px solid rgba(25,86,243,0.3)" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.icon} alt="" style={{ width: 20, height: 20 }} />
                      </div>
                      {/* Text */}
                      <div className="flex flex-col gap-[6px]">
                        <span className="text-[15px] font-semibold" style={{ color: "#66a3ff", fontFamily: "var(--font-roobert), sans-serif", lineHeight: 1.3 }}>
                          {item.title}
                        </span>
                        <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-roobert), sans-serif", margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                  {i < diffItems.length - 1 && (
                    <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}

/* ─── Target Audience ────────────────────────────────────── */
const IMG_SEGMENT_ICON = "https://www.figma.com/api/mcp/asset/c1b6d077-302b-4148-a871-0d1a41460d47";

const audiences = [
  { title: "Proteção patrimonial\nmutualista PPM", desc: "Associações de proteção veicular.",                                                               icon: "/shield-check-2.svg", image: "/foto-ppm.png", titleWidth: 160 },
  { title: "Centrais de Rastreamento",             desc: "Empresas de LBS que realizam a prevenção dos veículos furtados e roubados.",                    icon: "/map-pin.svg",         image: "/foto-centrais.jpeg" },
  { title: "Seguradoras",                          desc: "Mga que representam as seguradas parceiras e já homologadas.",                                  icon: "/building-2.svg",      image: "/foto-seguradora.jpeg", imagePosition: "center 30%" },
];

function TargetAudience() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-[64px] flex flex-col gap-[40px]">
        <FadeUp className="text-center">
          <AnimatedHeading as="h2" className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
            Nosso segmento
          </AnimatedHeading>
        </FadeUp>

        <div className="flex flex-col md:flex-row gap-[20px]">
          {audiences.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.1} className="flex-1">
              <div className="w-full rounded-[32px] overflow-hidden relative flex flex-col" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}>
                {/* Imagem */}
                <div style={{ width: "100%", height: 320, background: "rgba(255,255,255,0.04)", flexShrink: 0, overflow: "hidden" }}>
                  {a.image && <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: ("imagePosition" in a ? a.imagePosition : "center") as string, display: "block" }} />}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[8px]" style={{ padding: 32, height: 226 }}>
                <div className="flex items-center justify-center rounded-full" style={{ width: 56, height: 56, background: "#1956f3", flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.icon} alt="" width={30} height={30} />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <AnimatedHeading as="h3" className="text-[24px] font-medium leading-[1.4]" style={{ color: "#3385ff", fontFamily: "var(--font-roobert), sans-serif", whiteSpace: "pre-line" }}>
                    {a.title}
                  </AnimatedHeading>
                  <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-roobert), sans-serif" }}>
                    {a.desc}
                  </p>
                </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────── */
const faqs = [
  {
    question: "Consigo ter uma tecnologia na minha PPM (Proteção Patrimonial Mutualista), 100% integrada e dentro de um único ambiente?",
    answer: "Sim, esse inclusive é um dos nossos diferenciais, você pode optar por mais de 4 a 5 tecnologias todos dentro de um único módulo.",
  },
  {
    question: "Quais tecnologias posso contratar da i3Tech?",
    answer: "Temos clientes em todo brasil utilizando nossas 6 soluções. São elas; I3Gestão, i3Crm, i3Mga, i3Aplicativos, I3Track, I3Integrações.",
  },
  {
    question: "Qual o segmento que a i3Tech atua?",
    answer: "Desenvolvemos as nossas tecnologias para atendermos o mercado das PPM (Proteção Patrimonial Mutualista), (Centrais de Rastreamento) e (Seguradoras).",
  },
  {
    question: "As implantações dessas tecnologias são rápidas?",
    answer: "São, temos um time de especialistas em implantação que acompanhará a sua experiência com o software do início ao uso.",
  },
  {
    question: "A i3Tech é uma empresa que chegou agora no segmento?",
    answer: "Não, somos uma empresa de tecnologia do Grupo Brasil Atuarial com mais de 20 anos de experiência no segmento em que atuamos.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div
      style={{ borderBottom: "1px solid #242424", cursor: "pointer", overflow: "hidden" }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <motion.span
          animate={{ color: open ? "#3385ff" : "#f7f7f7" }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: 16, fontFamily: "var(--font-roobert), sans-serif", fontWeight: 500, lineHeight: 1.5 }}
        >
          {question}
        </motion.span>
        <motion.div
          animate={{ rotate: open ? 45 : 0, borderColor: open ? "#3385ff" : "#333" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="#f7f7f7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ color: "#a0a0a0", fontSize: 15, fontFamily: "var(--font-roobert), sans-serif", lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-[64px] flex flex-col gap-[48px]">
        <FadeUp className="text-center">
          <AnimatedHeading as="h2" className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
            Perguntas frequentes
          </AnimatedHeading>
        </FadeUp>
        <FadeUp>
          <div style={{ borderTop: "1px solid #242424" }}>
            {faqs.map((f) => (
              <FAQItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────── */
const IMG_HOME_CTA_BG = "/pattern-hero.png";

function CTABanner() {
  return (
    <section className="w-full" id="contato" style={{ background: "#0d0d0d" }}>
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
              style={{ background: "white", minHeight: 480 }}
            >
              {/* Background pattern */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_HOME_CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />

              {/* Content */}
              <div className="relative flex flex-col gap-[40px] justify-center items-center md:items-start flex-1 px-6 md:px-[80px] pt-10 pb-0 md:py-0" style={{ zIndex: 1 }}>
                <AnimatedHeading
                  as="h2"
                  className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[530px] text-center md:text-left"
                  style={{ color: "#0047cc", fontFamily: "var(--font-roobert), sans-serif" }}
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
                    style={{
                      background: "#1956f3",
                      color: "#f7f7f7",
                      fontFamily: "var(--font-roobert), sans-serif",
                    }}
                  >
                    Agende uma demonstração
                  </Link>
                </div>
              </div>

              {/* Foto direita */}
              <div className="block relative w-full h-[380px] md:h-auto md:w-[420px] shrink-0">
                {/* Logo 3D atrás do personagem */}
                <img src="/logo-3d.png" alt="" className="w-[600px] md:w-[700px] md:min-w-[700px] absolute bottom-[20px] md:bottom-[-60px] left-1/2 md:left-[58%]" style={{ transform: "translateX(-50%)", height: "auto", display: "block", zIndex: 0 }} />
                <motion.img
                  src="/foto-cta-home.png"
                  alt=""
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[-20%] md:translate-x-0"
                  style={{ width: "100%", objectFit: "contain", objectPosition: "bottom", zIndex: 1 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />

              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Functionalities />
        <Differentials />
        <TargetAudience />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
