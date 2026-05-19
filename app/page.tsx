"use client";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";

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

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 pt-20 md:pt-[108px] pb-8 flex flex-col gap-10 md:gap-[80px] items-center">
        {/* Text + buttons */}
        <div className="flex flex-col gap-[40px] items-center">
          <div className="flex flex-col gap-5 items-center text-center text-white">
            <AnimatedHeading as="p" className="text-[22px] md:text-[40px] leading-[1.25]" style={{ fontFamily: "var(--font-roobert), sans-serif", maxWidth: 1004 }}>
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
              <Link href="/solucoes" className="relative z-10 text-[14px] text-[#f7f7f7] px-5 py-[14px] rounded-[4px] transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] block text-center" style={{ background: "#1956f3", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600 }}>
                Confira nossas soluções
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
const IMG_ABOUT_CIRCLE = "https://www.figma.com/api/mcp/asset/af498df2-1a9c-45fa-be50-fbbcef7e779e";
const ICON_ABOUT_1 = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12L11 14L15 9.99996M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z" /></svg>;
const ICON_ABOUT_2 = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.99011 3.34005C8.89754 2.23728 11.1158 1.79532 13.3002 2.08284C15.4847 2.37036 17.513 3.37126 19.0701 4.93005L13.4101 10.59M4.00011 6.00005H4.01011M2.29011 9.62005C1.9152 11.1471 1.90569 12.7411 2.26233 14.2725C2.61898 15.8039 3.33174 17.2297 4.34274 18.434C5.35374 19.6383 6.63449 20.5872 8.08101 21.2037C9.52752 21.8202 11.099 22.0869 12.6679 21.9821C14.2369 21.8773 15.759 21.4041 17.1107 20.6007C18.4624 19.7974 19.6056 18.6866 20.4475 17.3586C21.2894 16.0306 21.8063 14.5227 21.9562 12.9575C22.1061 11.3922 21.8847 9.81371 21.3101 8.35005M16.2401 7.76005C15.6646 7.18121 14.9771 6.72588 14.2196 6.42192C13.462 6.11796 12.6504 5.97175 11.8345 5.99225C11.0185 6.01276 10.2153 6.19953 9.47397 6.54115C8.73267 6.88277 8.06886 7.37206 7.52317 7.97906C6.97748 8.58607 6.56137 9.29804 6.30032 10.0714C6.03926 10.8448 5.93875 11.6633 6.00493 12.4768C6.0711 13.2904 6.30257 14.0818 6.68518 14.8028C7.06779 15.5239 7.59349 16.1592 8.23011 16.67M12.0001 18H12.0101M17.9901 11.66C18.0445 12.6114 17.8715 13.5621 17.4855 14.4333C17.0994 15.3045 16.5114 16.0713 15.7701 16.67M14.0001 12C14.0001 13.1046 13.1047 14 12.0001 14C10.8955 14 10.0001 13.1046 10.0001 12C10.0001 10.8955 10.8955 10 12.0001 10C13.1047 10 14.0001 10.8955 14.0001 12Z" /></svg>;
const ICON_ABOUT_3 = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4.00001C4 3.46957 4.21071 2.96087 4.58579 2.58579C4.96086 2.21072 5.46957 2.00001 6 2.00001H14M14 2.00001C14.3169 1.99923 14.6308 2.06122 14.9236 2.18239C15.2164 2.30357 15.4823 2.48153 15.706 2.70601L19.294 6.29401C19.5185 6.51768 19.6964 6.78359 19.8176 7.0764C19.9388 7.36921 20.0008 7.68312 20 8.00001M14 2.00001V7.00001C14 7.26522 14.1054 7.51958 14.2929 7.70711C14.4804 7.89465 14.7348 8.00001 15 8.00001H20M20 8.00001V14M14 20L16 22L20 18" /></svg>;
const IMG_ABOUT_DIVIDER = "https://www.figma.com/api/mcp/asset/f6d4e907-2b9d-4fde-a693-e4d7db9da5ff";

const aboutColumns = [
  {
    icon: ICON_ABOUT_1,
    title: "Para sua proteção patrimonial mutualista",
    desc: "Com as soluções i3Tech, a sua proteção patrimonial terá total controle em gestão administrativa financeira e comercial. Com as soluções i3Gestão e i3Crm a sua organização estará em outro patamar.",
  },
  {
    icon: ICON_ABOUT_2,
    title: "Para a sua central de rastreamento",
    desc: "Com as soluções i3Tech, a sua central de rastreamento terá total controle dos ativos em campo. Com as soluções i3Track e i3Aplicativos, a sua central estará em outro patamar.",
  },
  {
    icon: ICON_ABOUT_3,
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
          <AnimatedHeading as="p" className="text-[20px] md:text-[32px] leading-[1.4] text-white" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 300, maxWidth: 1008 }}>
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
        <div className="flex flex-col md:flex-row gap-8 md:gap-[52px] items-start">
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
                  {col.icon}
                </div>
              </div>
              <AnimatedHeading as="h3" className="text-[22px] md:text-[32px] leading-[1.4]" style={{ fontFamily: "var(--font-roobert), sans-serif", fontWeight: 500, color: "#0052e6" }}>
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
              className="relative overflow-hidden rounded-[8px] flex items-center justify-center px-6 md:px-[80px] py-16 md:py-0"
              style={{ background: "white", minHeight: 400 }}
            >
              {/* Background pattern */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_HOME_CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />

              {/* Content */}
              <div className="relative flex flex-col gap-[40px] items-center w-full">
                <AnimatedHeading
                  as="h2"
                  className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] text-center max-w-[848px]"
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
