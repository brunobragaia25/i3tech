"use client";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";

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
const IMG_HERO_BROWSER_DOTS   = "https://www.figma.com/api/mcp/asset/59163ff3-0330-4eb7-974c-1ca12cca4583";
const IMG_HERO_LOGO_BAR       = "https://www.figma.com/api/mcp/asset/038c5a2d-a5df-4c88-87b1-580606067663";
const IMG_HERO_ICON_FILTERS   = "https://www.figma.com/api/mcp/asset/fa30c42a-572e-43ab-b87d-b2ce5b1f6b1b";
const IMG_HERO_ICON_DOWNLOAD  = "https://www.figma.com/api/mcp/asset/44d59985-789b-43ee-a592-869acae59132";
const IMG_HERO_ICON_EYE       = "https://www.figma.com/api/mcp/asset/2b2bc2ba-3b5a-40b9-92f3-bc101db74347";
const IMG_HERO_ICON_PLUS      = "https://www.figma.com/api/mcp/asset/d11f33fe-62d6-4e31-96e5-950246afec89";
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

/* ─── Dashboard Mockup ───────────────────────────────────── */
function DashboardMockup() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [52, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ perspective: 1200, width: 1240 }}>
      <motion.div
        style={{ rotateX, opacity, transformOrigin: "top center" }}
        initial={{ scale: 0.72, opacity: 0 }}
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
          {/* Main window */}
          <div style={{ width: 1240, position: "relative", zIndex: 1, background: "linear-gradient(to bottom, rgba(102,163,255,0.4), rgba(102,163,255,0.2))", backdropFilter: "blur(5.45px)", border: "1px solid rgba(102,163,255,0.5)", borderRadius: 12, padding: 12, boxShadow: "0px 0px 15.4px rgba(0,0,0,0.35)", gap: 10, display: "flex", flexDirection: "column" }}>
            {/* Browser bar */}
            <div style={{ padding: "8px", display: "flex", alignItems: "center" }}>
              <div style={{ width: 65.547, height: 16, position: "relative", flexShrink: 0 }}>
                <img src={IMG_HERO_LOGO_BAR} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "left" }} />
              </div>
            </div>
            {/* White content area */}
            <motion.div
              style={{ background: "white", borderRadius: 8, padding: 20 }}
              variants={dashboardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Toolbar */}
              <motion.div variants={toolbarVariants} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 40, marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ border: "1px solid #888", borderRadius: 6, padding: "8px 12px", width: 280 }}>
                    <span style={{ fontSize: 14, color: "#333", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 300 }}>Buscar</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <img src={IMG_HERO_ICON_FILTERS} alt="" style={{ width: 20, height: 20 }} />
                    <span style={{ fontSize: 14, color: "#333", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 300 }}>Filtros</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <img src={IMG_HERO_ICON_DOWNLOAD} alt="" style={{ width: 20, height: 20 }} />
                  <img src={IMG_HERO_ICON_EYE} alt="" style={{ width: 20, height: 20 }} />
                  <div style={{ background: "#e6f0ff", borderRadius: 6, padding: "8px 12px", display: "flex", gap: 10, alignItems: "center" }}>
                    <img src={IMG_HERO_ICON_PLUS} alt="" style={{ width: 20, height: 20 }} />
                    <span style={{ fontSize: 14, color: "#333", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 500 }}>Nova Cotação</span>
                  </div>
                </div>
              </motion.div>
              {/* Kanban */}
              <div style={{ display: "flex", gap: 12 }}>
                {kanbanColumns.map((col) => (
                  <motion.div
                    key={col.title}
                    variants={colVariants}
                    style={{ flex: 1, background: "#e6f0ff", borderRadius: 12, padding: 10, display: "flex", flexDirection: "column", gap: 12 }}
                  >
                    <motion.div variants={textVariants} style={{ background: "white", borderRadius: 6, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 14, color: "#333", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 500 }}>{col.title}</span>
                      <motion.span variants={badgeVariants} style={{ background: "#66a3ff", borderRadius: 6, padding: "0 12px", fontSize: 12, color: "white", fontWeight: 300, fontFamily: "var(--font-roobert), sans-serif", lineHeight: "32px" }}>{col.count}</motion.span>
                    </motion.div>
                    <motion.div variants={colChildrenVariants} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {col.cards.map((card) => (
                        <motion.div key={card.name} variants={cardVariants}>
                          <KanbanCard {...card} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 pt-[108px] pb-8 flex flex-col gap-[80px] items-center">
        {/* Text + buttons */}
        <div className="flex flex-col gap-[40px] items-center">
          <div className="flex flex-col gap-5 items-center text-center text-white">
            <AnimatedHeading as="p" className="text-[40px] leading-[1.25]" style={{ fontFamily: "var(--font-roobert), sans-serif", maxWidth: 1004 }}>
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
          <div className="flex gap-5 items-center">
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
              <Link href="/solucoes" className="relative z-10 text-[14px] text-[#f7f7f7] px-5 py-[14px] rounded-[4px] transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]" style={{ display: "inline-block", background: "#1956f3", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600 }}>
                Confira nossas soluções
              </Link>
            </div>
            <Link href="/planos" className="text-[14px] text-[#f7f7f7] px-5 py-[14px] rounded-[4px] transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "#333", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0px 2px 5px rgba(31,31,31,0.25)", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600 }}>
              Nossos planos
            </Link>
          </div>
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}

/* ─── About assets ───────────────────────────────────────── */
const IMG_ABOUT_CIRCLE = "https://www.figma.com/api/mcp/asset/af498df2-1a9c-45fa-be50-fbbcef7e779e";
const IMG_ABOUT_ICON_1 = "/shield-check.svg";
const IMG_ABOUT_ICON_2 = "/radar.svg";
const IMG_ABOUT_ICON_3 = "/file-check-corner.svg";
const IMG_ABOUT_DIVIDER = "https://www.figma.com/api/mcp/asset/f6d4e907-2b9d-4fde-a693-e4d7db9da5ff";

const aboutColumns = [
  {
    icon: IMG_ABOUT_ICON_1,
    title: "Para sua proteção patrimonial mutualista",
    desc: "Com as soluções i3Tech, a sua proteção patrimonial terá total controle em gestão administrativa financeira e comercial. Com as soluções i3Gestão e i3Crm a sua organização estará em outro patamar.",
  },
  {
    icon: IMG_ABOUT_ICON_2,
    title: "Para a sua central de rastreamento",
    desc: "Com as soluções i3Tech, a sua central de rastreamento terá total controle dos ativos em campo. Com as soluções i3Track e i3Aplicativos, a sua central estará em outro patamar.",
  },
  {
    icon: IMG_ABOUT_ICON_3,
    title: "Para a sua\nseguradora",
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
          <AnimatedHeading as="p" className="text-[32px] leading-[1.4] text-white" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 300, maxWidth: 1008 }}>
            A i3Tech é a 1º empresa do mercado brasileiro,{" "}
            <span style={{ fontWeight: 600, color: "#0052e6" }}>
              a desenvolver tecnologias de origem atuarial, para sua proteção patrimonial mutualista, central de rastreamento e seguradoras.
            </span>
          </AnimatedHeading>
        </FadeUp>

        {/* Divider */}
        <div style={{ height: 1, position: "relative" }}>
          <div style={{ position: "absolute", inset: "-0.5px 0" }}>
            <img src={IMG_ABOUT_DIVIDER} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
          </div>
        </div>

        {/* 3 columns */}
        <div className="flex gap-[52px] items-start">
          {aboutColumns.map((col, i) => (
            <FadeUp key={col.title} delay={i * 0.1} className="flex flex-col gap-5 flex-1">
              <div style={{ width: 86, height: 86, position: "relative", flexShrink: 0 }}>
                {/* Circle glow from Figma */}
                <div style={{ position: "absolute", inset: "-5.28% -12.22% -19.17% -12.22%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG_ABOUT_CIRCLE} alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} />
                </div>
                {/* Local icon centered on top */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={col.icon} alt="" style={{ width: 28, height: 28, filter: "brightness(0) invert(1)" }} />
                </div>
              </div>
              <AnimatedHeading as="h3" className="text-[32px] leading-[1.4]" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 500, color: "#0052e6" }}>
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
        logo: IMG_I3_TRACK,
        title: "i3 Track",
        desc: "Plataforma de rastreamento completa com o foco na recuperação de ativos em campo, para centrais de rastreamento.",
        href: "/solucoes/track"
      },
      {
        title: "i3 Integrações",
        desc: "Integrações de chatbot e Ia para proteção patrimonial mutualista, centrais de rastreamento e seguradoras.",
        href: "/solucoes/expansao",
        logo: "/i3expansao.svg",
        isIntegrations: true
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
    mockup: "https://www.figma.com/api/mcp/asset/1cc717ea-40fa-4e8a-9c72-83309005f6d0",
    href: "/funcionalidades#gestao-clientes",
  },
  {
    logo: IMG_I3_CRM,
    logoH: 49.4, logoW: 166.15,
    desc: "Mais Gestão comercial com: Funil de Vendas, Landing Page, Cotações Rápidas, Planos e preços configurados, Pagamentos online, Tabelas de preços, Relatórios, Regionais e Módulo i3Gestão habilitado dentro do sistema.",
    mockup: "https://www.figma.com/api/mcp/asset/fedf368f-e10a-4a23-964d-091e7e5cea7b",
    href: "/funcionalidades#gestao-comercial",
  },
  {
    logo: IMG_I3_MGA,
    logoH: 51.11, logoW: 166.15,
    desc: "Seu Mga conseguirá: Realizar emissões de apólice já integradas com a seguradora, Relatórios, Auditoria online, Pagamentos, Cotações e Planos pré configurados e Gestão dos Faturáveis.",
    mockup: "https://www.figma.com/api/mcp/asset/7ce503ca-104b-4f58-99a9-6c7b4741fc54",
    href: "/funcionalidades#financeiro",
  },
  {
    logo: IMG_I3_APP,
    logoH: 51.11, logoW: 282.17,
    desc: "Aplicativos desenvolvidos e customizados para: Associado, Consultor, Gestão Multinível de comissionamento, Vistoria, Termo de Aceite e Rastreamento Veicular.",
    mockup: "https://www.figma.com/api/mcp/asset/122398e6-270f-449b-a55f-7c0fba26eb12",
    href: "/solucoes/aplicativos",
  },
  {
    logo: IMG_I3_TRACK,
    logoH: 51.11, logoW: 186.824,
    desc: "Software completo de rastreamento com funcionalidades para prevenção de furto e roubo. Com i3Track, a sua central de rastreamento terá: Relatórios, Histórico, Geocerca, Gestão de sinistros, Alertas, Localização e Dashboard.",
    mockup: "https://www.figma.com/api/mcp/asset/377b0e68-0125-4571-b5ab-b6de5b348a6b",
    href: "/funcionalidades#automacao-vendas",
  },
  {
    logo: "/i3expansao.svg",
    logoH: 51.11, logoW: 272.754,
    desc: "Utilize ferramentas como chatbot e Ia dentro das tecnologias da i3Tech.",
    mockup: "https://www.figma.com/api/mcp/asset/f01e5928-f2d8-4be4-9089-a02aac6ddb8c",
    href: "/funcionalidades#relatorios",
  },
];

const CARD_H = 664;
const CARD_EXTRA_SCROLL = 220;

function FuncCard({ card, index, isLast }: { card: typeof funcCards[0]; index: number; isLast: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 0.88]);

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
          <div style={{ width: 660, flexShrink: 0, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
            <div style={{ width: "100%", height: 560, overflow: "hidden" }}>
              <img
                src={card.mockup}
                alt=""
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left" }}
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
          <AnimatedHeading as="h2" className="text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
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
const diffCols = [
  [
    { icon: IMG_DIFF_BOT,     title: "Automação inteligente de processos", desc: "Fluxos automatizados que reduzem tarefas manuais e aumentam a eficiência da operação." },
    { icon: IMG_DIFF_BLOCKS,  title: "Sistema modular e escalável",        desc: "Adapte o sistema ao tamanho e à complexidade do seu negócio, sem limitações." },
  ],
  [
    { icon: IMG_DIFF_SPARKLES, title: "Interface simples e intuitiva",   desc: "Uma plataforma fácil de usar, pensada para produtividade desde o primeiro acesso." },
    { icon: IMG_DIFF_GAUGE,    title: "Performance comercial real",       desc: "Dados claros para acompanhar resultados, corrigir rotas e vender com mais consistência." },
  ],
  [
    { icon: IMG_DIFF_COMBINE, title: "Centralização total da operação",    desc: "Vendas, clientes, financeiro e dados reunidos em um único ambiente." },
    { icon: IMG_DIFF_SHIELD,  title: "Segurança e confiabilidade dos dados", desc: "Informações protegidas, com controle, estabilidade e total confiabilidade." },
  ],
];

function Differentials() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <AnimatedHeading as="h2" className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
            Saiba sobre os diferenciais do CRM
          </AnimatedHeading>
        </FadeUp>

        {/* Single card, 3 columns — exact Figma layout */}
        <FadeUp>
          <div className="flex flex-col md:flex-row gap-8 p-8 rounded-xl" style={{ background: "#171717", border: "1px solid #2e2e2e" }}>
            {diffCols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-8 flex-1 min-w-0">
                {col.map((item, ii) => (
                  <div key={item.title} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.icon} alt="" className="w-6 h-6 shrink-0" />
                        <span className="text-[16px] font-semibold" style={{ color: "#e6f0ff", fontFamily: "var(--font-roobert), sans-serif" }}>
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[14px] leading-[1.6] text-white" style={{ fontFamily: "var(--font-roobert), sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                    {/* Horizontal divider between rows */}
                    {ii < col.length - 1 && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={IMG_DIFF_DIV} alt="" className="w-full" style={{ height: 1 }} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Target Audience ────────────────────────────────────── */
const IMG_SEGMENT_ICON = "https://www.figma.com/api/mcp/asset/c1b6d077-302b-4148-a871-0d1a41460d47";

const audiences = [
  { title: "Proteção patrimonial mutualista", desc: "Associações de proteção veicular." },
  { title: "Centrais de Rastreamento",        desc: "Empresas de LBS que realizam a prevenção dos veículos furtados e roubados." },
  { title: "Seguradoras",                     desc: "Mga que representam as seguradas parceiras e já homologadas." },
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
              <div className="flex flex-col gap-[40px]">
                {/* Image placeholder */}
                <div className="w-full rounded-[32px] shrink-0" style={{ background: "#d9d9d9", height: 480 }} />

                {/* Text */}
                <div className="flex flex-col gap-[28px]">
                  <div className="shrink-0" style={{ width: 44, height: 44 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG_SEGMENT_ICON} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <AnimatedHeading as="h3" className="text-[20px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-roobert), sans-serif" }}>
                      {a.title}
                    </AnimatedHeading>
                    <p className="text-[14px] leading-[1.6] text-white" style={{ fontFamily: "var(--font-roobert), sans-serif" }}>
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

/* ─── CTA Banner ─────────────────────────────────────────── */
const IMG_HOME_CTA_BG = "https://www.figma.com/api/mcp/asset/006a7ff6-0139-4194-b02c-ab46d6450f64";

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
              className="relative overflow-hidden rounded-[8px] flex items-center justify-center px-[80px]"
              style={{ background: "white", height: 600 }}
            >
              {/* Background pattern */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_HOME_CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />

              {/* Content */}
              <div className="relative flex flex-col gap-[40px] items-center w-full">
                <AnimatedHeading
                  as="h2"
                  className="text-[32px] md:text-[39px] font-semibold leading-[48px] text-center max-w-[848px]"
                  style={{ color: "#0047cc", fontFamily: "var(--font-roobert), sans-serif" }}
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
                      background: "#1956f3",
                      color: "#f7f7f7",
                      fontFamily: "var(--font-roobert), sans-serif",
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
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
